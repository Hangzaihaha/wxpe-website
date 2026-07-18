import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type WxpeLogoProps = {
  className?: string;
  inverted?: boolean;
  priority?: boolean;
};

export function WxpeLogo({
  className,
  inverted = false,
  priority = false
}: WxpeLogoProps) {
  return (
    <Link
      href="/"
      aria-label="WXPE home"
      className={cn(
        "inline-flex items-center gap-3 outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-offset-4",
        inverted
          ? "focus-visible:ring-white focus-visible:ring-offset-[#07111f]"
          : "focus-visible:ring-ring focus-visible:ring-offset-white",
        className
      )}
    >
      <Image
        src="/assets/brand/wxpe-mark.svg"
        alt=""
        width={36}
        height={36}
        priority={priority}
        unoptimized
        className="size-9 shrink-0"
      />
      <span
        className={cn(
          "text-lg font-semibold tracking-normal",
          inverted ? "text-white" : "text-foreground"
        )}
      >
        WXPE
      </span>
    </Link>
  );
}
