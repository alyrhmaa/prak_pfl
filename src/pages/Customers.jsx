import PageHeader from "../components/PageHeader";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    loyalty: "Bronze",
  });

  // ================= READ =================
  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const { data, error } = await supabase
      .from("customers")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
    } else {
      setCustomers(data);
    }
  };

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ================= CREATE =================
  const addCustomer = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("customers").insert([
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        loyalty: form.loyalty,
      },
    ]);

    if (error) {
      console.log(error);
      return;
    }

    setForm({ name: "", email: "", phone: "", loyalty: "Bronze" });
    setOpen(false);
    fetchCustomers();
  };

  // ================= DELETE =================
  const deleteCustomer = async (id) => {
    const confirm = window.confirm("Yakin mau hapus customer ini?");
    if (!confirm) return;

    const { error } = await supabase
      .from("customers")
      .delete()
      .eq("id", id);

    if (error) {
      console.log(error);
      return;
    }

    fetchCustomers();
  };

  // ================= OPEN EDIT =================
  const openEdit = (item) => {
    setSelectedId(item.id);
    setForm({
      name: item.name,
      email: item.email,
      phone: item.phone,
      loyalty: item.loyalty,
    });
    setEditOpen(true);
  };

  // ================= UPDATE =================
  const updateCustomer = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("customers")
      .update({
        name: form.name,
        email: form.email,
        phone: form.phone,
        loyalty: form.loyalty,
      })
      .eq("id", selectedId);

    if (error) {
      console.log(error);
      return;
    }

    setEditOpen(false);
    setSelectedId(null);
    setForm({ name: "", email: "", phone: "", loyalty: "Bronze" });
    fetchCustomers();
  };

  return (
    <div>

      {/* HEADER */}
      <PageHeader title="Customers" breadcrumb="Home / Customers">
        <button
          onClick={() => setOpen(true)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Customer
        </button>
      </PageHeader>

      {/* TABLE */}
      <div className="p-5">
        <div className="bg-white rounded-xl shadow overflow-hidden">

          {/* HEADER TABLE */}
          <div className="grid grid-cols-6 bg-gray-100 p-3 font-semibold text-sm">
            <span>ID</span>
            <span>Name</span>
            <span>Email</span>
            <span>Phone</span>
            <span>Loyalty</span>
            <span>Action</span>
          </div>

          {/* DATA */}
          {customers.length > 0 ? (
            customers.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-6 p-3 border-t text-sm"
              >
                <span>{item.id.slice(0, 6)}</span>

                <span>
                  <Link
                    to={`/customers/${item.id}`}
                    className="text-blue-500"
                  >
                    {item.name}
                  </Link>
                </span>

                <span>{item.email}</span>
                <span>{item.phone}</span>

                <span>{item.loyalty}</span>

                {/* ACTION */}
                <div className="flex gap-2">
                  <button
                    onClick={() => openEdit(item)}
                    className="bg-yellow-400 px-2 py-1 text-white rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteCustomer(item.id)}
                    className="bg-red-500 px-2 py-1 text-white rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-5 text-center text-gray-400">
              Tidak ada data customers
            </div>
          )}
        </div>
      </div>

      {/* ================= CREATE MODAL ================= */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <form
            onSubmit={addCustomer}
            className="bg-white p-5 rounded w-[400px]"
          >
            <h2 className="text-xl font-bold mb-3">Add Customer</h2>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="border p-2 w-full mb-2"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="border p-2 w-full mb-2"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="border p-2 w-full mb-2"
            />

            <select
              name="loyalty"
              value={form.loyalty}
              onChange={handleChange}
              className="border p-2 w-full mb-3"
            >
              <option>Bronze</option>
              <option>Silver</option>
              <option>Gold</option>
            </select>

            <button className="bg-green-500 text-white px-4 py-2 w-full">
              Save
            </button>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-2 w-full bg-gray-300 px-4 py-2"
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* ================= EDIT MODAL ================= */}
      {editOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <form
            onSubmit={updateCustomer}
            className="bg-white p-5 rounded w-[400px]"
          >
            <h2 className="text-xl font-bold mb-3">Edit Customer</h2>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border p-2 w-full mb-2"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border p-2 w-full mb-2"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="border p-2 w-full mb-2"
            />

            <select
              name="loyalty"
              value={form.loyalty}
              onChange={handleChange}
              className="border p-2 w-full mb-3"
            >
              <option>Bronze</option>
              <option>Silver</option>
              <option>Gold</option>
            </select>

            <button className="bg-blue-500 text-white px-4 py-2 w-full">
              Update
            </button>

            <button
              type="button"
              onClick={() => setEditOpen(false)}
              className="mt-2 w-full bg-gray-300 px-4 py-2"
            >
              Cancel
            </button>
          </form>
        </div>
      )}

    </div>
  );
}