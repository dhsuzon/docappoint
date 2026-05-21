import { getAllDoctors } from "@/ulitis/getAllDoctors";
import DocCard from "@/components/DocCard";
import { Label, SearchField } from "@heroui/react";

export const metadata = {
  title: "All Appointments ",
  description: "View and  all your  doctor appointments.",
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
          <div className="w-full sm:max-w-100 space-y-4">
            <SearchField
              fullWidth
              name="search"
              aria-labelledby="search"
              className="w-full "
            >
              <SearchField.Group>
                <SearchField.SearchIcon />
                <SearchField.Input placeholder="Search Doctor Appointment" />
                <SearchField.ClearButton />
              </SearchField.Group>
            </SearchField>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allDoctors.map((doc) => (
            <DocCard doc={doc} key={doc._id} />
          ))}
        </div>
      </div>
    </section>
  );
}
