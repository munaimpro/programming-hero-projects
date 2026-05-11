import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationsPage = async () => {

    const response = await fetch('http://localhost:8000/destination');
    const destinations = await response.json();

    console.log(destinations);

    return (
        <div>
            <h1>All Destinations</h1>

            {
                destinations.map(destination => <DestinationCard key={destination._id} destination={destination}></DestinationCard>)
            }
        </div>
    );
};

export default DestinationsPage;