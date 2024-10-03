"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/content/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/content/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/content/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/content/dashboard/profile",
    },
  ];
  const path = usePathname();
  useEffect(() => {
    console.log("path", path);
  }, [path]);
  return (
    <div className="h-screen p-5 shadow-sm border bg-white">
      <div className="flex justify-center">
        <Image
          width={100}
          height={100}
          src="/assets/images/content-logo.svg"
          alt="COntent logo"
        />
      </div>
      <hr className="my-6 border" />

      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <div
            key={index}
            className={`flex gap-2 mb-2 p-3 hover:bg-purple-500 items-center hover:text-white rounded-lg cursor-pointer
                ${path == menu.path && "bg-purple-500 text-white "}
                `}
          >
            <menu.icon className="h-7 w-7" />
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
