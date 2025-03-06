import React from "react";
import Image from "next/image";
import { BASE_API_URL, IMAGE_PAGES_URL } from "@/env";

const MyHeroSection = async () => {
  const respone = await fetch(`${BASE_API_URL}/pages?position=hero_sections`, {
    next: { revalidate: 3600 },
  });
  const result = await respone.json();
  // console.log(result)
  return (
    <div className="max-w-screen-2xl mt-3 md:mt-10 mx-auto px-3 sm:px-10 lg:px-20 bg-white  overflow-hidden">
      {result?.map((item) => (
        <div key={item.id} className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="w-full object-cover aspect-video"
              src={`${IMAGE_PAGES_URL}${item.image}`}
              alt="image"
              width={200}
              height={200}
            />
          </div>
          <div className="md:px-8 mt-2 md:mt-0">
            <div className="tracking-wide text-xl md:text-2xl text-black font-semibold">
              {item.name}
            </div>

            <div
              className="mt-2 text-slate-700"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyHeroSection;
