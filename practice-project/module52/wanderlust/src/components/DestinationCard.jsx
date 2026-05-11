import { CalendarSearchIcon, ExternalLink, Map, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DestinationCard = ({destination}) => {

    const { destinationName, category, country, departureDate, description, duration, imageUrl, price, _id} = destination;

    return (
        <div className="border border-gray-300">
            <Image
                src={imageUrl}
                alt={destinationName}
                width={400}
                height={400}>
            </Image>

            <div className="flex gap-1 items-center pt-2 px-2 text-gray-500">
                <MapPin size={16}/>
                <span>{country}</span>
            </div>
            
            <div className="flex justify-between items-center px-2">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-xl font-bold">{destinationName}</h2>
                    </div>
                </div>

                <div className="font-bold text-xl"><h3>$ {price}</h3></div>
            </div>

            <div className="flex gap-1 items-center px-2 text-gray-500">
                <CalendarSearchIcon size={16} />
                <span>{duration}</span>
            </div>

            <div>
                <button className="btn bg-transparent">
                    <Link className="flex gap-1 uppercase text-cyan-500 font-medium pb-2 px-2" href={`/destination/${_id}`}>
                    BOOK NOW <ExternalLink></ExternalLink>
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default DestinationCard;