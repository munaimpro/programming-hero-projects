const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
dotenv.config();

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
        await client.connect();

        const db = client.db('wanderlust');
        const destinationCollection = db.collection('destinations');

        app.post('/destination', async (request, response) => {
            const destinationData = request.body;
            const result = await destinationCollection.insertOne(destinationData);
            response.json(result);
        });

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
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