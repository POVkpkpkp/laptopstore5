import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Footer() {
  return (
    // <!-- Responsive Footer -->
    <footer class="w-full bg-black text-white py-6 px-5 md:px-12 lg:px-20 bottom-0 mt-[100px]">
        <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* <!-- Left Section - Company Info --> */}
            <div class="text-center sm:text-left">
                <h1 class="text-xl md:text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Laptop Store
                </h1>
                <p class="text-xs md:text-sm text-gray-300 mb-3">
                    Your premier destination for high-quality laptops, expert advice, and exceptional customer service since 2015.
                </p>
                <div class="space-y-1 text-xs md:text-sm text-gray-400">
                    <p>📞 +855 999 999 99</p>
                    <p className="flex p-1 items-center gap-1"><MdEmail />info@laptopStore.com</p>
                    
                </div>
            </div>

            {/* <!-- Social Media Section --> */}
            <div class="text-center">
                <h2 class="text-lg md:text-2xl font-semibold mb-3 text-pink-400">
                    Follow Us
                </h2>
                <ul class="space-y-2">
                    <li>
                        <a href="#" class="hover:text-pink-400 transition duration-300 text-sm md:text-base flex items-center justify-center gap-2">
                            <FaTiktok /> TikTok
                        </a>
                    </li>
                    <li>
                        <a href="#" class="hover:text-blue-500 transition duration-300 text-sm md:text-base flex items-center justify-center gap-2">
                            <FaFacebook />Facebook
                        </a>
                    </li>
                    <li>
                        <a href="#" class="hover:text-pink-500 transition duration-300 text-sm md:text-base flex items-center justify-center gap-2">
                            <FaInstagramSquare />Instagram
                        </a>
                    </li>
                    <li>
                        <a href="#" class="hover:text-sky-400 transition duration-300 text-sm md:text-base flex items-center justify-center gap-2">
                            <FaTelegram />Telegram
                        </a>
                    </li>
                </ul>
            </div>

            {/* <!-- Contact Section --> */}
            <div class="text-center">
                <h2 class="text-lg md:text-2xl font-semibold mb-2 text-green-400">
                    Contact
                </h2>
                <div class="space-y-1 text-xs md:text-sm text-gray-300">
                    <p>📞 +855 000 000 00</p>
                    <p>📞 +855 111 111 11</p>
                    <p className="flex items-center justify-center gap-1"><MdEmail /> email@gmail.com</p>
                </div>
            </div>

            {/* <!-- Products Section --> */}
            <div class="text-center">
                <h2 class="text-lg md:text-2xl font-semibold mb-2 text-blue-400">
                    Products
                </h2>
                <div class="space-y-1 text-xs md:text-sm text-gray-300">
                    <p>🎮 Gaming Laptops</p>
                    <p>💼 Business Laptops</p>
                    <p>🎓 Student Laptops</p>
                </div>
            </div>
        </div>
        
        {/* <!-- Copyright Section --> */}
        <div class="border-t border-gray-800 mt-6 pt-4 text-center text-gray-400 w-full">
            <p class="text-xs md:text-sm">&copy; 2025 LaptopStore. All rights reserved.</p>
        </div>
    </footer>
  );
}
