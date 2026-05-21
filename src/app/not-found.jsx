import Link from "next/link";
import Image from "next/image";

// 🎯 SEO ফ্রেন্ডলি মেটাডাটা
export const metadata = {
  title: "404 - Page Not Found | DocAppoint",
  description: "Oops! The page you are looking for does not exist.",
  robots: {
    index: false, // ভুল লিংক যাতে গুগল ইনডেক্স না করে
    follow: true,
  },
};

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50/50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6 sm:space-y-8">
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-teal-100/50 blur-3xl rounded-full w-48 h-48 sm:w-60 sm:h-60 mx-auto -z-10 animate-pulse" />
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl max-w-65 sm:max-w-75 w-full">
            <Image
              src="/image/logo.png"
              alt="DocAppoint Logo"
              width={100}
              height={100}
              className="object-cover w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full mix-blend-multiply"
              priority
            />
            <h1 className="text-6xl sm:text-7xl font-black text-blue-900 mt-4 tracking-tight">
              4<span className="text-teal-500">0</span>4
            </h1>
          </div>
        </div>
        <div className="space-y-2 sm:space-y-3 px-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 tracking-tight">
            Page Not Found
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-sm mx-auto leading-relaxed">
            Oops! The page you are looking for does not exist, or has been moved to a new address.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2 w-full max-w-xs sm:max-w-none mx-auto">
          <Link
            href="/"
            className="w-full sm:w-auto bg-blue-900 hover:bg-teal-600 text-white font-medium px-8 py-3 rounded-xl transition-all duration-300 shadow-md text-center cursor-pointer text-sm sm:text-base"
          >
            Back to Home
          </Link>
          
          <Link
            href="/all-appointment"
            className="w-full sm:w-auto border border-blue-900 text-blue-900 hover:bg-blue-50 font-medium px-8 py-3 rounded-xl transition-all duration-300 text-center cursor-pointer text-sm sm:text-base"
          >
            Book Appointment
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFound;