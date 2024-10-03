import { Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="p-5 shadow-sm border-b-2 flex bg-white justify-between items-center">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white">
        <Search />
        <input type="text" placeholder="Search..." className="outline-none" />
      </div>
      <div>
        <h2 className="bg-purple-500 p-1 rounded-full text-xs text-white px-2">
          Join Membership for just $9.99/Month
        </h2>
      </div>
    </div>
  );
}

export default Header;
