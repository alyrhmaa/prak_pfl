import PageHeader from "../components/PageHeader";
import { useState } from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

export default function Dashboard() {
  const [showOrders, setShowOrders] = useState(false);

  return (
    <div>
      {/* HEADER */}
      <PageHeader title="Dashboard Overview" breadcrumb="Home / Dashboard">
        <button className="bg-hijau text-white px-4 py-2 rounded-lg">
          + Add New Data
        </button>
      </PageHeader>

      <div className="grid gap-4 p-5 sm:grid-cols-2 md:grid-cols-4">
        
        {/* Orders */}
        <div>
          <div
            onClick={() => setShowOrders(!showOrders)}
            className="flex cursor-pointer items-center space-x-5 rounded-lg bg-white p-4 shadow-md"
          >
            <div className="rounded-full bg-hijau p-4 text-3xl text-white">
              <FaShoppingCart />
            </div>

            <div className="flex flex-col">
              <span className="text-2xl font-bold">75</span>
              <span className="text-gray-400">Total Orders</span>
            </div>
          </div>

          {showOrders && (
            <div className="mt-2 rounded-lg bg-white p-4 shadow-md text-sm">
              <p>🍔 Burger Order</p>
              <p>🍕 Pizza Order</p>
              <p>🥤 Drink Order</p>
            </div>
          )}
        </div>

        {/* Delivered */}
        <div className="flex items-center space-x-5 rounded-lg bg-white p-4 shadow-md">
          <div className="rounded-full bg-biru p-4 text-3xl text-white">
            <FaTruck />
          </div>

          <div className="flex flex-col">
            <span className="text-2xl font-bold">175</span>
            <span className="text-gray-400">Delivered</span>
          </div>
        </div>

        {/* Cancel */}
        <div className="flex items-center space-x-5 rounded-lg bg-white p-4 shadow-md">
          <div className="rounded-full bg-merah p-4 text-3xl text-white">
            <FaBan />
          </div>

          <div className="flex flex-col">
            <span className="text-2xl font-bold">40</span>
            <span className="text-gray-400">Canceled</span>
          </div>
        </div>

        {/* Revenue */}
        <div className="flex items-center space-x-5 rounded-lg bg-white p-4 shadow-md">
          <div className="rounded-full bg-kuning p-4 text-3xl text-white">
            <FaDollarSign />
          </div>

          <div className="flex flex-col">
            <span className="text-2xl font-bold">Rp.128</span>
            <span className="text-gray-400">Revenue</span>
          </div>
        </div>

      </div>
    </div>
  );
}