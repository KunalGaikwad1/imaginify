import Image from "next/image";
import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

const AiHeader = () => {
  return (
    <>
      <div className="flex justify-between px-10">
        <Image
          src="/assets/images/ai-logo.svg"
          alt="ai-logo"
          height={300}
          width={200}
        />

        <SignedIn>
          <div className="cursor-pointer">
            <UserButton afterSignOutUrl="/" showName />
          </div>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-black bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </div>
    </>
  );
};

export default AiHeader;
