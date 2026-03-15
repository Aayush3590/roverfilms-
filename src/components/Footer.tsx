import { Instagram, Link, Video, Mail, Phone } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, link: "https://www.instagram.com/roverfilms_" },
    { icon: Link, link: "https://linktr.ee/roverfilms_" },
    
  ];

  return (
    <footer className="border-t border-neutral-800 bg-black py-16 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">

        {/* LOGO */}

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Rover
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              FILMS
            </span>
          </h2>

          <p className="text-gray-400 text-sm mt-3">
            Cinematic storytelling through photography and film.
          </p>
        </div>

        {/* SOCIAL MEDIA */}

        <div className="flex justify-center gap-6">
          {socialLinks.map((item, i) => {
            const Icon = item.icon;

            return (
              <a
                key={i}
                href={item.link}
                target="_blank"
                className="p-3 rounded-full bg-neutral-900 border border-neutral-700 
                hover:border-yellow-400 hover:text-yellow-400
                transition-all duration-300 hover:scale-110"
              >
                <Icon size={18} strokeWidth={1.5} />
              </a>
            );
          })}
        </div>

        {/* CONTACT INFO */}

        {/* <div className="text-center md:text-right space-y-2 text-sm text-gray-400">
          <p className="flex items-center justify-center md:justify-end gap-2">
            <Mail size={16} /> contact@lenscraft.com
          </p>

          <p className="flex items-center justify-center md:justify-end gap-2">
            <Phone size={16} /> +91 98765 43210
          </p>
        </div> */}

      </div>

      {/* BOTTOM LINE */}

      <div className="mt-12 pt-6 border-t border-neutral-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} LensCraft. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;