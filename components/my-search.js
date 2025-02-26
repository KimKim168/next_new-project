import React from 'react'
import { Button } from "@/components/ui/button";

const MySearch = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 lg:px-20 py-3">
              <p className="text-base md:text-3xl text-white">One Search</p>
              <label
                className="mx-auto relative mt-3 bg-white min-w-sm max-w-screen-2xl flex  md:flex-row items-center justify-center border pl-2 rounded-full gap-2 shadow-2xl focus-within:border-gray-300"
                htmlFor="search-bar"
              >
                <input
                  id="search-bar"
                  placeholder="Search By: Tittle, ISBN, Author..."
                  className="px-6 py-1 w-full rounded-md flex-1 outline-none bg-white"
                />
                <Button className="md:w-auto px-2.5 py-2 rounded-full bg-yellow-400 border-yellow-500 text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative transition-all disabled:opacity-70">
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
  )
}

export default MySearch
