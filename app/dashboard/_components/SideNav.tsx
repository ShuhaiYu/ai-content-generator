"use client"

import { FileClock, HomeIcon, Settings, Wallet } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";

function SideNav() {
    const MenuList = [
        {
            name: "Home",
            icon: HomeIcon,
            path: "/dashboard",
        },
        {
            name: "History",
            icon: FileClock,
            path: "/dashboard/history",
        },
        {
            name: "Billing",
            icon: Wallet,
            path: "/dashboard/billing",
        },
        {
            name: "Settings",
            icon: Settings,
            path: "/dashboard/settings",
        },
    ];

    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, [path]);

  return (
    <div className="h-screen relative p-5 shadow-sm border-r bg-white">
      <div className="flex items-center justify-center">
        <Image src={"/logo.svg"} alt="logo" width={120} height={120} />
      </div>
      <div className="mt-10">
        {MenuList.map((item, index) => (
          <div key={index} className={`flex items-center space-x-4 gap-2 mt-5 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${path==item.path&& "bg-primary text-white"}`}>
            <item.icon size={24} />
            <a href={item.path} className="text-lg font-semibold">
                {item.name}
            </a>
            </div>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
