import Image from "next/image";

const books = [
  { id: 1, title: "Her chosen career is as a professional pilot, she has worked in a variety of aviation capacities from instruction to airline flying, and is the author of several aviation text books.", image: "/assets/images/book1.webp" },
  { id: 2, title: "Her chosen career is as a professional pilot, she has worked in a variety of aviation capacities from instruction to airline flying, and is the author of several aviation text books.", image: "/assets/images/book2.webp" },
  { id: 3, title: "Her chosen career is as a professional pilot, she has worked in a variety of aviation capacities from instruction to airline flying, and is the author of several aviation text books.", image: "/assets/images/book1.webp" },
  { id: 4, title: "Her chosen career is as a professional pilot, she has worked in a variety of aviation capacities from instruction to airline flying, and is the author of several aviation text books.", image: "/assets/images/book2.webp" },
  { id: 5, title: "Her chosen career is as a professional pilot, she has worked in a variety of aviation capacities from instruction to airline flying, and is the author of several aviation text books.", image: "/assets/images/book1.webp" },
  { id: 6, title: "Her chosen career is as a professional pilot, she has worked in a variety of aviation capacities from instruction to airline flying, and is the author of several aviation text books.", image: "/assets/images/book1.webp" },
];

const MyNews = () => {
  return (
    <div className="max-w-screen-2xl md:px-20 container mx-auto px-4 my-14">
      <h2 className="text-3xl font-bold my-9 text-center">News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-lg overflow-hidden hover:scale-95 transition-all duration-300">
            <Image 
              src={book.image} 
              alt={book.title} 
              width={200} 
              height={300} 
              className="w-full aspect-[21/9] rounded-lg object-cover"
            />
            <div className="pt-2 text-base space-y-3">
              <h3 className="text-sm font-medium line-clamp-2 text-gray-800">{book.title}</h3>
              <a className="text-blue-500 hover:cursor-pointer flex justify-end">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyNews;
