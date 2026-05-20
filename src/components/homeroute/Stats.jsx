import { stats } from "@/data/Stat";



const Stats = () => {

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white mb-12 sm:mb-16 md:mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight">
            Our Platform <span className="text-teal-500">By The Numbers</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-2 leading-relaxed">
            Real-time statistics showcasing our commitment to delivering trusted
            health services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-teal-100 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group h-full"
            >
              <span className="text-3xl sm:text-4xl font-black text-teal-600 tracking-tight drop-shadow-sm group-hover:text-teal-500 transition-colors">
                {stat.value}
              </span>
              <span className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mt-3 group-hover:text-blue-900 transition-colors">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
