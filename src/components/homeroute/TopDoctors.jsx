
import {getTopDoctors} from "@/ulitis/getTopDoctor"
import DocCard from "@/components/DocCard";



export default async function TopDoctors() {
  const topDoctors = await getTopDoctors();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 tracking-tight" >
            Our Top Rated <span className="text-teal-500">Specialists</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-600 text-base sm:text-lg mx-auto px-2 max-w-2xl">
            Consult with our highest-reviewed doctors for top-tier healthcare.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topDoctors.map((doc) => (
            <DocCard doc={doc} key={doc._id}/>
          ))}
        </div>
      </div>
    </section>
  );
}
