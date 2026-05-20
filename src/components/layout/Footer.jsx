import Link from "next/link";
import Image from "next/image";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-teal-50 p-1.5 rounded-full border border-teal-100 flex items-center justify-center">
                <Image
                  src="/image/logo.png"
                  alt="DocAppoint Logo"
                  width={80}
                  height={80}
                  className="object-cover w-12 h-12 rounded-full mix-blend-multiply"
                />
              </div>
              <span className="text-xl md:text-2xl font-bold text-blue-900 tracking-tight">
                Doc<span className="text-teal-500">Appoint</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-xs">
              Your trusted partner in health. Book your appointments seamlessly.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-teal-400 transition-colors block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-appointment"
                  className="hover:text-teal-400 transition-colors block"
                >
                  All Appointment
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-teal-400 transition-colors block"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="hover:text-teal-400 cursor-pointer transition-colors duration-200">
                General Consultation
              </li>
              <li className="hover:text-teal-400 cursor-pointer transition-colors duration-200">
                Dental Care Specialist
              </li>
              <li className="hover:text-teal-400 cursor-pointer transition-colors duration-200">
                Pediatrics & Child Health
              </li>
              <li className="hover:text-teal-400 cursor-pointer transition-colors duration-200">
                Cardiology & Heart Care
              </li>
              <li className="hover:text-teal-400 cursor-pointer transition-colors duration-200">
                Neurology Department
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-white font-semibold text-lg mb-2">
              Connect With Us
            </h3>
            <div className="flex items-center justify-center gap-4 pt-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-800 text-slate-400 hover:bg-teal-500 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <FaFacebookF className="h-4 w-4" />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-800 text-slate-400 hover:bg-teal-500 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </Link>

              <Link
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-800 text-slate-400 hover:bg-teal-500 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <RiTwitterXFill className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>
            © <span suppressHydrationWarning>{currentYear}</span> DocAppoint.
            All rights reserved.
          </p>
          <p className="text-xs">Designed with ❤️ for professional care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;