import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  // CREATE
  const [open, setOpen] = useState(false);

  // EDIT
  const [editOpen, setEditOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  // ===================== READ =====================
  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*");

    console.log("DATA:", data);
    console.log("ERROR:", error);

    setProducts(data || []);
  };

  // ===================== INPUT =====================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ===================== CREATE =====================
  const addProduct = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("products").insert([
      {
        name: form.name,
        category: form.category,
        price: form.price,
        stock: form.stock,
      },
    ]);

    if (error) {
      console.log("INSERT ERROR:", error);
      return;
    }

    setForm({
      name: "",
      category: "",
      price: "",
      stock: "",
    });

    setOpen(false);
    fetchProducts();
  };

  // ===================== DELETE =====================
  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm("Yakin hapus produk ini?");
    if (!confirmDelete) return;

    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) {
      console.log("DELETE ERROR:", error);
      return;
    }

    fetchProducts();
  };

  // ===================== OPEN EDIT =====================
  const openEdit = (item) => {
    setSelectedId(item.id);
    setForm({
      name: item.name,
      category: item.category,
      price: item.price,
      stock: item.stock,
    });

    setEditOpen(true);
  };

  // ===================== UPDATE =====================
  const updateProduct = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("products")
      .update({
        name: form.name,
        category: form.category,
        price: form.price,
        stock: form.stock,
      })
      .eq("id", selectedId);

    if (error) {
      console.log("UPDATE ERROR:", error);
      return;
    }

    setEditOpen(false);
    setSelectedId(null);

    setForm({
      name: "",
      category: "",
      price: "",
      stock: "",
    });

    fetchProducts();
  };

  // ===================== FILTER =====================
  const filteredProducts = products.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-md p-6">

        {/* TITLE */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold">Products</h1>
            <p className="text-gray-400 mb-5">
              Dashboard / Product List
            </p>
          </div>

          <button className="bg-gray-100 w-12 h-12 rounded-xl text-gray-400 text-2xl">
            ...
          </button>
        </div>

        {/* ADD BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="bg-emerald-500 text-white px-4 py-2 rounded-lg mb-4"
        >
          + Add Product
        </button>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Cari produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 mb-5"
        />

        {/* HEADER */}
        <div className="grid grid-cols-6 bg-emerald-500 text-white px-4 py-3 rounded-t-lg font-semibold">
          <span>#</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span>Stock</span>
          <span>Action</span>
        </div>

        {/* DATA */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-6 px-4 py-3 border-b hover:bg-gray-50"
            >
              <span>{index + 1}</span>

              <span>
                <Link
                  to={`/products/${item.id}`}
                  className="text-emerald-500 hover:text-emerald-700"
                >
                  {item.name}
                </Link>
              </span>

              <span>{item.category}</span>

              <span>
                Rp {Number(item.price).toLocaleString("id-ID")}
              </span>

              <span>{item.stock}</span>

              {/* ACTION */}
              <span className="flex gap-2">
                <button
                  onClick={() => openEdit(item)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteProduct(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </span>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500 border-b">
            Tidak ada data produk
          </div>
        )}
      </div>

      {/* ================= CREATE MODAL ================= */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <h2 className="text-xl font-bold mb-4">Add Product</h2>

            <form onSubmit={addProduct} className="space-y-3">
              <input
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border p-2"
              />

              <input
                name="category"
                placeholder="Category"
                value={form.category}
                onChange={handleChange}
                className="w-full border p-2"
              />

              <input
                name="price"
                type="number"
                placeholder="Price"
                value={form.price}
                onChange={handleChange}
                className="w-full border p-2"
              />

              <input
                name="stock"
                type="number"
                placeholder="Stock"
                value={form.stock}
                onChange={handleChange}
                className="w-full border p-2"
              />

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-emerald-500 text-white px-4 py-2"
                >
                  Save
                </button>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="bg-gray-300 px-4 py-2"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= EDIT MODAL ================= */}
      {editOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <h2 className="text-xl font-bold mb-4">Edit Product</h2>

            <form onSubmit={updateProduct} className="space-y-3">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border p-2"
              />

              <input
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full border p-2"
              />

              <input
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}
                className="w-full border p-2"
              />

              <input
                name="stock"
                type="number"
                value={form.stock}
                onChange={handleChange}
                className="w-full border p-2"
              />

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2"
                >
                  Update
                </button>

                <button
                  type="button"
                  onClick={() => setEditOpen(false)}
                  className="bg-gray-300 px-4 py-2"
                >
                  Cancel
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}