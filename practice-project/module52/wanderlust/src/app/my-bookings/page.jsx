import BookingList from '@/components/BookingList';
import { auth } from '@/lib/auth';
import { CalendarSearch, ExternalLink, MapPin, Trash2Icon } from 'lucide-react';
import { headers } from 'next/headers';


const myBookingsPage = async () => {
    
    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user;

    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    const response = await fetch(`http://localhost:8000/booking/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const bookings = await response.json();

    return (
        <div className="container mx-auto mt-30">
            <h1 className="font-bold text-3xl mb-8">My Bookigns</h1>
            <div>
                {
                    bookings.length > 0 ? (
                        bookings.map(booking => <BookingList key={booking._id} booking={booking}></BookingList>)
                    ) : (
                        <div className="flex items-center justify-center border min-h-20">
                                <h2>You have no bookings yet</h2>
                        </div>
                    )
                    
                }
            </div>
        </div>
    );
};

export default myBookingsPage;