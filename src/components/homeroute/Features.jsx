
import { features } from "@/data/Features";



const Features = () => {
  
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 tracking-tight">
          Why Patients Trust DocAppoint
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-2">
          We provide the fastest and most reliable way to connect with
          healthcare professionals.
        </p>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-teal-100 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="p-2.5 sm:p-3 bg-teal-50 w-fit rounded-xl mb-4 group-hover:bg-teal-100 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-teal-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
