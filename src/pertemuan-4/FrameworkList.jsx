import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 p-6 md:p-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {frameworkData.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col justify-between bg-white/70 backdrop-blur-md border border-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          >
            {/* Dekorasi Aksentuasi Soft Hijau di pojok */}
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
                className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-white border border-emerald-100 text-emerald-700 font-bold text-sm shadow-sm hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:shadow-[0_10px_20px_rgba(16,185,129,0.2)] active:scale-95 transition-all duration-300"
              >
                Visit Official Website
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}