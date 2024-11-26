
import React from "react";
import {Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const Header = () => {
  return (
    <div
      className={`sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200 flex items-center justify-between`}
    >
      <h1 className="text-lg font-semibold">Sales Dashboard</h1>
      <div className={`flex items-center gap-5  pr-3 pl-3`}>
        <input
          type="text"
          placeholder="search..."
          className={`block bg-white h-9 w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm`}
        />
        <Avatar>
          <AvatarImage src=""/>
          <AvatarFallback className={`bg-black text-blue-800`}>BC</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
