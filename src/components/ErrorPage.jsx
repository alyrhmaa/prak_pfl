export default function ErrorPage({ code, description, image }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-5">

      <img src={image} className="w-64 mb-6" />

      <h1 className="text-8xl font-extrabold text-gray-200">{code}</h1>

      <h2 className="text-3xl font-bold text-gray-800 mt-[-20px]">
        {description}
        <b className="text-hijau">.</b>
      </h2>

      <p className="mt-2 text-gray-500">
        Silahkan cek kembali halaman yang kamu akses
      </p>

    </div>
  );
}