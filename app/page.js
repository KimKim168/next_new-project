import { Button } from "@/components/ui/button";
import { MySlide } from "@/components/my-slide";
import { Phone } from "lucide-react";
import Image from "next/image";
import BookList from "@/components/my-new";
import MyNews from "@/components/my-news";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-end gap-2 max-w-screen-2xl md:px-20 mt-3">
        <Phone width={15} height={15} />
        <p>010 775589 -</p>
        <a href="#">Student Login</a>
      </div>
      {/* nav and slide */}
      <div className=" mt-3 bg-[#545454]">
        <div className="max-w-screen-2xl py-5 mx-auto px-10 lg:px-20 flex items-center">
          <div className="flex-1 flex gap-2 items-center text-2xl text-white text-center">
            <Image
              src="/assets/images/logo.png"
              width={90}
              height={90}
              alt="logo"
            />
            <p>
              វិទ្យាស្ថានជាតិអប់រំ
              <br />
              National Institute Of Education{" "}
            </p>
          </div>
          <div>
            <ul className="flex space-x-2 text-white">
              <li className="text-base border-r pr-2 border-white">Home</li>
              <li className="text-base border-r pr-2 border-white">About</li>
              <li className="text-base border-r pr-2 border-white">
                Cellections
              </li>
              <li className="text-base border-r pr-2 border-white">
                Resources
              </li>
              <li className="text-base border-r pr-2 border-white">Database</li>
              <li className="text-base border-r pr-2 border-white">
                Contac Us
              </li>
            </ul>
          </div>
        </div>
        <div>
          <MySlide />
        </div>
        {/* Search */}
        <div className="max-w-screen-2xl mx-auto px-10 lg:px-20 py-3">
          <p className="text-3xl text-white">One Search</p>
          <label
            className="mx-auto relative mt-3 bg-white min-w-sm max-w-screen-2xl flex flex-col md:flex-row items-center justify-center border pl-2 rounded-full gap-2 shadow-2xl focus-within:border-gray-300"
            htmlFor="search-bar"
          >
            <input
              id="search-bar"
              placeholder="Search By: Tittle, ISBN, Author..."
              className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
            />
            <Button className="w-full md:w-auto px-2.5 py-2 rounded-full bg-yellow-400 border-yellow-500 text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative transition-all disabled:opacity-70">
              <div className="relative">
                {/* Loading animation change opacity to display */}
                <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                  <svg
                    className="opacity-0 animate-spin w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>
                <div className="flex items-center transition-all opacity-1 valid:">
                  <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                    Go
                  </span>
                </div>
              </div>
            </Button>
          </label>
        </div>
        {/*End Search */}
      </div>
      {/*End nav and slide */}

      {/* Card with image */}
      <div className="max-w-screen-2xl mt-10 mx-auto px-10 lg:px-20 bg-white  overflow-hidden">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="w-full object-cover aspect-video"
              src="/assets/images/slide1.jpg"
              alt="Team"
              width={200}
              height={200}
            />
          </div>
          <div className="p-8">
            <div className="tracking-wide text-2xl text-black font-semibold">
              Digital Library
            </div>
            <p className="mt-2 text-slate-700">
              At [Your Company Name], we are dedicated to empowering businesses
              with cutting-edge digital solutions. Our expertise spans web
              development, mobile app solutions, SEO, digital marketing, and
              custom software development. With over 15 years of experience, we
              pride ourselves on delivering high-quality, user-friendly, and
              scalable digital products that drive growth and success. Partner
              with us to transform your online presence and achieve your
              business goals.
            </p>
          </div>
        </div>
      </div>
      {/*End Card with image */}

      {/*Categories */}
      <div className="max-w-screen-2xl my-10 mx-auto px-10 lg:px-20">
        <p className="text-3xl text-black">Our Database</p>
        <div className="flex overflow-x-auto mt-10 scroll-smooth scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500">
        {/* Repeat this block for each category */}
        <button className="flex-shrink-0 w-[20%] md:w-[15%] min-w-[100px] px-2 hover:bg-slate-400 py-4 rounded-md hover:text-white">
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
        <button className="flex-shrink-0 w-[20%] md:w-[15%] min-w-[100px] px-2 hover:bg-slate-400 py-4 rounded-md hover:text-white">
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
        <button className="flex-shrink-0 w-[20%] md:w-[15%] min-w-[100px] px-2 hover:bg-slate-400 py-4 rounded-md hover:text-white">
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
        <button className="flex-shrink-0 w-[20%] md:w-[15%] min-w-[100px] px-2 hover:bg-slate-400 py-4 rounded-md hover:text-white">
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
        <button className="flex-shrink-0 w-[20%] md:w-[15%] min-w-[100px] px-2 hover:bg-slate-400 py-4 rounded-md hover:text-white">
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
        <button className="flex-shrink-0 w-[20%] md:w-[15%] min-w-[100px] px-2 hover:bg-slate-400 py-4 rounded-md hover:text-white">
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
        <button className="flex-shrink-0 w-[20%] md:w-[15%] min-w-[100px] px-2 hover:bg-slate-400 py-4 rounded-md hover:text-white">
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
        <button className="flex-shrink-0 w-[20%] md:w-[15%] min-w-[100px] px-2 hover:bg-slate-400 py-4 rounded-md hover:text-white">
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
        {/* Repeat the above block for other categories */}
        </div>
      </div>
      {/*End Categories */}
      {/* New Book */}
      <BookList/>
      {/*End New Book */}
      {/* News */}
      <MyNews/>
      {/*End News */}
    </>
  );
}
