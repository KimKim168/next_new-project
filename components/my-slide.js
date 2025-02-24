"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function MySlide() {
  const images = [
    {
      id: "1",
      image: "/assets/images/slide1.jpg",
    },
    {
      id: "2",
      image: "/assets/images/slide2.jpg",
    },
    {
      id: "3",
      image: "/assets/images/slide3.jpg",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-full mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images?.map((item) => (
          <CarouselItem key={item.id} >
            <div >
              <Card className="w-full rounded-none aspect-[32/9]">
                <Image
                  src={item.image}
                  layout="responsive"
                  width={32}
                  height={9}
                  alt="slide"
                  className="aspect-[32/9] object-cover"
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
