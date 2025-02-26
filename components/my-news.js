import Image from "next/image";

const books = [
  { id: 1, title: "Becoming good at reading", image: "/assets/images/book3.webp"},
  { id: 2, title: "Cambodia Book Fair", image: "/assets/images/book2.webp" },
  { id: 3, title: "Cambodia to Make E-Invoicing Mandatory Next Year", image: "/assets/images/book1.webp" },
];

const MyNews = () => {
  return (
    <div className="max-w-screen-2xl lg:px-20 container mx-auto px-5 my-14">
  <h2 className="text-xl md:text-2xl lg:text-3xl  font-semibold text-black my-5 text-center tracking-wide after:content-[''] after:block after:w-12 after:h-1 after:bg-red-500 after:mx-auto after:mt-2 after:transition-all after:duration-300 hover:after:w-16 animate-bounce">
  News
</h2>

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
              <a href="/views" className="text-blue-500 hover:cursor-pointer hover:underline underline-offset-2 flex justify-end">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyNews;
