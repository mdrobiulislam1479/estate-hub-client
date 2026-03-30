import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Logo from "../ui/Logo";

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0f]/75 backdrop-blur-xl text-gray-300 pt-14 pb-6">
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 z-10">
        {/* Brand */}
        <div>
          <Logo />
          <p className="mt-3 text-sm text-gray-400">
            Premium properties, trusted agents, and the best investment
            solutions.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            <a className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition">
              <FaFacebookF size={16} />
            </a>
            <a className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition">
              <FaInstagram size={16} />
            </a>
            <a className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition">
              <FaLinkedinIn size={16} />
            </a>
            <a className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition">
              <FaTwitter size={16} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-white">Home</a>
            </li>
            <li>
              <a className="hover:text-white">Properties</a>
            </li>
            <li>
              <a className="hover:text-white">About</a>
            </li>
            <li>
              <a className="hover:text-white">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 123 New Town, Dhaka</li>
            <li>📞 +880 1234 567 890</li>
            <li>📧 info@estatehub.com</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-sm text-gray-400 mb-3">
            Get alerts on new listings & offers.
          </p>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 bg-white/10 text-white text-sm rounded-md placeholder-gray-400 focus:outline-none backdrop-blur-md"
            />
            <button className="px-5 py-2 bg-linear-to-br from-violet-600 to-purple-500 text-white text-sm rounded-md transition">
              Go
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative border-t border-white/10 mt-10 pt-4 text-center text-sm text-gray-400 z-10">
        © {new Date().getFullYear()} EstateHub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
