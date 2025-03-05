import React from 'react';
import Image from "next/image";
import { BASE_API_URL, IMAGE_PAGES_URL } from '@/env';

const MyDatabases = async () => {
    const respone = await fetch(`${BASE_API_URL}/pages?position=databases`, {
        next: { revalidate: 600 },
      });
  const result = await respone.json();
//   console.log(result)
  return (
    <div className="max-w-screen-2xl my-10 mx-auto px-2 sm:px-10 lg:px-20">
        <div className="flex">
          <h2
            className="text-xl md:text-2xl text-center lg:text-2xl text-black my-5 tracking-wide 
  after:content-[''] after:block after:w-24 md:after:w-32 after:h-1 after:bg-red-500 
  after:mx-auto after:mt-2 after:transition-all after:duration-300 
  hover:after:w-28 md:hover:after:w-36"
          >
            Our Databases
          </h2>
        </div>

        <div className="flex p-2 overflow-x-auto bg-slate-400 rounded-lg scroll-smooth scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500">
          {/* Repeat this block for each category */}
          {
            result?.map((item)=>(
                <a href={item.link} key={item.id} target='_blank' className="flex-shrink-0 w-[20%] md:w-[15%] min-w-[100px] px-2 hover:bg-white py-4 rounded-md hover:text-black text-white">
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={`${IMAGE_PAGES_URL}${item.image}`}
                    width={300}
                    height={300}
                    className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] mb-2 object-cover"
                    alt="image"
                  />
                  <p className="text-center text-[12px] md:text-sm">{item.name}</p>
                </div>
              </a>
            ))
          }
         
          {/* <button className="flex-shrink-0 w-[20%] md:w-[15%] min-w-[100px] px-2 hover:bg-white py-4 rounded-md hover:text-black text-white">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/assets/images/video.png"
                width={300}
                height={300}
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] mb-2 object-cover"
                alt="image"
              />
              <p className="text-center text-[12px] md:text-sm">Videos</p>
            </div>
          </button>
          <button className="flex-shrink-0 w-[20%] md:w-[15%] min-w-[100px] px-2 hover:bg-white py-4 rounded-md hover:text-black text-white">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/assets/images/epublication.png"
                width={300}
                height={300}
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] mb-2 object-cover"
                alt="image"
              />
              <p className="text-center text-[12px] md:text-sm">
                E-Publications
              </p>
            </div>
          </button>
          <button className="flex-shrink-0 w-[20%] md:w-[15%] min-w-[100px] px-2 hover:bg-white py-4 rounded-md hover:text-black text-white">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/assets/images/bulletin.png"
                width={300}
                height={300}
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] mb-2 object-cover"
                alt="image"
              />
              <p className="text-center text-[12px] md:text-sm">Bulletins</p>
            </div>
          </button>
          <button className="flex-shrink-0 w-[20%] md:w-[15%] min-w-[100px] px-2 hover:bg-white py-4 rounded-md hover:text-black text-white">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/assets/images/sociology.png"
                width={300}
                height={300}
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] mb-2 object-cover"
                alt="image"
              />
              <p className="text-center text-[12px] md:text-sm">Sociology</p>
            </div>
          </button>
          <button className="flex-shrink-0 w-[20%] md:w-[15%] min-w-[100px] px-2 hover:bg-white py-4 rounded-md hover:text-black text-white">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/assets/images/stack-books.png"
                width={300}
                height={300}
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] mb-2 object-cover"
                alt="image"
              />
              <p className="text-center text-[12px] md:text-sm">Books</p>
            </div>
          </button>
          <button className="flex-shrink-0 w-[20%] md:w-[15%] min-w-[100px] px-2 hover:bg-white py-4 rounded-md hover:text-black text-white">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/assets/images/image.png"
                width={300}
                height={300}
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] mb-2 object-cover"
                alt="image"
              />
              <p className="text-center text-[12px] md:text-sm">Images</p>
            </div>
          </button> */}

          {/* Repeat the above block for other categories */}
        </div>
      </div>
  )
}

export default MyDatabases
