'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, DateField, Label } from '@heroui/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const BookingCard = ({destination}) => {

    const { price } = destination;

    const [depertureDate, setDepertureDate] = useState(null);
    const date = new Date(depertureDate);
    const { data: session } = authClient.useSession()
    const user = session?.user

    const handleBooking = async () => {
        const bookingData = {
            userId: user.id,
            userImage: user.image,
            userName: user.name,
            destinationId: destination._id,
            destinationName: destination.destinationName,
            price: destination.price,
            imageUrl: destination.imageUrl,
            country: destination.country,
            depertureDate: date
        }

        const { data: tokenData } = await authClient.token();
        console.log(tokenData);

        const response = await fetch('http://localhost:8000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(bookingData)
        });

        const data = await response.json();

        toast.success(`${bookingData.destinationName} booked successfully`);
    }

    return (
        <Card className='rounded-none border mt-5 shadow-none w-full lg:min-w-75 text-center'>
            <p className='text-muted'>Starting from</p>
            <h2 className='text-cyan-500 text-3xl font-bold'>${price}</h2>
            <p className='text-muted'>per person</p>

            <DateField onChange={depertureDate} className="w-[256px]" name="date">
                <Label>Date</Label>
                <DateField.Group>
                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                </DateField.Group>
            </DateField>

            <Button onClick={handleBooking} className="bg-cyan-500 font-bold rounded-none w-full">Book Now</Button>
        </Card>
    );
};

export default BookingCard;