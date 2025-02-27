
import { Phone, User } from "lucide-react";
import Image from "next/image";
import BookList from "@/components/my-new";
import MyNews from "@/components/my-news";
import MyHeader from "@/components/header/my-header";
import MyMenuHeader from "@/components/header/my-menu-header";
import MySearch from "@/components/my-search";
import { MySlide } from "@/components/my-slide";
import { MyLanguageSwitcher } from "@/components/my-language-switcher";

export default function Home() {
 
  return (
    <>
      <div className="flex items-center justify-end gap-2 max-w-screen-2xl px-5 sm:px-10 xl:px-20 mt-1">
      <MyLanguageSwitcher/>
        <Phone width={15} height={15} />
        <p>010 775589 -</p>
        <User/><a href="#"> Student Login</a>
      </div>
      {/* nav and slide */}
      <div className=" mt-1 bg-[#393838]">
        <div className="max-w-screen-2xl py-5 mx-auto px-5 sm:px-10 xl:px-20 flex items-center">
          <a href="/" className="flex-1 flex gap-2 items-center text-base  md:text-xl lg:text-xl text-white text-center">
            
            <Image
              src="/assets/images/logo.png"
              width={90}
              height={90}
              alt="logo"
              className="w-14 h-16 md:w-20 md:h-24"
            />
            <p className="font-semibold">
              វិទ្យាស្ថានជាតិអប់រំ
              <br />
              <span className="font-normal">National Institute Of Education{" "}</span> 
            </p>
          </a>
         <MyHeader/>
         <MyMenuHeader/>
        </div>
        <div>
          <MySlide/>
        </div>
        {/* Search */}
        <MySearch/>
        {/*End Search */}
      </div>
      {/*End nav and slide */}

      {/* Card with image */}
      <div className="max-w-screen-2xl mt-3 md:mt-10 mx-auto px-3 sm:px-10 lg:px-20 bg-white  overflow-hidden">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="w-full object-cover aspect-video"
              src="/assets/images/library.jpg"
              alt="Team"
              width={200}
              height={200}
            />
          </div>
          <div className="md:px-8 mt-2 md:mt-0">
            <div className="tracking-wide text-xl md:text-2xl text-black font-semibold">
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
      <div className="max-w-screen-2xl my-10 mx-auto px-2 sm:px-10 lg:px-20">
      <div className="flex">
      <h2 className="text-xl md:text-2xl text-center lg:text-2xl text-black my-5 tracking-wide 
  after:content-[''] after:block after:w-24 md:after:w-32 after:h-1 after:bg-red-500 
  after:mx-auto after:mt-2 after:transition-all after:duration-300 
  hover:after:w-28 md:hover:after:w-36">
  Our Databases
</h2>
      </div>

        <div className="flex p-2 overflow-x-auto bg-slate-400 rounded-lg scroll-smooth scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500">
        {/* Repeat this block for each category */}
        <button className="flex-shrink-0 w-[20%] md:w-[15%] min-w-[100px] px-2 hover:bg-white py-4 rounded-md hover:text-black text-white">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/assets/images/audio.png"
              width={300}
              height={300}
              className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] mb-2 object-cover"
              alt="image"
            />
            <p className="text-center text-[12px] md:text-sm">Audios</p>
          </div>
        </button>
        <button className="flex-shrink-0 w-[20%] md:w-[15%] min-w-[100px] px-2 hover:bg-white py-4 rounded-md hover:text-black text-white">
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
            E-Publications</p>
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
