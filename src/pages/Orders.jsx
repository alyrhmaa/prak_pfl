import PageHeader from "../components/PageHeader";
import { useState } from "react";
import data from "../data/Orders.json";

export default function Orders() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {/* HEADER */}
      <PageHeader title="Orders" breadcrumb="Home / Orders">
        <button
          onClick={() => setShowForm(true)}
          className="bg-hijau text-white px-4 py-2 rounded-lg"
        >
          Add Orders
        </button>
      </PageHeader>

      {/* TABLE */}
      <div className="p-5">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">

          {/* HEADER TABLE */}
          <div className="grid grid-cols-5 bg-gray-50 px-6 py-4 text-sm font-semibold text-gray-600">
            <span>ID</span>
            <span>Customer</span>
            <span>Status</span>
            <span>Price</span>
            <span>Date</span>
          </div>

          {/* DATA */}
          {data.orders.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-5 px-6 py-4 border-t hover:bg-gray-50"
            >
              <span>{item.order_id}</span>
              <span>{item.customer_name}</span>

              <span>
                <span
                  className={
                    item.status === "Completed"
                      ? "text-green-500"
                      : item.status === "Pending"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }
                >
                  {item.status}
                </span>
              </span>

              <span>Rp {item.total_price}</span>
              <span>{item.order_date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="font-bold mb-3">Add Order</h2>

            <input
              placeholder="Customer Name"
              className="border p-2 w-full mb-2"
            />
            <input
              placeholder="Total Price"
              className="border p-2 w-full mb-3"
            />

            <button
              onClick={() => setShowForm(false)}
              className="bg-hijau text-white px-4 py-2 w-full"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}