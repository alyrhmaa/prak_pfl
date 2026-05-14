import { Link } from "react-router-dom"
import data from "../data/Product.json"

export default function Products() {
  return (
    <div className="p-6">

      <div className="bg-white rounded-2xl shadow-md p-6">

        {/* TITLE */}
        <div className="flex items-start justify-between">

          <div>
            <h1 className="text-3xl font-bold">
              Products
            </h1>

            <p className="text-gray-400 mb-5">
              Dashboard / Product List
            </p>
          </div>

          {/* DOT BUTTON */}
          <button className="bg-gray-100 w-12 h-12 rounded-xl text-gray-400 text-2xl">
            ...
          </button>

        </div>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Cari produk..."
          className="w-full border rounded-lg px-4 py-2 mb-5"
        />

        {/* HEADER */}
        <div className="grid grid-cols-3 bg-emerald-500 text-white px-4 py-3 rounded-t-lg font-semibold">

          <span>#</span>
          <span>Name</span>
          <span>Category</span>

        </div>

        {/* DATA */}
        {data.product.map((item, index) => (
          <div
            key={item.id}
            className="grid grid-cols-3 px-4 py-3 border-b hover:bg-gray-50"
          >

            <span>{index + 1}.</span>

            <span>
              <Link
                to={`/products/${item.id}`}
                className="text-emerald-500 hover:text-emerald-700"
              >
                {item.title}
              </Link>
            </span>

            <span>{item.category}</span>

          </div>
        ))}

      </div>
    </div>
  )
}