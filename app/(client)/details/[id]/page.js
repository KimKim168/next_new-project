import MyBaseHeader from "@/components/header/my-base-header";
import { BASE_API_URL, IMAGE_PAGES_URL } from "@/env";
import Image from "next/image";
import React from "react";

const getPageData = async (id) => {
  const response = await fetch(`${BASE_API_URL}/pages/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }

  return response.json();
};

const Page = async ({ params }) => {
  const data = await getPageData(params.id);

  return (
    <>
      <MyBaseHeader />
      <div className="flex flex-col lg:flex lg:flex-row max-w-screen-2xl mx-auto px-6 xl:px-20">
        {/* Main Content */}
        <div className=" flex-1 py-6 xl:pl-20">
          <div className="flex flex-col">
            <div>
              <h1 className="text-2xl font-bold mb-4">{data.name}</h1>
            </div>
            <Image
              src={
                data.image
                  ? `${IMAGE_PAGES_URL}${data.image}`
                  : "/assets/images/placeholder.png"
              }
              width={600}
              height={900}
              alt="Page Image"
              className="w-full lg:w-[80%] h-auto aspect-[6/9] rounded-lg shadow-md my-5"
            />
            <p className="text-gray-700 mb-2 line-clamp-1 text-[12px] lg:text-xl">
              {data.description}
            </p>
          </div>
        </div>

        {/* Sticky Sidebar */}
        <div className="flex lg:flex-col items-center gap-5   my-10 lg:my-20">
          <div className="flex-1 w-40 lg:w-80">
            <Image
              src="/assets/images/banner1.png"
              width={900}
              height={3200}
              alt="Banner"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 w-40 lg:w-80">
            <Image
              src="/assets/images/banner2.png"
              width={900}
              height={3200}
              alt="Banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
