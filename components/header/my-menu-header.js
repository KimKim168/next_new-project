"use client"
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { AlignLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MyMenuHeader = () => {
  const pathName = usePathname()
  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          {/* <Button variant="outline">Open</Button> */}
          <AlignLeft
            className="bg-white border-2 rounded-md"
            width={40}
            height={40}
          />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
              <div className="border-t p-2">
                <ul className="flex flex-col justify-center space-y-2 text-start text-black">
                <li className={`border-r pr-2 border-white`}>
          <Link 
            href="/" 
            className={`text-base ${
              pathName === '/' ? 'text-yellow-400 font-semibold underline underline-offset-4' : 'hover:underline hover:shadow-xl hover:cursor-pointer hover:underline-offset-4'
            }`}
          >
            Home
          </Link>
        </li>
        <li className={`text-base border-r pr-2 border-white ${pathName === '/about' ? 'text-yellow-400 font-semibold underline underline-offset-4' : 'hover:underline hover:shadow-xl hover:cursor-pointer hover:underline-offset-4'}`}>
          <Link href="/about">About</Link>
        </li>
        <li className={`text-base border-r pr-2 border-white ${pathName === '/collections' ? 'text-yellow-400 font-semibold underline underline-offset-4' : 'hover:underline hover:shadow-xl hover:cursor-pointer hover:underline-offset-4'}`}>
          <Link href="/collections">Collections</Link>
        </li>
        <li className={`text-base border-r pr-2 border-white ${pathName === '/resources' ? 'text-yellow-400 font-semibold underline underline-offset-4' : 'hover:underline hover:shadow-xl hover:cursor-pointer hover:underline-offset-4'}`}>
          <Link href="/resources">Resources</Link>
        </li>
        <li className={`text-base border-r pr-2 border-white ${pathName === '/database' ? 'text-yellow-400 font-semibold underline underline-offset-4' : 'hover:underline hover:shadow-xl hover:cursor-pointer hover:underline-offset-4'}`}>
          <Link href="/database">Database</Link>
        </li>
        <li className={`text-base border-r pr-2 border-white ${pathName === '/contact' ? 'text-yellow-400 font-semibold underline underline-offset-4' : 'hover:underline hover:shadow-xl hover:cursor-pointer hover:underline-offset-4'}`}>
          <Link href="/contact">Contact Us</Link>
        </li>
                </ul>
              </div>
          </SheetHeader>
          <SheetFooter></SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MyMenuHeader;
