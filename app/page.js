import { Phone, User } from "lucide-react";
import BookList from "@/components/my-new";
import MyNews from "@/components/my-news";
import MySearch from "@/components/my-search";
import { MySlide } from "@/components/my-slide";
import { MyLanguageSwitcher } from "@/components/my-language-switcher";
import MyHeroSection from "@/components/my-hero-section";
import MyDatabases from "@/components/my-databases";
import MyBaseHeader from "@/components/header/my-base-header";
import { BASE_API_URL } from "@/env";

export default async function Home() {

  const slide = await fetch(`${BASE_API_URL}/slides`, {
    next: { revalidate: 3600 },
  });
  const result = await slide.json();

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
        <MyBaseHeader/>
        <div>
          <MySlide images={result} />
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
