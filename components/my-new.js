import { BASE_API_URL, IMAGE_PAGES_URL_THUMB } from "@/env";
import Image from "next/image";
import Link from "next/link";

// const books = [
//   { id: 1, title: "Good to Great: Why Some Companies Make the Leap...And Others Don't", image: "/assets/images/book4.webp" },
//   { id: 2, title: "Good to Great: Why Some Companies Make the Leap...And Others Don't", image: "/assets/images/book5.webp" },
//   { id: 3, title: "Good to Great: Why Some Companies Make the Leap...And Others Don't", image: "/assets/images/book6.webp" },
//   { id: 4, title: "Good to Great: Why Some Companies Make the Leap...And Others Don't", image: "/assets/images/book7.webp" },
//   { id: 5, title: "Good to Great: Why Some Companies Make the Leap...And Others Don't", image: "/assets/images/book8.webp" },
//   { id: 6, title: "Good to Great: Why Some Companies Make the Leap...And Others Don't", image: "/assets/images/book9.webp" },
//   { id: 7, title: "Good to Great: Why Some Companies Make the Leap...And Others Don't", image: "/assets/images/book10.webp" },
//   { id: 8, title: "Good to Great: Why Some Companies Make the Leap...And Others Don't", image: "/assets/images/book11.webp" },
//   { id: 9, title: "Good to Great: Why Some Companies Make the Leap...And Others Don't", image: "/assets/images/book12.webp" },
//   { id: 10, title: "Good to Great: Why Some Companies Make the Leap...And Others Don't", image: "/assets/images/book13.webp" },
//   { id: 11, title: "Good to Great: Why Some Companies Make the Leap...And Others Don't", image: "/assets/images/book14.webp" },
//   { id: 12, title: "Good to Great: Why Some Companies Make the Leap...And Others Don't", image: "/assets/images/book15.webp" },
// ];

const BookList = async () => {
    const respone = await fetch(`${BASE_API_URL}/pages?position=resources`, {
      next: { revalidate: 3600 },
    });
    const result = await respone.json();
    // console.log(result);
  return (
    <div className="max-w-screen-2xl lg:px-20 container mx-auto px-5 my-10">
       <div className="flex">
      <h2 className="text-xl md:text-2xl text-center lg:text-2xl text-black my-5 tracking-wide 
  after:content-[''] after:block after:w-12 md:after:w-24 after:h-1 after:bg-red-500 
  after:mx-auto after:mt-2 after:transition-all after:duration-300 
  hover:after:w-16 md:hover:after:w-28">
  New Books
  </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
        {result.map((book) => (
          <Link href={book.type == 'link' ? book.link : `/details/${book.id}`} key={book.id} className="bg-white hover:cursor-pointer rounded-lg overflow-hidden hover:scale-95 transition-all duration-300">
            <Image 
              src={`${IMAGE_PAGES_URL_THUMB}${book.image}`} 
              alt='image' 
              width={200} 
              height={300} 
              className="w-full aspect-[6/9] rounded-lg object-cover"
            />
            <div className="pt-2 line-clamp-2 text-base">
              <h3 className="text-sm font-medium text-gray-800">{book.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookList;
