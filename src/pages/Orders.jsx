import PageHeader from "../components/PageHeader";

import { useState } from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

export default function Orders() {
  const [showOrders, setShowOrders] = useState(false);

  return (
    <div id="dashboard-container">
      <PageHeader title="Order List" buttonText="Export PDF" />
      <p>
        <p>Ini halaman Orders</p>
      </p>
    </div>
  );
}
