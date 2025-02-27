"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

const books = [
  {
    id: 1,
    title: "Becoming good at reading",
    image: "/assets/images/book3.webp",
  },
  { id: 2, title: "Cambodia Book Fair", image: "/assets/images/book2.webp" },
  {
    id: 3,
    title: "Cambodia to Make E-Invoicing Mandatory Next Year",
    image: "/assets/images/book1.webp",
  },
];

export function MyCard() {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 sm:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((item) => (
          <Link href="/views" key={item.id} className="flex justify-center">
            <CardContainer className="inter-var w-full h-full">
              <CardBody className="bg-gray-50 w-full h-full flex flex-col justify-between relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border">
                <div>
                  <CardItem translateZ="50" className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-neutral-600 dark:text-white">
                    {item.title}
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 line-clamp-2 text-[14px] mt-2 dark:text-neutral-300">
                    Explore more about {item.title} by clicking the button below.by clicking the button below
                  </CardItem>
                </div>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.image}
                    height={350}
                    width={350}
                    className="aspect-[16/9] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={item.title}
                  />
                </CardItem>
                <div className="flex justify-end items-center mt-2">
                  <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl hover:underline hover:underline-offset-4 text-blue-500 text-[14px] font-bold">
                    Read More
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </Link>
        ))}
      </div>
    </div>
  );
}
