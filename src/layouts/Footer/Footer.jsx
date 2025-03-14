import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="w-full h-auto flex flex-col items-center p-4 bg-gray-900 text-white mt-auto absolute bottom-0 left-0">
            <p>Contactame en:</p>
            <div className="flex flex-row gap-4 sm:gap-2">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-xl sm:text-lg hover:text-blue-500 transition" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-xl sm:text-lg hover:text-pink-500 transition" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=573234879314" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-xl sm:text-lg hover:text-green-500 transition" />
                </a>
            </div>
        </footer>
    );
};
