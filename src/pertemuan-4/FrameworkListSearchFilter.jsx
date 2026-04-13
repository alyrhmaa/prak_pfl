import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  /** Deklrasai state **/
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedTag, setSelectedTag] = useState("");

  	/*Inisialisasi DataForm*/
		const [dataForm, setDataForm] = useState({
			searchTerm: "",
			selectedTag: "",
			/*Tambah state lain beserta default value*/
			});
		
		/*Inisialisasi Handle perubahan nilai input form*/
		const handleChange = (evt) => {
			const { name, value } = evt.target;
			setDataForm({
				...dataForm,
				[name]: value,
			});
		};

  /** Deklrasai Logic Search & Filter **/
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm) ||
      framework.details.developer.toLowerCase().includes(_searchTerm) ||
      framework.details.releaseYear.toString().includes(_searchTerm);
      
    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 p-6 md:p-16">
      {/* Container untuk Search & Filter - Diletakkan di atas Grid */}
      <div className="max-w-6xl mx-auto mb-12 flex flex-col sm:flex-row justify-center items-center gap-4">
        {/* Search Input - Dibuat ramping dengan max-w-xs */}
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            name="searchTerm"
            placeholder="Search framework..."
            className="w-full pl-4 pr-4 py-2.5 bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-full text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            onChange={handleChange}
          />
        </div>

        {/* Select Filter - Dibuat lebih kecil dari search */}
        <div className="relative w-full max-w-[160px]">
          <select
            name="selectedTag"
            className="w-full pl-4 pr-10 py-2.5 bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-full text-sm shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer text-gray-600 transition-all"
            onChange={handleChange}
          >
            <option value="">All Tags</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          {/* Icon Panah untuk Select */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-emerald-500">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Grid Utama untuk Framework Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredFrameworks.map((item, index) => (
          <div
            key={item.id}
            className="group relative flex flex-col justify-between bg-white/70 backdrop-blur-md border border-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          >
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-emerald-100/50 rounded-full blur-3xl group-hover:bg-emerald-200/60 transition-colors" />

            <div className="relative">
              <h2 className="text-2xl font-black text-gray-800 tracking-tight mb-2 group-hover:text-emerald-700">
                {item.name}
              </h2>
              <div className="h-1 w-12 bg-emerald-400 rounded-full mb-6 group-hover:w-20 transition-all duration-500" />
              <p className="text-gray-500 leading-[1.6] mb-6 font-medium">
                {item.description}
              </p>
            </div>

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-600/60 mb-6 flex items-center">
                <span className="w-8 h-[1px] bg-emerald-200 mr-2"></span>
                {item.details.developer} • {item.details.releaseYear}
              </p>
              <a
                href={item.details.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-white border border-emerald-100 text-emerald-700 font-bold text-sm shadow-sm hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:shadow-lg active:scale-95 transition-all duration-300"
              >
                Visit Official Website
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
