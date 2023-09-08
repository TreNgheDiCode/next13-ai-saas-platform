import { Settings } from "lucide-react";

import { Heading } from "@/components/heading";
import { checkSubscription } from "@/lib/subscription";
import { SubscriptionButton } from "@/components/subscription-button";

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div>
      <Heading
        title="Cài đặt"
        description="Quản lý tài khoản người dùng"
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "Bạn hiện đang sử dụng gói dịch vụ CIGP Chat Bot Premium"
            : "Bạn hiện đang sử dụng gói dịch vụ CIGP Chat Bot Free"}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default SettingsPage;
