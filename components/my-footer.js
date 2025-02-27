import Image from "next/image";

export function Footer() {
  const companyName = "Power By:"; // Update this dynamically if needed

  const socialMedia = [
    { id: 1, icon: "/assets/images/facebook.png", alt: "Facebook", title: "Facebook", link: "#" },
    { id: 2, icon: "/assets/images/telegram.png", alt: "Telegram", title: "Telegram", link: "#" },
    { id: 3, icon: "/assets/images/youtube.png", alt: "YouTube", title: "YouTube", link: "#" },
  ];

  const menuFooter = [
    { id: 1, icon: "/assets/images/book.png", alt: "Books", title: "Books", link: "#" },
    { id: 2, icon: "/assets/images/news.png", alt: "News", title: "News", link: "#" },
    { id: 3, icon: "/assets/images/phone.png", alt: "Contact", title: "Contact", link: "#" },
    { id: 4, icon: "/assets/images/info.png", alt: "About", title: "About", link: "#" },
    { id: 5, icon: "/assets/images/install.png", alt: "Install App", title: "Install App", link: "#" },
  ];

  return (
    <footer className="bg-[#393838] text-gray-300 py-12">
      <div className="max-w-screen-2xl mx-auto px-6 xl:px-16">
        
        {/* 📌 Grid Layout */}
        <div className="flex flex-wrap gap-12 text-center sm:text-left">
          
          {/* 📌 Contact Info */}
          <div className="flex-1 ">
            <h3 className="text-2xl font-medium text-white mb-4">Information</h3>
            <p className="text-gray-400 leading-relaxed ">
              Phnom Penh, Cambodia <br />
              <span className="font-semibold">Phone:</span> 010775589 <br />
              <span className="font-semibold">Hours:</span> Mon - Sat: 8 AM - 5 PM <br />
              <span className="text-red-400 font-semibold">Sunday: CLOSED</span>
            </p>
            <hr className="w-20 mt-2 mx-auto md:mx-0 border-t border-white" />
          </div>

          {/* 📌 Menu Section */}
          <div className="flex-1 flex flex-col justify-center items-center">
            <h3 className="text-2xl font-medium text-white mb-4">Menu</h3>
            <ul className="space-y-1">
              {menuFooter.map((item) => (
                <li key={item.id} className="transition-transform hover:translate-x-2">
                  <a href={item.link} className="flex items-center gap-3  sm:justify-start hover:text-white transition-colors">
                    <Image src={item.icon} alt={item.alt} width={20} height={20} />
                    <span className="text-lg">{item.title}</span>
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
              {socialMedia.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.alt}
                  className="group flex flex-col items-center text-white transition-transform transform hover:scale-110"
                >
                  <div className="p-2 rounded-full bg-gray-700 hover:bg-gray-500 shadow-lg transition-all">
                    <Image
                      src={social.icon}
                      alt={social.alt}
                      width={40}
                      height={40}
                      className="hover:opacity-80 transition-opacity"
                    />
                  </div>
                  <span className="mt-2 text-xs group-hover:text-gray-100">{social.title}</span>
                </a>
              ))}
            </div>
            </div>
          </div>
        </div>

        {/* 📌 Bottom Footer */}
        <div className="text-center mt-5 md:mt-0 md:text-end text-sm">
          {/* <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p> */}
          <p>{companyName} <a href="https://alphalib.org/" className="hover:underline">Alphalib.</a></p>
        </div>
      </div>
    </footer>
  );
}
