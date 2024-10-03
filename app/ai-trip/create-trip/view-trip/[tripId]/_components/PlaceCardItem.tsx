import Image from "next/image";
import Link from "next/link";
import React from "react";

function PlaceCardItem({ place }: any) {
  return (
    <Link
      href={
        "https://www.google.com/maps/search/?api=1&query=" + place.placeName
      }
      target="_blank"
    >
      <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <Image
          src={"/assets/images/placeholder.jpg"}
          height={130}
          width={130}
          alt={place.name}
        />
        <div>
          <h2 className="font-bold text-lg text-black">{place.placeName}</h2>
          <p className="text-sm text-gray-500">{place.placeDetails}</p>
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
