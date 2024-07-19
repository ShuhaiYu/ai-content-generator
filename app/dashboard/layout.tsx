"use client"

import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UserSubscription } from "../(context)/UserSubscription";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [totalUsage, setTotalUsage] = useState<Number>(0);
  const [userSubscription, setUserSubscription] = useState<boolean>(false);


  return (
    <TotalUsageContext.Provider value={{totalUsage, setTotalUsage}}>
      <UserSubscription.Provider value={{userSubscription, setUserSubscription}}>
    <div className="bg-slate-100 h-screen">
      <div className="hidden md:block md:w-64 fixed">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <Header />
        {children}
      </div>
    </div>
    </UserSubscription.Provider>
    </TotalUsageContext.Provider>
  );
}

export default layout;
