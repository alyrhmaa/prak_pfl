import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-[80vh]">
      {/* Header tetap ada agar navigasi atas tidak hilang */}
      <PageHeader />

      <div className="flex flex-1 flex-col items-center justify-center text-center p-5">
        {/* Angka 404 Besar */}
        <h1 className="text-9xl font-extrabold text-gray-200">404</h1>

        {/* Pesan Error */}
        <div className="mt-[-40px]">
          <h2 className="text-3xl font-bold text-gray-800">
            Waduh! Halaman Tidak Ketemu<b className="text-hijau">.</b>
          </h2>
          <p className="mt-2 text-gray-500 font-medium">
            Sepertinya menu yang kamu cari sudah dihapus atau link-nya salah
            alamat.
          </p>
        </div>

        {/* Tombol Kembali - Menggunakan styling yang mirip dengan UI-mu */}
        <Link
          to="/"
          className="mt-8 rounded-lg bg-hijau px-8 py-3 font-bold text-white shadow-lg transition-all hover:bg-opacity-90 hover:shadow-xl active:scale-95"
        >
          Balik ke Dashboard
        </Link>

        {/* Opsional: Gambar ilustrasi kecil jika ingin lebih manis */}
        <span className="mt-10 text-6xl">🥘</span>
      </div>
    </div>
  );
}
