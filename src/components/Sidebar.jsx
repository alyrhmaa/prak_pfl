import {
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaPlus,
  FaBox,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
    ${
      isActive
        ? "text-hijau bg-green-200 font-extrabold"
        : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;

  return (
    <div className="flex min-h-screen w-72 flex-col bg-white p-10 shadow-lg">

      {/* LOGO */}
      <div className="flex flex-col">
        <span className="font-poppins text-[48px] text-gray-900">
          Sedap<b className="text-hijau">.</b>
        </span>

        <span className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* MENU */}
      <div className="mt-10">
        <ul className="space-y-3">

          {/* Dashboard */}
          <NavLink to="/" className={menuClass}>
            <FaHome className="mr-4 text-xl" />
            Dashboard
          </NavLink>

          {/* Orders */}
          <NavLink to="/orders" className={menuClass}>
            <FaShoppingCart className="mr-4 text-xl" />
            Orders
          </NavLink>

          {/* Customers */}
          <NavLink to="/customers" className={menuClass}>
            <FaUsers className="mr-4 text-xl" />
            Customers
          </NavLink>

          {/* Products */}
          <NavLink to="/products" className={menuClass}>
            <FaBox className="mr-4 text-xl" />
            Products
          </NavLink>

          {/* Error 400 */}
          <NavLink to="/error400" className={menuClass}>
            ⚠️ Error 400
          </NavLink>

          {/* Error 401 */}
          <NavLink to="/error401" className={menuClass}>
            🔒 Error 401
          </NavLink>

          {/* Error 403 */}
          <NavLink to="/error403" className={menuClass}>
            ⛔ Error 403
          </NavLink>

        </ul>
      </div>

      {/* FOOTER */}
      <div className="mt-auto">

        <div className="mb-10 flex items-center rounded-md bg-hijau px-4 py-2 shadow-lg">

          <div className="text-sm text-white">

            <span>
              Please organize your menus through button below!
            </span>

            {/* BUTTON */}
            <div className="mt-3 flex cursor-pointer items-center justify-center space-x-2 rounded-md bg-white p-2 hover:bg-gray-100">

              <FaPlus className="text-gray-600" />

              <span className="text-gray-600">
                Add Menus
              </span>

            </div>
          </div>

          <img
            src="/image/avatar.jpg"
            className="w-24 rounded-full -mt-6"
          />
        </div>

        <span className="font-bold text-gray-400">
          Sedap Restaurant Admin Dashboard
        </span>

        <p className="font-light text-gray-400">
          © 2025 All Right Reserved
        </p>

      </div>
    </div>
  );
}