"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

type ProjectGalleryProps = {
  folder: string;
  count: number;
  title: string;
};

export function ProjectGallery({ folder, count, title }: ProjectGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const images = Array.from({ length: count }, (_, i) => ({
    src: `/images/portfolio/${folder}/photo-${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `${title} — foto ${i + 1}`,
  }));

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, idx) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpenIndex(idx)}
            className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-[#E8E4DD]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              unoptimized
            />
          </button>
        ))}
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent
          className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-[#1A1A1A]"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">{title}</DialogTitle>
          {openIndex !== null && (
            <div className="relative flex h-[90vh] items-center justify-center">
              <Image
                src={images[openIndex].src}
                alt={images[openIndex].alt}
                fill
                className="object-contain"
                sizes="95vw"
                unoptimized
              />
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                className="absolute right-4 top-4 rounded-full bg-[#FAFAF7]/10 p-2 text-[#FAFAF7] backdrop-blur transition-colors hover:bg-[#FAFAF7]/20"
                aria-label="Sluiten"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#FAFAF7]/10 px-4 py-2 text-xs text-[#FAFAF7] backdrop-blur">
                {openIndex + 1} / {images.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
