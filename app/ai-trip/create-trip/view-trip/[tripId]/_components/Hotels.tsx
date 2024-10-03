import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hotels({ trip }: any) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5 text-black">
        Hotel Recommendation
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {trip.tripData?.hotelOptions?.map((hotel: any, index: any) => (
          <Link
            key={index}
            href={
              "https://www.google.com/maps/search/?api=1&query=" +
              hotel?.hotelName +
              "," +
              hotel?.hotelAddress
            }
            target="_blank"
          >
            <div key={index} className="hover:scale-105 transition-all">
              <Image
                src={"/assets/images/placeholder.jpg"}
                height={1800}
                width={1800}
                alt="ol"
              />
              <div className="my-4 flex flex-col gap-2">
                <h2 className="font-medium text-black">{hotel?.hotelName}</h2>
                <h2 className="font-medium text-xs text-gray-500 ">
                  {hotel?.hotelAddress}
                </h2>
                <h2 className="text-xs text-black">{hotel?.price}</h2>
                <h2 className="text-xs text-black">
                  Rating: {hotel?.rating} stars
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
