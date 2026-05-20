

import Link from "next/link";
import { FaCalendarCheck, FaUserMd } from "react-icons/fa";
import HeroSilder from "../clientcomponent/HeroSilder";

const HeroBanner = () => {
 

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-teal-50/50 overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left space-y-6 z-10">
            <div className="inline-flex items-center gap-2 bg-teal-100/60 text-teal-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold self-center lg:self-start border border-teal-200">
              <FaUserMd className="animate-pulse" /> 24/7 Healthcare Service
              Available
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 tracking-tight leading-[1.1]">
              Your Health, <br />
              <span className="text-teal-500">Our Priority</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Connect with certified medical specialists instantly. Skip the
              waiting room and book your appointment with confidence today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/all-appointment"
                className="w-full sm:w-auto bg-blue-900 hover:bg-teal-600 text-white font-medium px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 group text-base"
              >
                <FaCalendarCheck className="text-teal-300 group-hover:text-white transition-colors" />
                View Appointment
              </Link>
              <Link
                href="/dashboard"
                className="w-full sm:w-auto border-2 border-blue-900 text-blue-900 hover:bg-blue-50/50 font-medium px-8 py-3.5 rounded-xl transition-all duration-300 text-center text-base"
              >
                View Dashboard
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7 w-full h-[320px] sm:h-[450px] lg:h-[500px] relative rounded-2xl sm:rounded-[32px] overflow-hidden shadow-xl border-4 border-white bg-white">
            <HeroSilder/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
