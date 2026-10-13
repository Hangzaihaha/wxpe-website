import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type WxpeLogoProps = {
  className?: string;
  inverted?: boolean;
  priority?: boolean;
  markOnly?: boolean;
};

export function WxpeLogo({
  className,
  inverted = false,
  priority = false,
  markOnly = false
}: WxpeLogoProps) {
  return (
    <Link
      href="/"
      aria-label="WXPE home — WXP Electronics Sdn Bhd"
      className={cn(
        "inline-flex min-h-11 shrink-0 items-center outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-offset-4",
        inverted
          ? "focus-visible:ring-white focus-visible:ring-offset-[#07111f]"
          : "focus-visible:ring-ring focus-visible:ring-offset-white",
        className
      )}
    >
      <Image
        src={markOnly ? "/assets/brand/wxp-electronics-emblem.svg" : inverted ? "/assets/brand/wxp-electronics-logo-white.svg" : "/assets/brand/wxp-electronics-logo-navy.svg"}
        alt=""
        width={markOnly ? 176 : 280}
        height={markOnly ? 194 : 61}
        priority={priority}
        unoptimized
        className={markOnly ? "h-11 w-auto shrink-0 sm:h-12" : inverted ? "h-auto w-[256px] max-w-full shrink-0" : "h-auto w-[184px] shrink-0 sm:w-[208px]"}
      />
    </Link>
  );
}
