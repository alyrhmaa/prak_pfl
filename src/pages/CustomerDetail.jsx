import { useParams } from "react-router-dom";
import data from "../data/Customers.json";

export default function CustomerDetail() {
  const { id } = useParams();

  const customer = data.customers.find(
    (item) => item.customer_id == id
  );

  if (!customer) {
    return <div className="p-5">Customer tidak ditemukan</div>;
  }

  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">
          Detail Customer
        </h1>

        <p>ID: {customer.customer_id}</p>
        <p>Name: {customer.customer_name}</p>
        <p>Email: {customer.email}</p>
        <p>Phone: {customer.phone}</p>
        <p>Loyalty: {customer.loyalty}</p>
      </div>
    </div>
  );
}