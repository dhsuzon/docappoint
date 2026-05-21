import { getAllDoctors } from "@/ulitis/getAllDoctors";
import AllAppointSearch from "@/components/clientcomponent/AllAppointSearch";

export const metadata = {
  title: "All Appointments",
  description: "View and search all available doctor appointments.",
};

export default async function TopDoctors() {
  const allDoctors = await getAllDoctors();
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 pb-6 border-b border-slate-100">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 tracking-tight">
              Available <span className="text-teal-500">Appointments</span>
            </h2>
          </div>
        </div>
        <AllAppointSearch allDoctors={allDoctors} />
      </div>
    </section>
  );
}
