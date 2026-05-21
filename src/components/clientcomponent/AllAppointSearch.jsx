"use client";

import { useState } from "react";
import DocCard from "@/components/DocCard";
import { SearchField } from "@heroui/react";

const AllAppointSearch = ({ allDoctors }) => {
  const [search, setSearch] = useState("");

  const filtered = allDoctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="w-full sm:max-w-100">
        <SearchField
          fullWidth
          name="search"
          aria-labelledby="search"
          className="w-full"
          value={search}
          onChange={setSearch}
        >
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input placeholder="Search Doctor Appointment" />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {filtered.length > 0 ? (
          filtered.map((doc) => <DocCard doc={doc} key={doc._id} />)
        ) : (
          <p className="text-base sm:text-lg text-slate-500 font-medium col-span-3 text-center py-8">
            No doctors found matching your search.
          </p>
        )}
      </div>
    </>
  );
};

export default AllAppointSearch;
