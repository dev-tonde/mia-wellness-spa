import Image from "next/image";
import { useId } from "react";

import { cn } from "@/lib/utils";

type PlaceholderVisualProps = {
  caption: string;
  className?: string;
  eyebrow?: string;
  imageAlt?: string;
  imageBadge?: string;
  imagePosition?: string;
  imagePriority?: boolean;
  imageSrc?: string;
  title: string;
  variant?: "hero" | "section";
};

export function PlaceholderVisual({
  caption,
  className,
  eyebrow = "Reserved visual",
  imageAlt,
  imageBadge = "Mia Wellness Spa",
  imagePosition,
  imagePriority = false,
  imageSrc,
  title,
  variant = "section",
}: PlaceholderVisualProps) {
  const titleId = useId();
  const captionId = useId();
  const shouldServeDirectPhotoAsset = imageSrc?.startsWith("/images/photos/") ?? false;
  const minHeightClassName =
    variant === "hero" ? "min-h-[26rem] sm:min-h-[29rem]" : "min-h-[22rem] sm:min-h-[24rem]";
  const imageSizes =
    variant === "hero"
      ? "(min-width: 1280px) 42vw, (min-width: 1024px) 44vw, 100vw"
      : "(min-width: 1280px) 38vw, (min-width: 1024px) 42vw, 100vw";

  if (imageSrc) {
    return (
      <figure
        className={cn(
          "relative overflow-hidden rounded-[2rem] border border-white/60 bg-off-white shadow-soft",
          minHeightClassName,
          className,
        )}
      >
        <Image
          alt={imageAlt ?? title}
          className="object-cover"
          fill
          priority={imagePriority}
          sizes={imageSizes}
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
          src={imageSrc}
          unoptimized={shouldServeDirectPhotoAsset}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(252,250,247,0.04),rgba(32,27,23,0.06)_45%,rgba(32,27,23,0.68)_100%)]" />
        <div className="absolute right-5 top-5 rounded-full border border-white/70 bg-white/78 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-charcoal/62 backdrop-blur">
          {imageBadge}
        </div>
        <figcaption className="absolute inset-x-4 bottom-4 rounded-[1.7rem] border border-white/25 bg-charcoal/72 px-5 py-5 text-off-white shadow-lg backdrop-blur-md sm:inset-x-5 sm:bottom-5">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-off-white/65">
            {eyebrow}
          </p>
          <p className="mt-3 font-display text-2xl leading-tight text-off-white">{title}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-off-white/76">{caption}</p>
        </figcaption>
      </figure>
    );
  }

  return (
    <div
      aria-labelledby={titleId}
      aria-describedby={captionId}
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-off-white via-sand-50 to-sage-50 p-6 shadow-soft",
        minHeightClassName,
        className,
      )}
      role="img"
    >
      <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-sage-200/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-pebble-200/60 blur-3xl" />
      <div className="absolute right-6 top-6 rounded-full border border-white/70 bg-white/70 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-charcoal/56 backdrop-blur">
        Future imagery
      </div>
      <div className="relative flex h-full flex-col justify-between space-y-5">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-sage-800/75">
            {eyebrow}
          </p>
          <p className="mt-3 font-display text-2xl text-charcoal" id={titleId}>
            {title}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-charcoal/68" id={captionId}>
            {caption}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[1.6rem] border border-charcoal/8 bg-white/70 p-5 backdrop-blur">
            <div className="h-28 rounded-[1.2rem] bg-gradient-to-br from-sage-100 to-sand-100 sm:h-32" />
            <div className="mt-4 h-3 w-2/3 rounded-full bg-charcoal/10" />
            <div className="mt-2 h-3 w-1/2 rounded-full bg-charcoal/8" />
          </div>
          <div className="hidden space-y-3 sm:block">
            <div className="rounded-[1.4rem] border border-charcoal/8 bg-white/70 p-4 backdrop-blur">
              <div className="h-16 rounded-[1rem] bg-gradient-to-br from-pebble-100 to-sage-100" />
              <div className="mt-4 h-3 w-4/5 rounded-full bg-charcoal/10" />
            </div>
            <div className="rounded-[1.4rem] border border-charcoal/8 bg-charcoal p-4 text-off-white shadow-lg">
              <div className="h-3 w-16 rounded-full bg-off-white/20" />
              <div className="mt-4 h-10 rounded-[1rem] border border-off-white/10 bg-off-white/8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
