"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function MySlide() {
  const images = [
    { id: "1", image: "/assets/images/slide1.png", alt: "Slide 1" },
    // { id: "2", image: "/assets/images/slide2.webp", alt: "Slide 2" },
    { id: "3", image: "/assets/images/slide3.png", alt: "Slide 3" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative w-full max-w-full mx-auto">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((item) => (
            <div key={item.id} className="flex-[0_0_100%]">
              <Card className="w-full rounded-none aspect-[32/9]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1920}
                  height={540}
                  className="aspect-[32/9] object-cover"
                  priority
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
      

      {/* Dot Navigation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition ${
              index === selectedIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
