"use client";

import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "BuhZeeBu",
    avatar: "/logo.png",
    title: "Software Developer",
    description: "This is the best application I've used!",
  },
  {
    name: "BuhZeeBu",
    avatar: "/logo.png",
    title: "Software Developer",
    description: "This is the best application I've used!",
  },
  {
    name: "BuhZeeBu",
    avatar: "/logo.png",
    title: "Software Developer",
    description: "This is the best application I've used!",
  },
  {
    name: "BuhZeeBu",
    avatar: "/logo.png",
    title: "Software Developer",
    description: "This is the best application I've used!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Trải nghiệm người dùng
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2 justify-between">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
                <div className="relative h-8 w-8 mr-4">
                  <Image
                    alt="Logo"
                    fill
                    src={item.avatar}
                  />
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
