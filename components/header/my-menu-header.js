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

const MyMenuHeader = () => {
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
                  <li className="text-base border-white hover:underline hover:cursor-pointer hover:underline-offset-4">
                    Home
                  </li>
                  <li className="text-base border-white hover:underline hover:cursor-pointer hover:underline-offset-4">
                    About
                  </li>
                  <li className="text-base border-white hover:underline hover:cursor-pointer hover:underline-offset-4">
                    Cellections
                  </li>
                  <li className="text-base border-white hover:underline hover:cursor-pointer hover:underline-offset-4">
                    Resources
                  </li>
                  <li className="text-base border-white hover:underline hover:cursor-pointer hover:underline-offset-4">
                    Database
                  </li>
                  <li className="text-base border-white hover:underline hover:cursor-pointer hover:underline-offset-4">
                    Contac Us
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
