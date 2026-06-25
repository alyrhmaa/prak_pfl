import PageHeader from "../components/PageHeader";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);

  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [form, setForm] = useState({
    member_id: "",
    total: "",
    status: "pending",
  });

  useEffect(() => {
    fetchOrders();
    fetchCustomers();
  }, []);

  // ================= FETCH ORDERS =================
  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from("orders")
      .select("id,total,status,created_at,member_id")
      .order("created_at", { ascending: false });

    if (!error) setOrders(data);
  };

  // ================= FETCH CUSTOMERS =================
  const fetchCustomers = async () => {
    const { data, error } = await supabase
      .from("customers")
      .select("id,name")
      .order("name", { ascending: true });

    if (!error) setCustomers(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ================= CREATE =================
  const addOrder = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("orders").insert([
      {
        member_id: form.member_id,
        subtotal: Number(form.total),
        total: Number(form.total),
        status: form.status,
      },
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    setOpen(false);
    setForm({ member_id: "", total: "", status: "pending" });
    fetchOrders();
  };

  // ================= DELETE =================
  const deleteOrder = async (id) => {
    const confirmDelete = window.confirm("Yakin mau hapus order ini?");
    if (!confirmDelete) return;

    const { error } = await supabase
      .from("orders")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchOrders();
  };

  // ================= OPEN EDIT =================
  const openEdit = (item) => {
    setSelectedId(item.id);
    setForm({
      member_id: item.member_id,
      total: item.total,
      status: item.status,
    });
    setEditOpen(true);
  };

  // ================= UPDATE =================
  const updateOrder = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("orders")
      .update({
        member_id: form.member_id,
        subtotal: Number(form.total),
        total: Number(form.total),
        status: form.status,
      })
      .eq("id", selectedId);

    if (error) {
      alert(error.message);
      return;
    }

    setEditOpen(false);
    setSelectedId(null);
    setForm({ member_id: "", total: "", status: "pending" });
    fetchOrders();
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <PageHeader title="Orders" breadcrumb="Home / Orders">
        <button
          onClick={() => setOpen(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          + Add Order
        </button>
      </PageHeader>

      {/* TABLE */}
      <div className="p-6">
        <div className="bg-white rounded-xl shadow">

          <div className="grid grid-cols-5 bg-gray-100 p-4 font-semibold text-sm">
            <span>ID</span>
            <span>Customer</span>
            <span>Status</span>
            <span>Price</span>
            <span>Date</span>
          </div>

          {orders.map((item) => {
            const customer = customers.find(
              (c) => c.id === item.member_id
            );

            return (
              <div
                key={item.id}
                className="grid grid-cols-5 p-4 border-t text-sm"
              >
                <span>{item.id.slice(0, 6)}</span>

                <span>
                  {customer?.name || "Unknown"}
                </span>

                <span>{item.status}</span>

                <span>Rp {item.total}</span>

                {/* ACTION DI DATE COLUMN (biar layout tidak berubah) */}
                <div className="flex items-center justify-between">
                  <span>
                    {new Date(item.created_at).toLocaleDateString()}
                  </span>

                  <div className="flex gap-2">
                    <button
                      onClick={() => openEdit(item)}
                      className="text-blue-500"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteOrder(item.id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= CREATE MODAL ================= */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <form
            onSubmit={addOrder}
            className="bg-white p-5 rounded w-[400px]"
          >
            <h2 className="font-bold mb-3">Add Order</h2>

            <select
              name="member_id"
              value={form.member_id}
              onChange={handleChange}
              className="border p-2 w-full mb-2"
            >
              <option value="">Select Customer</option>
              {customers.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>

            <input
              name="total"
              value={form.total}
              onChange={handleChange}
              placeholder="Total Price"
              className="border p-2 w-full mb-2"
            />

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="border p-2 w-full mb-3"
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>

            <button className="bg-green-500 text-white w-full py-2">
              Save
            </button>
          </form>
        </div>
      )}

      {/* ================= EDIT MODAL ================= */}
      {editOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <form
            onSubmit={updateOrder}
            className="bg-white p-5 rounded w-[400px]"
          >
            <h2 className="font-bold mb-3">Edit Order</h2>

            <select
              name="member_id"
              value={form.member_id}
              onChange={handleChange}
              className="border p-2 w-full mb-2"
            >
              <option value="">Select Customer</option>
              {customers.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>

            <input
              name="total"
              value={form.total}
              onChange={handleChange}
              className="border p-2 w-full mb-2"
            />

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="border p-2 w-full mb-3"
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>

            <button className="bg-blue-500 text-white w-full py-2">
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
}