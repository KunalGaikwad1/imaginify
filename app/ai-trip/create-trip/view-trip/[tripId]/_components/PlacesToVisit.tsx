import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }: any) {
  return (
    <div>
      <h2 className="font-bold text-lg">Places to visit</h2>

      <div>
        {trip?.tripData?.itinerary?.map((item: any, index: any) => (
          <div key={index}>
            <h2 className="font-medium text-lg">{item.day}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {item.plan.map((place: any, index: any) => (
                <div key={index} className="my-3">
                  <h2 className="font-medium text-sm text-orange-500">
                    {place?.time}
                    <PlaceCardItem place={place} />
                  </h2>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
