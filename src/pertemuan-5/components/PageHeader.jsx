export default function PageHeader() {
  return (
    <div className="flex items-center justify-between p-4">

      {/* Kiri */}
      <div className="flex flex-col">

        <span className="text-3xl font-semibold text-gray-800">
          Dashboard
        </span>

        <div className="mt-2 flex items-center space-x-2 text-sm font-medium">

          <span className="text-gray-400">Home</span>
          <span className="text-gray-300">/</span>

          <span className="text-gray-400">Home Detail</span>
          <span className="text-gray-300">/</span>

          <span className="text-gray-400">Home Very Detail</span>

        </div>
      </div>

      {/* Kanan */}
      <button className="rounded-lg bg-hijau px-4 py-2 text-white">
        Add Button
      </button>

    </div>
  );
}