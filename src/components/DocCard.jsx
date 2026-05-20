import Image from "next/image";
import Link from "next/link";


const DocCard = ({doc}) => {
  return (
    <>
      <div
        key={doc._id}
        className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
      >
        <div className="w-full h-64 sm:h-72 relative overflow-hidden bg-slate-100 rounded-2xl group">
            <Image
                src={doc.image}
                alt={doc.name}
                fill 
                priority 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          <span className="absolute top-4 right-4 font-black text-yellow-400">
            {doc.rating}
          </span>
        </div>
        <div className="flex grow flex-col">
          <span className="text-xs py-2 font-bold uppercase text-teal-600 mb-1">
            {doc.specialty}
          </span>
          <h3 className="text-xl font-bold text-blue-900 mb-2">{doc.name}</h3>

          <p className="text-base sm:text-lg text-slate-500 font-medium mb-2">
            💼 {doc.experience} | 🏥 {doc.hospital}
          </p>

          <p className="text-base sm:text-lg text-slate-600 line-clamp-3 mb-4">
            {doc.description}
          </p>
        </div>
        <Link
          href={`/doctor/details/${doc._id}`}
          className="w-full py-3 bg-blue-900 hover:bg-teal-500 text-white font-bold text-center text-sm rounded-xl transition-colors duration-300 shadow-md block"
        >
          View Details
        </Link>
      </div>
    </>
  );
}

export default DocCard