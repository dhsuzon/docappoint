"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Bars, Xmark } from "@gravity-ui/icons";
import { Avatar } from "@heroui/react";
import { authClient } from "@/lib/auth-client"; // 🎯 Better Auth ক্লায়েন্ট ইমপোর্ট করা হলো
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const { data, isPending } = authClient.useSession();
  console.log(data);

  const isLoggedIn = data?.user;

  
  const handleLogout = async () => {
    const toastId = toast.loading("Logging out...");
    try {
      await authClient.signOut();
      toast.update(toastId, {
        render: "Logged out successfully! 👋",
        type: "success",
        isLoading: false,
        autoClose: 1500,
      });
      setIsOpen(false);
      router.push("/login");
    } catch (error) {
      toast.update(toastId, {
        render: "Logout failed!",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

  const linkStyle = (path) =>
    `text-base font-medium transition-colors duration-300 ${
      pathname === path
        ? "text-teal-500 border-b-2 border-teal-500 pb-1"
        : "text-slate-600 hover:text-blue-900 pb-1"
    }`;

  const primaryBtn =
    "bg-blue-900 hover:bg-teal-600 text-white font-medium px-5 py-2 rounded-xl transition-all duration-300 shadow-sm cursor-pointer";
  const secondaryBtn =
    "border border-blue-900 text-blue-900 hover:bg-blue-50 font-medium px-5 py-2 rounded-xl transition-all duration-300 cursor-pointer";

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
            {isPending ? (
             
              <div className="w-10 h-10 rounded-full bg-slate-200 animate-pulse" />
            ) : isLoggedIn ? (
              <>
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 border-2 border-teal-500 rounded-full shadow-sm">
                    <Avatar.Image
                      alt={data?.user?.name || "User Avatar"}
                      src={
                        data?.user?.image ||
                        "https://invalid-url-to-show-fallback.com/image.jpg"
                      }
                      className="object-cover w-full h-full rounded-full"
                    />
                    <Avatar.Fallback
                      delayMs={600}
                      className="w-full h-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold rounded-full"
                    >
                      {data?.user?.name
                        ? data.user.name.charAt(0).toUpperCase()
                        : "NA"}
                    </Avatar.Fallback>
                  </Avatar>
                  <button onClick={handleLogout} className={secondaryBtn}>
                    Logout
                  </button>
                </div>
              </>
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
              {isOpen ? <Xmark /> : <Bars />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "block opacity-100" : "hidden opacity-0"
        }`}
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

          {/* মোবাইল অথ সেকশন */}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            {isPending ? (
              <div className="w-full h-10 bg-slate-100 rounded-lg animate-pulse" />
            ) : isLoggedIn ? (
              <>
                <div className="flex items-center justify-between px-3">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8 border border-teal-500 rounded-full">
                      <Avatar.Image
                        alt={data?.user?.name || "User Avatar"}
                        src={
                          data?.user?.image ||
                          "https://invalid-url-to-show-fallback.com/image.jpg"
                        }
                        className="object-cover w-full h-full rounded-full"
                      />
                      <Avatar.Fallback
                        delayMs={600}
                        className="w-full h-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold rounded-full"
                      >
                        {data?.user?.name
                          ? data.user.name.charAt(0).toUpperCase()
                          : "NA"}
                      </Avatar.Fallback>
                    </Avatar>
                    <span className="text-sm font-medium text-slate-600">
                      Logged in as{" "}
                      <strong className="text-blue-900">
                        {data?.user?.name}
                      </strong>
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-sm text-red-500 font-semibold underline cursor-pointer hover:text-red-700"
                  >
                    Logout
                  </button>
                </div>
              </>
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
};

export default Navbar;
