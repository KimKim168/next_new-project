import { BASE_API_URL, IMAGE_LINKS_URL, IMAGE_PAGES_URL } from "@/env";
import Image from "next/image";

export async function Footer() {


  const repLinks = await fetch(`${BASE_API_URL}/links`,{
    next:{revalidate: 3600 },
  });

  const socialMedia = await repLinks.json();

  const repWebsiteInfos = await fetch(`${BASE_API_URL}/website_infos`,{
    next:{revalidate: 3600 },
  });

  const websiteInfos = await repWebsiteInfos.json();

  const repPages = await fetch(`${BASE_API_URL}/pages?position=menus`,{
    next:{revalidate: 3600 },
  });

  const menuFooter = await repPages.json();

  const companyName = "Power By:"; // Update this dynamically if needed

  // const socialMedia = [
  //   { id: 1, icon: "/assets/images/facebook.png", alt: "Facebook", title: "Facebook", link: "#" },
  //   { id: 2, icon: "/assets/images/telegram.png", alt: "Telegram", title: "Telegram", link: "#" },
  //   { id: 3, icon: "/assets/images/youtube.png", alt: "YouTube", title: "YouTube", link: "#" },
  // ];

  // const menuFooter = [
  
  //   { id: 1, icon: "/assets/images/book.png", alt: "Home", title: "Home", link: "#" },
  //   { id: 2, icon: "/assets/images/info.png", alt: "About", title: "About", link: "#" },
  //   { id: 3, icon: "/assets/images/collection.png", alt: "Collections", title: "Collections", link: "#" },
  //   { id: 4, icon: "/assets/images/resource.png", alt: "Resources", title: "Resources", link: "#" },
  //   { id: 5, icon: "/assets/images/database.png", alt: "Databases", title: "Databases", link: "#" },
  //   { id: 6, icon: "/assets/images/phone.png", alt: "Contact Us", title: "Contact Us", link: "#" },
  // ];

  return (
    <footer className="bg-[#393838] text-gray-300 py-12">
      <div className="max-w-screen-2xl mx-auto px-6 xl:px-16">
        
        {/* 📌 Grid Layout */}
        <div className="flex flex-wrap gap-12 text-center sm:text-left">
          
          {/* 📌 Contact Info */}
         
          <div className="flex-1 ">
            <h3 className="text-2xl font-medium text-white mb-4">Information</h3>
            

                <p className="text-gray-400 leading-relaxed ">{websiteInfos.address}<br />
                <span className="font-semibold">Phone:</span> {websiteInfos.phone} <br />
                <span className="font-semibold">Hours:</span> {websiteInfos.hours} <br />
                <span className="text-red-400 font-semibold">{websiteInfos.closed}: CLOSED</span>
              </p>
             
           
            <hr className="w-20 mt-2 mx-auto md:mx-0 border-t border-white" />
          </div>
          

          {/* 📌 Menu Section */}
          <div className="flex-1 flex flex-col justify-center items-center">
            <h3 className="text-2xl font-medium text-white mb-4">Menu</h3>
            <ul className="space-y-1">
              {menuFooter.map((item) => (
                <li key={item.id} className="transition-transform hover:translate-x-2">
                  <a href={item.type == 'link' ? item.link : item.name.toLowerCase() === 'home' ? '/' : `/${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center gap-3  sm:justify-start hover:text-white transition-colors">
                    <Image src={`${IMAGE_PAGES_URL}${item.image}`} alt='image' width={20} height={20} />
                    <span className="text-lg">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 📌 Social Media */}
          <div className="md:flex-1 flex flex-col md:items-end w-full">
            <div>
            <h3 className="text-2xl font-medium text-center text-white mb-4">Social Media</h3>
            <div className="flex gap-6 justify-center lg:justify-end">
              {socialMedia.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  rel="noopener noreferrer"
                  aria-label={item.alt}
                  className="group flex flex-col items-center text-white transition-transform transform hover:scale-110"
                >
                  <div className="p-2 rounded-full bg-gray-700 hover:bg-gray-500 shadow-lg transition-all">
                    <Image
                      src={`${IMAGE_LINKS_URL}${item.image}`}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="hover:opacity-80 transition-opacity"
                    />
                  </div>
                  <span className="mt-2 text-xs group-hover:text-gray-100">{item.name}</span>
                </a>
              ))}
            </div>
            </div>
          </div>
        </div>

        {/* 📌 Bottom Footer */}
        <div className="text-center mt-5 md:mt-0 md:text-end text-sm">
          {/* <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p> */}
          <p>{companyName} <a href="https://alphalib.org/" className="hover:underline hover:text-white transition-colors">Alphalib.</a></p>
        </div>
      </div>
    </footer>
  );
}
