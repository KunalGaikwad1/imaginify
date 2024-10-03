"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const AiHero = () => {
  const router = useRouter();
  return (
    <div className="wrapper">
      <div className="flex-col pl-30 gap-10 ">
        <h1 className="font-extrabold text-[40px] text-black">
          <span className="text-[#f56551]">
            Discover Your Next Adventure with AI:
          </span>
          <br />
          <br />
          <br />
          Personalized Itineraries at Your Fingertips
        </h1>
        <p className="font-bold text-[18px] gap-9 mt-10">
          Your personal trip planner and travel curator, creating custom
          itineraries tailored to your interests and budget.
        </p>
      </div>
      <Button
        onClick={() => router.push("/ai-trip/create-trip")}
        className="mt-10 ml-80 font-bold text-center"
      >
        Get Started
      </Button>

      <Image
        src={"/assets/images/ai-landing.png"}
        alt="hero-img"
        width={1000}
        height={500}
      />
    </div>
  );
};

export default AiHero;
