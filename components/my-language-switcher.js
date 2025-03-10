"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Define language options with flag images
const languages = [
  {
    value: "en",
    label: "English",  // Flag for English
    flag: "/assets/images/en.png",  // Use the flag image URL or path here
  },
  {
    value: "kh",
    label: "Khmer",  // Flag for Khmer
    flag: "/assets/images/flageKH.png",  // Use the flag image URL or path here
  },
 
];

export function MyLanguageSwitcher() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("en");  // Default language set to 'en' (UK flag)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          role="combobox"
          aria-expanded={open}
          className=" justify-between "
        >
          {/* Display only the flag image for the default language (UK flag initially) */}
          <img 
            src={languages.find((language) => language.value === value)?.flag} 
            alt="Selected Language Flag"
            className="w-6 h-6 mr-2"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[100px] p-0">
        <Command>
          {/* <CommandInput placeholder="Search language..." className="h-9" /> */}
          <CommandList>
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language.value}
                  value={language.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {/* Display flag image next to each language */}
                  <img 
                    src={language.flag} 
                    alt={language.label} 
                    className="w-6 h-6 mr-1" 
                  />
                  {language.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === language.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
