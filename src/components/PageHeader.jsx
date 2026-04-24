export default function PageHeader({ title, breadcrumb, children }) {
  return (
    <div className="flex items-center justify-between p-4">
      {/* LEFT */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          {title}
          <span className="text-hijau">.</span>
        </h1>

        {/* BREADCRUMB */}
        <p className="text-sm text-gray-400 mt-1">
          {Array.isArray(breadcrumb) ? breadcrumb.join(" / ") : breadcrumb}
        </p>
      </div>

      {/* RIGHT (CUSTOM BUTTON / CONTENT) */}
      <div>{children}</div>
    </div>
  );
}
