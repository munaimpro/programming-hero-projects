'use client'
import { Button } from '@heroui/react';
import { CalendarSearch, MapPin, Trash2Icon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { BookingCancelAlert } from './BookingCancelAlert';

const BookingList = ({ booking }) => {

    return (
        <div className='flex gap-5 p-5 border mb-8' key={booking._id}>
            <Image
                src={booking.imageUrl}
                alt={booking.destinationName}
                width={200}
                height={200}
            />
        
            <div className='space-y-2'>
                <h1 className='font-bold text-3xl'>{booking.destinationName}</h1>
                <p className='text-muted flex items-center gap-1 font-medium'>
                    <CalendarSearch></CalendarSearch> Deperture: {new Date(booking.depertureDate).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                    })}
                </p>
                <p className='text-muted flex items-center gap-1 font-medium'>
                    <MapPin></MapPin>
                    Booking Id: {booking._id}
                </p>
                <p className="font-bold text-3xl text-cyan-500">${booking.price}</p>
            
                <BookingCancelAlert bookingId={booking._id} destinationName={booking.destinationName}></BookingCancelAlert>
            </div>
        </div>
    );
};

export default BookingList;