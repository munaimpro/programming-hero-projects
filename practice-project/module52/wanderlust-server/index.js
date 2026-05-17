const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
dotenv.config();
const { createRemoteJWKSet, jwtVerify } = require('jose-cjs');

const mongo_uri = process.env.MONGO_URI;

const app = express();
const PORT = process.env.PORT || 8000

app.use(cors());
app.use(express.json());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(mongo_uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const db = client.db('wanderlust');
        const destinationCollection = db.collection('destinations');
        const bookingCollection = db.collection('bookings');
        
        const JWKS = createRemoteJWKSet(
            new URL(`${process.env.CLIENT_URL}/api/auth/jwks`)
        );

        // Verify Token
        const verifyToken = async (request, response, next) => {
            const authHeader = request.headers.authorization;
            if (!authHeader) {
                response.status(401).json({message: "Unauthorized"});
            }
            
            const token = authHeader.split(" ")[1];

            if (!token) {
                response.status(401).json({ message: "Unauthorized" });
            }

            try {
                const { payload } = await jwtVerify(token, JWKS);
                console.log(payload);
                next()
            } catch (error) {
                return response.status(403).json({message:"forbidden"})
            }
        }
         
        // Find all destination
        app.get('/destination', async (request, response) => {
            const result = await destinationCollection.find().toArray();
            response.json(result);
        })

        // Insert destination data
        app.post('/destination', verifyToken, async (request, response) => {
            const destinationData = request.body;
            const result = await destinationCollection.insertOne(destinationData);
            response.json(result);
        });

        // Find single destination
        app.get('/destination/:id', verifyToken, async (request, response) => {
            const { id } = request.params;
            const result = await destinationCollection.findOne({ _id: new ObjectId(id) });
            response.json(result);
        });

        // Update destination data
        app.patch('/destination/:id', verifyToken, async (request, response) => {
            const { id } = request.params;
            const updatedData = request.body;
            const result = await destinationCollection.updateOne(
                { _id: new ObjectId(id) },
                { $set: updatedData }
            );
            response.json(result);
        })

        // Delete destination data
        app.delete('/destination/:id', verifyToken, async (request, response) => {
            const { id } = request.params;
            console.log(id);
            const result = await destinationCollection.deleteOne({ _id: new ObjectId(id) });
            response.json(result);
        })

        // Insert booking data
        app.post('/booking', verifyToken, async (request, response) => {
            const bookingData = request.body;
            const result = await bookingCollection.insertOne(bookingData);
            response.json(result);
        })

        // Find all bookings
        app.get('/booking/:userId', verifyToken, async (request, response) => {
            const { userId } = request.params;
            const result = await bookingCollection.find({userId: userId}).toArray();
            response.json(result);
        })

        // Delete single booking
        app.delete('/booking/:bookingId', verifyToken, async (request, response) => {
            const {bookingId} = request.params;
            const result = await bookingCollection.deleteOne({ _id: new ObjectId(bookingId) });
            response.json(result);
        })

        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


// API Routes
app.get('/', (req, res) => {
    res.send("Server is running fine");
})

app.listen(PORT, () => {
    console.log("Server running on port ", PORT);
})