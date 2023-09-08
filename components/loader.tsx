import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image
          alt="logo"
          fill
          src="/logo.png"
          sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
        />
      </div>
      <p className="text-sm text-muted-foreground">
        CIGP Bot càn chút thời gian suy nghĩ...
      </p>
    </div>
  );
};
