export default function PageHeader({ 
  title = "Dashboard", 
  buttonText = "Add Button", 
  showButton = true, 
  onBtnClick 
}) {
  return (
    <div className="flex items-center justify-between p-4 bg-transparent">
      
      {/* Bagian Kiri: Judul Dinamis */}
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
          {title}
          <span className="text-hijau">.</span>
        </h1>
      </div>

      {/* Bagian Kanan: Tombol Dinamis */}
      {showButton && (
        <button 
          onClick={onBtnClick}
          className="rounded-lg bg-hijau px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-opacity-90 hover:shadow-lg active:scale-95"
        >
          {buttonText}
        </button>
      )}

    </div>
  );
}