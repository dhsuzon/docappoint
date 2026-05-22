import AppointBook from "@/components/clientcomponent/AppointBook";
import { auth } from "@/lib/auth";
import { getSingleDocDetails } from "@/ulitis/getSingleDocDetails";
import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FaClock, FaHospital, FaMapMarkerAlt, FaMedal } from "react-icons/fa";

export async function generateMetadata({ params }) {
  const { doctId } = await params;
  const doc = await getSingleDocDetails(doctId);
  return {
    title: `${doc.name} | DocAppoint`,
    description: `Book an appointment with ${doc.name}, ${doc.specialty} at ${doc.hospital}.`,
  };
}

const Page = async ({ params }) => {
  const { doctId } = await params;
  const singleDocDetails = await getSingleDocDetails(doctId);

  
  const session = await auth.api.getSession({
    headers: await headers(), 
  });

  if(!session){
    redirect(`/login?callbackUrl=/doctor/details/${doctId}`)
    
  }



  return (
    <section className="py-12 bg-slate-50 min-h-screen">   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center mb-8">
          <div className="w-full md:col-span-6 h-87.5 sm:h-112.5 md:h-120 lg:h-130 relative rounded-2xl overflow-hidden bg-slate-100 shadow-sm">
            <Image
              src={singleDocDetails.image}
              alt={singleDocDetails.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-300 hover:scale-102"
            />
          </div>
          <div className="w-full md:col-span-6 flex flex-col justify-center">
            <div>
              <span className="px-3 py-1 bg-teal-50 text-teal-600 text-base sm:text-lg font-bold capitalize tracking-wider rounded-full inline-block">
                {singleDocDetails.specialty}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mt-3 capitalize tracking-tight">
              {singleDocDetails.name}
            </h1>
            <div className="text-slate-500 font-medium text-base sm:text-lg mt-2 flex flex-wrap gap-x-4 gap-y-2 items-center">
              <span className="flex items-center gap-2">
                <FaMedal className="text-teal-500 shrink-0" />
                <span>
                  {singleDocDetails.experience || "10+ Years"} Experience
                </span>
              </span>

              <span className="text-slate-300 hidden sm:inline">|</span>

              <span className="flex items-center gap-2">
                <FaHospital className="text-teal-500 shrink-0" />
                <span>
                  {singleDocDetails.hospital || "Central Medical College"}
                </span>
              </span>
            </div>

           
            <p className="mt-5 text-slate-600 leading-relaxed text-base sm:text-lg max-w-xl">
              {singleDocDetails.description ||
                `Dr. ${singleDocDetails.name} is a renowned specialist in ${singleDocDetails.specialty}, dedicated to providing exceptional medical care.`}
            </p>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 p-5 bg-slate-50 rounded-2xl border border-slate-100 max-w-xl">
              <div>
                <span className="text-base sm:text-lg text-slate-400 block font-bold capitalize tracking-wider">
                  Consultation Fee
                </span>
                <span className="text-lg sm:text-xl font-black text-blue-900 mt-0.5 block">
                  ৳ {singleDocDetails.fee || "00"}
                </span>
              </div>
              <div>
                <span className="text-base sm:text-lg text-slate-400 block font-bold capitalize tracking-wider">
                  Chamber Location
                </span>
                <div className="text-base sm:text-lg  text-slate-700 mt-2 block">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-teal-500 shrink-0 " />
                    <span>
                      {singleDocDetails.location || "Sylhet, Bangladesh"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <AppointBook/>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
          <h3 className="text-base sm:text-lg font-bold text-blue-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
            <FaClock className="text-teal-500" /> Available Chamber Schedule
            Slots
          </h3>
          <div className="flex flex-wrap gap-2">
            {singleDocDetails.slots && singleDocDetails.slots.length > 0 ? (
              singleDocDetails.slots.map((slot, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl text-base sm:text-lg font-semibold hover:border-teal-500 hover:text-teal-600 transition-colors duration-200"
                >
                  {slot}
                </span>
              ))
            ) : (
              <p className="text-base sm:text-lg text-slate-500 font-medium">
                Weekly Schedule: Saturday to Thursday (05:00 PM - 09:00 PM).
                Friday Chamber is closed.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
