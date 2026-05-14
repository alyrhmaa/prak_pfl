import { useParams } from "react-router-dom"
import data from "../data/Product.json"

export default function ProductDetail() {
  const { id } = useParams()

  const product = data.product.find(
    (item) => item.id == id
  )

  if (!product) {
    return (
      <div className="p-5">
        Product tidak ditemukan
      </div>
    )
  }

  return (
    <div className="p-6 flex justify-center">

      <div className="bg-white rounded-xl shadow-lg w-[350px] p-5">

        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-52 object-contain mb-4"
        />

        <h2 className="text-2xl font-bold mb-3">
          {product.title}
        </h2>

        <p className="text-gray-600 mb-1">
          Kategori: {product.category}
        </p>

        <p className="text-gray-600 mb-2">
          Brand: {product.brand}
        </p>

        <p className="font-bold text-lg">
          Harga: Rp {product.price}
        </p>

      </div>
    </div>
  )
}