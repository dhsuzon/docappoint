"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Bars, Xmark } from "@gravity-ui/icons";

const Navbar = ()=> {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isLoggedIn = false;

  const linkStyle = (path) =>
    `text-base font-medium transition-colors duration-300 ${
      pathname === path
        ? "text-teal-500 border-b-2 border-teal-500 pb-1"
        : "text-slate-600 hover:text-blue-900 pb-1"
    }`;

  const primaryBtn =
    "bg-blue-900 hover:bg-teal-600 text-white font-medium px-5 py-2 rounded-xl transition-all duration-300 shadow-sm";
  const secondaryBtn =
    "border border-blue-900 text-blue-900 hover:bg-blue-50 font-medium px-5 py-2 rounded-xl transition-all duration-300";

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-teal-50 p-1.5 rounded-full border border-teal-100">
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

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={linkStyle("/")}>
              Home
            </Link>
            <Link
              href="/all-appointment"
              className={linkStyle("/all-appointment")}
            >
              All Appointment
            </Link>
            <Link href="/dashboard" className={linkStyle("/dashboard")}>
              Dashboard
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 border-2 border-teal-500 flex items-center justify-center text-teal-700 font-bold uppercase shadow-sm">
                  S
                </div>
                <button className={secondaryBtn}>Logout</button>
              </div>
            ) : (
              <>
                <Link href="/login" className={secondaryBtn}>
                  Login
                </Link>
                <Link href="/register" className={primaryBtn}>
                  Register
                </Link>
              </>
            )}
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-slate-600 hover:text-blue-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <Xmark/>
              ) : (
                <Bars/>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "block opacity-100" : "hidden opacity-0"}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3 bg-white border-t border-slate-100 shadow-inner">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-900"
          >
            Home
          </Link>
          <Link
            href="/all-appointment"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-900"
          >
            All Appointment
          </Link>
          <Link
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-900"
          >
            Dashboard
          </Link>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            {isLoggedIn ? (
              <div className="flex items-center justify-between px-3">
                <span className="text-sm font-medium text-slate-600">
                  Logged in as Suzon
                </span>
                <button className="text-sm text-red-500 font-semibold underline">
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className={`${secondaryBtn} text-center block w-full`}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className={`${primaryBtn} text-center block w-full`}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
