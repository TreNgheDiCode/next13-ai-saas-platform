import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const BotAvatar = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage
        className="p-1"
        src="/logo.png"
        sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
      />
    </Avatar>
  );
};
