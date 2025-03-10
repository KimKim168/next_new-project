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
import MyTopHeader from "@/components/header/my-top-header";

export default async function Home() {
  const slide = await fetch(`${BASE_API_URL}/slides`, {
    next: { revalidate: 3600 },
  });
  const result = await slide.json();

  return (
    <>
     <MyTopHeader/>
      {/* nav and slide */}
      <div className="mt-1 bg-[#393838]">
        <MyBaseHeader />
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
      <MyDatabases />
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
