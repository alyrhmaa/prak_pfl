import PageHeader from "../components/PageHeader";
import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/Customers.json";

export default function Customers() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {/* HEADER */}
      <PageHeader title="Customers" breadcrumb="Home / Customers">
        <button
          onClick={() => setShowForm(true)}
          className="bg-hijau text-white px-4 py-2 rounded-lg"
        >
          Add Customer
        </button>
      </PageHeader>

      {/* TABLE */}
      <div className="p-5">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">

          {/* HEADER */}
          <div className="grid grid-cols-5 bg-gray-50 px-6 py-4 text-sm font-semibold text-gray-600">
            <span>ID</span>
            <span>Name</span>
            <span>Email</span>
            <span>Phone</span>
            <span>Loyalty</span>
          </div>

          {/* DATA */}
          {data.customers.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-5 px-6 py-4 border-t hover:bg-gray-50"
            >
              <span>{item.customer_id}</span>

              {/* NAME LINK */}
              <span>
                <Link
                  to={`/customers/${item.customer_id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {item.customer_name}
                </Link>
              </span>

              <span>{item.email}</span>
              <span>{item.phone}</span>

              <span>
                <span
                  className={
                    item.loyalty === "Gold"
                      ? "text-yellow-500"
                      : item.loyalty === "Silver"
                      ? "text-gray-500"
                      : "text-orange-500"
                  }
                >
                  {item.loyalty}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="font-bold mb-3">Add Customer</h2>

            <input
              placeholder="Name"
              className="border p-2 w-full mb-2"
            />

            <input
              placeholder="Email"
              className="border p-2 w-full mb-2"
            />

            <input
              placeholder="Phone"
              className="border p-2 w-full mb-2"
            />

            <select className="border p-2 w-full mb-3">
              <option>Bronze</option>
              <option>Silver</option>
              <option>Gold</option>
            </select>

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