"use client";
import { db } from "@/lib/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import InfoSection from "./_components/InfoSection";
import Hotels from "./_components/Hotels";
import PlacesToVisit from "./_components/PlacesToVisit";

function ViewTrip() {
  const [trip, setTrip] = useState<any>([]);
  let { tripId } = useParams();
  tripId = tripId.toString();

  useEffect(() => {
    tripId && GetTripData();
  }, [tripId]);

  const GetTripData = async () => {
    const docRef = doc(db, "AiTrips", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document : ", docSnap.data());
      setTrip(docSnap.data());
    } else {
      console.log("No such document!");
      return;
    }
  };

  return (
    <div className="p-10 md:px-20 lg:px44 xl:px-56">
      <InfoSection trip={trip} />
      <Hotels trip={trip} />
      <PlacesToVisit trip={trip} />
    </div>
  );
}

export default ViewTrip;
