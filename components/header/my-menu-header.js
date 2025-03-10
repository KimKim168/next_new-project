"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "../ui/sheet";
import { AlignLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MyMenuHeader = ({ menus }) => {
  const pathName = usePathname();

  // Helper function for active class logic
  const getLinkClass = (linkPath) => 
    pathName === linkPath 
      ? "text-yellow-400 font-semibold underline underline-offset-4" 
      : "hover:underline hover:shadow-xl hover:cursor-pointer hover:underline-offset-4";

  // Generate link href based on item
  const getLinkHref = (item) => {
    if (item.type === "link" && item.link) return item.link;
    return item.name?.toLowerCase() === "home" ? "/" : `/${item.name.toLowerCase().replace(/\s+/g, "-")}`;
  };

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden lg:block">
        <ul className="flex space-x-2 text-white">
          {menus?.map((item) => {
            const linkHref = getLinkHref(item);
            return linkHref ? (
              <li key={item.id} className="border-r pr-2 border-white">
                <a href={linkHref} className={`text-base ${getLinkClass(linkHref)}`}>
                  {item.name}
                </a>
              </li>
            ) : null;
          })}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <AlignLeft className="bg-white border-2 rounded-md" width={40} height={40} />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <ul className="flex flex-col justify-center space-y-4 text-black">
                {menus?.map((item) => {
                  const linkHref = getLinkHref(item);
                  return linkHref ? (
                    <li key={item.id} className="border-r pr-2 border-white">
                      <Link href={linkHref} className={`text-base ${getLinkClass(linkHref)}`}>
                        {item.name}
                      </Link>
                    </li>
                  ) : null;
                })}
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default MyMenuHeader;
