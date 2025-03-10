import React from "react";
import Image from "next/image";
import { BASE_API_URL, IMAGE_BANNER_URL } from "@/env";

const MyBanner = async () => {
  const banner = await fetch(`${BASE_API_URL}/banners`, {
    next: { revalidate: 3600 },
  });
  const banners = await banner.json();
//   console.log(banners)
  return (
    <>
      {banners?.map((item) => (
        <div key={item.id} className="flex-1 w-40 lg:w-80">
          <Image
            src={`${IMAGE_BANNER_URL}${item.image}`}
            width={900}
            height={3200}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </>
  );
};

export default MyBanner;
