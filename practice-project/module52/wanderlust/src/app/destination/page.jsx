import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationsPage = async () => {

    const response = await fetch('http://localhost:8000/destination');
    const destinations = await response.json();

    console.log(destinations);

    return (
        <div className="container mx-auto mt-30">
            <h1 className="font-bold text-3xl mb-8">All Destinations</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination}></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default DestinationsPage;