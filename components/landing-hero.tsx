"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Công cụ AI tốt nhất cho</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Chat Bot.",
                "Tạo hình ảnh.",
                "Video ngẫu nhiên.",
                "Đoạn âm thanh.",
                "Mã lập trình.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Với sức mạnh của AI, sáng tạo nội dung nhanh hơn gấp 10 lần
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant={"premium"}
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Bắt Đầu Miễn Phí
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal ">
        Không yêu cầu thẻ tín dụng.
      </div>
    </div>
  );
};
