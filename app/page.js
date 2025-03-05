import { Phone, User } from "lucide-react";
import Image from "next/image";
import BookList from "@/components/my-new";
import MyNews from "@/components/my-news";
import MyHeader from "@/components/header/my-header";
import MyMenuHeader from "@/components/header/my-menu-header";
import MySearch from "@/components/my-search";
import { MySlide } from "@/components/my-slide";
import { MyLanguageSwitcher } from "@/components/my-language-switcher";
import MyHeroSection from "@/components/my-hero-section";
import MyDatabases from "@/components/my-databases";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-end gap-2 max-w-screen-2xl px-5 sm:px-10 xl:px-20 mt-1">
        <MyLanguageSwitcher />
        <Phone width={15} height={15} />
        <p>010 775589 -</p>
        <User />
        <a href="#"> Student Login</a>
      </div>
      {/* nav and slide */}
      <div className=" mt-1 bg-[#393838]">
        <div className="max-w-screen-2xl py-5 mx-auto px-5 sm:px-10 xl:px-20 flex items-center">
          <a
            href="/"
            className="flex-1 flex gap-2 items-center text-base  md:text-xl lg:text-xl text-white text-center"
          >
            <Image
              src="/assets/images/rule.png"
              width={90}
              height={90}
              alt="logo"
              className="w-14 h-16 md:w-20 md:h-24"
            />
            <p className="font-semibold">
            សាកលវិទ្យាល័យភូមិន្ទនីតិសាស្រ្ដ និងវិទ្យាសាស្រ្ដសេដ្ឋកិច្ច
              <br />
              <span className="font-normal">Royal University of Law and Economics{" "}</span> 
            </p>
          </a>
          <MyHeader />
          <MyMenuHeader />
        </div>
        <div>
          <MySlide />
        </div>
        {/* Search */}
        <MySearch />
        {/*End Search */}
      </div>
      {/*End nav and slide */}

      {/* Hero Section */}
      <MyHeroSection />
      {/*End Hero Section */}

      {/*Databases */}
      <MyDatabases/>
      {/*End Databases */}
      {/* New Book */}
      <BookList />
      {/*End New Book */}
      {/* News */}
      <MyNews />
      {/*End News */}
    </>
  );
}
