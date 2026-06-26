import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-5",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      <h2 className="text-balance text-3xl font-semibold leading-tight tracking-normal text-foreground md:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
