import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ErrorPage from "../components/ErrorPage";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-[80vh]">
      <PageHeader title="Error 404" showButton={false} />

      <ErrorPage
        code={404}
        description="Waduh! Halaman Tidak Ketemu"
        image="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
      />

      <div className="text-center pb-10">
        <Link
          to="/"
          className="rounded-lg bg-hijau px-8 py-3 font-bold text-white shadow-lg"
        >
          Balik ke Dashboard
        </Link>
      </div>
    </div>
  );
}