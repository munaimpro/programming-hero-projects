import { EditModal } from "@/components/EditModal";
import { CalendarSearchIcon, Edit, ExternalLink, Map, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DeleteModal } from "../../../components/DeleteModal";
import BookingCard from "@/components/BookingCard";

const DestinationDetailsPage = async ({ params }) => {
    
    const { id } = await params;
    const response = await fetch(`http://localhost:8000/destination/${id}`);
    const destination = await response.json();

    const { destinationName, category, country, departureDate, description, duration, imageUrl, price, _id } = destination;

    return (
        <div className="container mx-auto mt-30">
            <div className="flex gap-1 justify-end mb-10">
                <EditModal destination={destination}></EditModal>
                <DeleteModal destination={destination}></DeleteModal>
            </div>

            <Image
                src={imageUrl}
                alt={destinationName}
                width={800}
                height={500}
                className="mx-auto">
            </Image>
            
            <div className="flex justify-between">
                <div className="p-2">
                    <div className="flex gap-1 items-center pt-2 px-2 text-gray-500">
                        <MapPin size={16} />
                        <span>{country}</span>
                    </div>

                    <div className="flex justify-between items-center px-2">
                        <div className="flex justify-between">
                            <div>
                                <h2 className="text-xl font-bold">{destinationName}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-1 items-center px-2 text-gray-500">
                        <CalendarSearchIcon size={16} />
                        <span>{duration}</span>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-cyan-500">Overview</h3>
                        <p>{description}</p>
                    </div>
                </div>

                <BookingCard destination={destination}></BookingCard>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;