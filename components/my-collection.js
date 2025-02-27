import Image from "next/image";
import Link from "next/link";

const books = [
  {
    id: 1,
    title: "Becoming good at reading",
    image: "/assets/images/collection1.jpg",
  },
  { id: 2, title: "Cambodia Book Fair", image: "/assets/images/collection2.jpg" },
  {
    id: 3,
    title: "Cambodia to Make E-Invoicing Mandatory Next Year",
    image: "/assets/images/collection3.jpg",
  },
  {
    id: 4,
    title: "Cambodia to Make E-Invoicing Mandatory Next Year",
    image: "/assets/images/collection4.jpg",
  },
  {
    id: 8,
    title: "Becoming good at reading",
    image: "/assets/images/collection1.jpg",
  },
  { id: 7, title: "Cambodia Book Fair", image: "/assets/images/collection2.jpg" },
  {
    id: 5,
    title: "Cambodia to Make E-Invoicing Mandatory Next Year",
    image: "/assets/images/collection3.jpg",
  },
  {
    id: 6,
    title: "Cambodia to Make E-Invoicing Mandatory Next Year",
    image: "/assets/images/collection4.jpg",
  },
];

const MyCollection = () => {
  return (
    <div className="max-w-screen-2xl lg:px-20 container mx-auto px-5 my-14">
          {/* <h2 className="text-xl md:text-2xl lg:text-3xl  font-semibold text-black my-5 text-center tracking-wide after:content-[''] after:block after:w-12 after:h-1 after:bg-red-500 after:mx-auto after:mt-2 after:transition-all after:duration-300 hover:after:w-16">
            Collections
          </h2> */}
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books.map((book) => (
              <Link
              href={`/collections/${book.id}`}
                key={book.id}
                className="bg-white rounded-lg overflow-hidden hover:scale-95 transition-all duration-300"
              >
                <Image
                  src={book.image}
                  alt={book.title}
                  width={200}
                  height={300}
                  className="w-full aspect-[16/9] rounded-lg object-cover"
                />
                <div className="pt-2 text-base space-y-3">
                  <h3 className="text-sm font-medium line-clamp-2 text-gray-800">
                    {book.title}
                  </h3>
                  <p
                    
                    className="text-blue-500 hover:cursor-pointer hover:underline underline-offset-2 flex justify-end"
                  >
                    Read More
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
  );
};

export default MyCollection;
