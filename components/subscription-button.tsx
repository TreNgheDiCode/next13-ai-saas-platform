"use client";

import { Zap } from "lucide-react";
import axios from "axios";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface SubscriptionButtonProps {
  isPro: boolean;
}

export const SubscriptionButton = ({
  isPro = false,
}: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.log("BILLING_ERROR", error);
    } finally {
      setLoading(true);
    }
  };

  return (
    <Button disabled={loading} variant={isPro ? "default" : "premium"} onClick={onClick}>
      {isPro ? "Quản lý gói dịch vụ" : "Nâng cấp"}
      {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
};
