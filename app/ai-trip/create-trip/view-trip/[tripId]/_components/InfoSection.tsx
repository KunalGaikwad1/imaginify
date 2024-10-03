import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoIosSend } from "react-icons/io";
import React from "react";

function InfoSection({ trip }: any) {
  return (
    <div>
      <Image
        src={"/assets/images/placeholder.jpg"}
        width={100000}
        height={340}
        alt="image//00"
      />

      <div className="my-5 flex flex-col gap-2">
        <h2 className="font-bold text-3xl text-red-500 justify-center items-center flex ">
          {trip?.userChoice?.location}
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex gap-5">
            <h2 className="p-1 px-4 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              {trip?.userChoice?.noOfDays} Day
            </h2>
            <h2 className="p-1 px-4 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              {trip?.userChoice?.budget} Budget
            </h2>{" "}
            <h2 className="p-1 px-4 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              No of travelers : {trip?.userChoice?.traveler}
            </h2>
          </div>
          <Button>
            <IoIosSend />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
