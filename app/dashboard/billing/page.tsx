// @ts-nocheck

"use client";

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { checkout } from "@/app/api/create_subscription/route";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { UserSubscription } from "@/utils/schema";
import { useUser } from "@clerk/clerk-react";
import moment from "moment";
import { useContext } from "react";
import { UserSubscription as US } from "@/app/(context)/UserSubscription";

const RightIcon = () => {
  return (
    <svg
      className="fill-current"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.0001 0.00012207C4.48608 0.00012207 7.62939e-05 4.48612 7.62939e-05 10.0001C7.62939e-05 15.5141 4.48608 20.0001 10.0001 20.0001C15.5141 20.0001 20.0001 15.5141 20.0001 10.0001C20.0001 4.48612 15.5141 0.00012207 10.0001 0.00012207ZM8.00108 14.4131L4.28808 10.7081L5.70008 9.29212L7.99908 11.5871L13.2931 6.29312L14.7071 7.70712L8.00108 14.4131Z" />
    </svg>
  );
};

const PRICING_DATA = [
  {
    name: "Plan I",
    price: "Free Forever",
    benefits: [
      "Usage up to 10,000 credit of AI Tools.",
      "Advanced analytics.",
      "Day support",
    ],
    freePlan: true,
  },
  {
    name: "Plan II",
    price: "$4.99/Month",
    benefits: [
      "Unlimited usage credit of all AI Tools.",
      "No waiting time.",
      "12/7 support.",
      "Advanced analytics.",
    ],
  },
];

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

function Billing() {
  const { user } = useUser();
  const {userSubscription, setUserSubscription} = useContext(US);


  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
      SaveSubscription();
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  const SaveSubscription = async () => {
    const result = await db.insert(UserSubscription).values({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      active: true,
      JoinDate: moment().format("DD/MM/YYYY"),
    });
    console.log(result);
    if (result) {
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-100">
      <div className="lg:bg-transparent flex flex-col lg:flex-row justify-center px-5 xl:px-0 w-full gap-6 items-center lg:items-stretch">
        {PRICING_DATA.map((data, index) => (
          <div key={index} className="relative">
            <div className="max-w-sm xl:w-[384px] p-6 bg-white group h-full rounded-2xl border xl:border-none border-[#0B0641]">
              <div className="flex flex-row gap-5 items-center">
                <span className="text-3xl font-bold">{data.name}</span>
              </div>
              <span className="flex mt-4 text-[#A9A9AA] text-2xl">
                What You&apos;ll Get
              </span>
              {data.benefits.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-2.5 items-start mt-6 text-left text-lg"
                >
                  <div className="pt-1 shrink-0">
                    <RightIcon />
                  </div>
                  <span>{data}</span>
                </div>
              ))}
              <div className="border border-dashed border-[#A9A9AA] tracking-widest my-4" />
              <div className="h-36">
                <div className="bottom-6 left-6 right-6 absolute">
                  <div className="flex justify-start items-baseline">
                    <span className="text-[32px] font-bold ">{data.price}</span>
                  </div>

                  {
                    // Show a button to subscribe only if the plan is not free
                    !data.freePlan && (
                      <form action={checkout}>
                        <Button type="submit" className="w-full bg-cover">
                          {
                            // Show a button to subscribe only if the user is not subscribed
                            !userSubscription ? "Subscribe" : "Active Plan"
                          }
                        </Button>
                      </form>
                    )
                  }

                  {
                    // Show a button to subscribe only if the plan is free
                    data.freePlan && (
                      <Button
                        variant="secondary"
                        className="w-full bg-cover cursor-default"
                      >
                        Limited Plan
                      </Button>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Billing;
