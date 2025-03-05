import React from "react";
import Image from "next/image";
import { BASE_API_URL, IMAGE_PAGES_URL } from "@/env";

const MyHeroSection = async () => {
  const respone = await fetch(`${BASE_API_URL}/pages?position=news`);
  const result = await respone.json();

  // if(result.type == 'text'){
  //     return result.text;
  // }
  // if(result.type == 'link'){
  //     return result.link;
  // }
  // console.log(result)
  return (
    <div className="max-w-screen-2xl mt-3 md:mt-10 mx-auto px-3 sm:px-10 lg:px-20 bg-white  overflow-hidden">
      {result?.map((item) => {
        const content = (
          <>
            <div className="md:flex">
              <div className="md:shrink-0">
                <Image
                  className="w-full object-cover aspect-video"
                  src={`${IMAGE_PAGES_URL}${item.image}`}
                  alt="Team"
                  width={200}
                  height={200}
                />
              </div>
              <div className="md:px-8 mt-2 md:mt-0">
                <div className="tracking-wide text-xl md:text-2xl text-black font-semibold">
                  {item.name}
                </div>
                <p className="mt-2 text-slate-700">{item.description}</p>
              </div>
            </div>
          </>
        );

        return item.type === "link" ? (
          <a href={item.link} key={item.id} className="block">
            {content}
          </a>
        ) : (
          <div key={item.id}>{content}</div>
        );
      })}
    </div>
  );
};

export default MyHeroSection;
