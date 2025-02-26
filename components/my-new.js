import Image from "next/image";

const books = [
  { id: 1, title: "Her chosen career is as a professional pilot, she has worked in a variety of aviation capacities from instruction to airline flying, and is the author of several aviation text books.", image: "/assets/images/book1.webp" },
  { id: 2, title: "Her chosen career is as a professional pilot, she has worked in a variety of aviation capacities from instruction to airline flying, and is the author of several aviation text books.", image: "/assets/images/book2.webp" },
  { id: 3, title: "Her chosen career is as a professional pilot, she has worked in a variety of aviation capacities from instruction to airline flying, and is the author of several aviation text books.", image: "/assets/images/book1.webp" },
  { id: 4, title: "Her chosen career is as a professional pilot, she has worked in a variety of aviation capacities from instruction to airline flying, and is the author of several aviation text books.", image: "/assets/images/book2.webp" },
  { id: 5, title: "Her chosen career is as a professional pilot, she has worked in a variety of aviation capacities from instruction to airline flying, and is the author of several aviation text books.", image: "/assets/images/book1.webp" },
  { id: 6, title: "Her chosen career is as a professional pilot, she has worked in a variety of aviation capacities from instruction to airline flying, and is the author of several aviation text books.", image: "/assets/images/book1.webp" },
  { id: 7, title: "Her chosen career is as a professional pilot, she has worked in a variety of aviation capacities from instruction to airline flying, and is the author of several aviation text books.", image: "/assets/images/book1.webp" },
  { id: 8, title: "Her chosen career is as a professional pilot, she has worked in a variety of aviation capacities from instruction to airline flying, and is the author of several aviation text books.", image: "/assets/images/book2.webp" },
  { id: 9, title: "Her chosen career is as a professional pilot, she has worked in a variety of aviation capacities from instruction to airline flying, and is the author of several aviation text books.", image: "/assets/images/book1.webp" },
  { id: 10, title: "Her chosen career is as a professional pilot, she has worked in a variety of aviation capacities from instruction to airline flying, and is the author of several aviation text books.", image: "/assets/images/book2.webp" },
  { id: 11, title: "Her chosen career is as a professional pilot, she has worked in a variety of aviation capacities from instruction to airline flying, and is the author of several aviation text books.", image: "/assets/images/book1.webp" },
  { id: 12, title: "Her chosen career is as a professional pilot, she has worked in a variety of aviation capacities from instruction to airline flying, and is the author of several aviation text books.", image: "/assets/images/book1.webp" },
];

const BookList = () => {
  return (
    <div className="max-w-screen-2xl lg:px-20 container mx-auto px-5 my-10">
        <button
            className="relative mb-3 md:my-5">
            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-yellow-500"></span>
            <span className="fold-bold text-xl md:text-2xl relative inline-block h-full w-full pointer-events-none rounded border-2 border-black bg-white px-3 py-1 text-black transition duration-100 hover:bg-slate-400 hover:text-white">New Book</span>
        </button>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-lg overflow-hidden hover:scale-95 transition-all duration-300">
            <Image 
              src={book.image} 
              alt={book.title} 
              width={200} 
              height={300} 
              className="w-full aspect-[1/1] rounded-lg object-cover"
            />
            <div className="pt-2 line-clamp-2 text-base">
              <h3 className="text-sm font-medium text-gray-800">{book.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
