import { Map, MapPin } from "lucide-react";
import Image from "next/image";

const DestinationCard = ({destination}) => {

    const { destinationName, category, country, departureDate, description, duration, imageUrl, price, _id} = destination;

    return (
        <div>
            <Image
                src={imageUrl}
                alt={destinationName}
                width={100}
                height={100}>
            </Image>

            <div>
                <Map/>
                <span>{country}</span>
            </div>
        </div>
    );
};

export default DestinationCard;