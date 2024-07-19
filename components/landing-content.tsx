"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, PenOff, Settings2, BadgeHelp } from "lucide-react";

const testimonials = [
  {
    name: "25+ Templates",
    avatar: <Book />,
    description:
      "Responsive, and mobile-friendly templates for all your needs!",
  },
  {
    name: "Customizable",
    avatar: <Settings2 />,
    description:
      "Component-based design, easy to customize and adapt to your needs!",
  },
  {
    name: "Free to use",
    avatar: <PenOff />,
    description: "Everything you need to get started, no credit card required!",
  },
  {
    name: "24/7 Support",
    avatar: <BadgeHelp />,
    description:
      "Contact us anytime, we are here to help you with any questions!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  {item.avatar}
                  <p className="text-lg">{item.name}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
