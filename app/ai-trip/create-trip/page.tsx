"use client";
import { Button } from "@/components/ui/button";
import { AI_PROMPT, SelectBudgetOptions, SelectTravelsList } from "@/constants";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useToast } from "@/components/ui/use-toast";
import { chatSession } from "@/lib/service/AIModel";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/service/firebaseConfig";
import { useUser } from "@clerk/clerk-react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from "next/navigation";

const CreateTrip = () => {
  const [place, setPlace] = useState<any>();
  const [formData, setFormData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUser();
  const { toast } = useToast();
  const router = useRouter();
  const handleInputChange = (name: any, value: any) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const onGenerateTrip = async () => {
    if (
      formData?.noOfDays > 10 ||
      !formData?.location ||
      !formData?.traveler ||
      !formData?.budget ||
      !formData?.noOfDays
    ) {
      toast({
        title: "Error",
        description: "Please Fill All the information",
        duration: 5000,
        className: "success-toast",
      });
      return;
    }
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace("{location}", formData?.location)
      .replace("{traveler}", formData?.traveler)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOfDays);

    const result = await chatSession.sendMessage(FINAL_PROMPT);

    console.log(result?.response?.text());
    setLoading(false);
    SaveAiTrip(result?.response?.text());
  };

  const SaveAiTrip = async (TripData: any) => {
    setLoading(true);
    const docId = Date.now().toString();
    await setDoc(doc(db, "AiTrips", docId), {
      userChoice: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.primaryEmailAddress?.emailAddress,
      id: docId,
    });
    setLoading(false);
    router.push("/ai-trip/create-trip/view-trip/" + docId);
  };

  return (
    <div className="wrapper">
      <div className="mt-10">
        <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 p-5 ">
          <h2 className="font-bold text-3xl text-[#f56551]">
            Tell us your travel preferences 🏕️🌴
          </h2>
          <p className="mt-3 text-gray-500 text-xl ">
            Just provide some basic information, and our trip planner will
            generate a customized itinerary based on your preferences.
          </p>

          <div>
            <h2 className="text-xl my-3 font-medium text-black">
              What is the destination of your choice?
            </h2>
            {/* <GooglePlacesAutocomplete
              apiKey={"AIzaSyD9tqg3t1wImwKo1oiICUA52ctQ6kVAqCA"}
              selectProps={{
                // @ts-ignore
                place,
                onChange: (selectedPlace) => {
                  // @ts-ignore
                  setPlace(selectedPlace);
                  handleInputChange("location", selectedPlace);
                },
              }}
            /> */}
            <input
              placeholder="Enter Location"
              className="border-2 border-gray-300 text-black p-2 rounded-md"
              onChange={(e) => {
                const value = e.target.value;
                setPlace(value);
                handleInputChange("location", value); // Pass the updated value directly
              }}
            />
          </div>

          <div className="pt-10">
            <h2 className="text-xl my-3 font-medium text-black">
              How many days are you planning your trip?
            </h2>
            <input
              type="number"
              placeholder="Number of days"
              className="border-2 border-gray-300 text-black p-2 rounded-md "
              onChange={(e) => handleInputChange("noOfDays", e.target.value)}
            />
          </div>

          <div className="pt-10">
            <h2 className="text-xl my-3 font-medium text-black">
              What is Your Budget?
            </h2>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {SelectBudgetOptions.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleInputChange("budget", item.title)}
                  className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer
                    ${
                      formData?.budget == item.title && "shadow-lg border-black"
                    }
                    `}
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="text-bold text-lg text-black">{item.title}</h2>
                  <h2 className="text-sm">{item.desc}</h2>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-10">
            <h2 className="text-xl my-3 font-medium text-black">
              Who do you plan on traveling with on your next adventure?
            </h2>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {SelectTravelsList.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleInputChange("traveler", item.people)}
                  className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer
                    ${
                      formData?.traveler == item.people &&
                      "shadow-lg border-black"
                    }
                    `}
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="text-bold text-lg text-black">{item.title}</h2>
                  <h2 className="text-sm">{item.desc}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className="my-10 flex justify-end">
            <Button onClick={onGenerateTrip} disabled={loading}>
              {loading ? (
                <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
              ) : (
                "Generate Trip"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
