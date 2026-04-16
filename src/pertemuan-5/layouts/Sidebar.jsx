import { useState } from "react";
import {
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaPlus,
} from "react-icons/fa";

export default function Sidebar() {

  const [menus, setMenus] = useState([
    "Dashboard",
    "Orders",
    "Customers",
  ]);

  // 🟢 FUNCTION TAMBAH MENU
  const handleAddMenu = () => {
    const newMenu = prompt("Masukkan nama menu baru:");
    if (newMenu) {
      setMenus([...menus, newMenu]);
    }
  };

  return (
    <div className="flex min-h-screen w-72 flex-col bg-white p-10 shadow-lg">

      {/* Logo */}
      <div className="flex flex-col">
        <span className="font-poppins text-[48px] text-gray-900">
          Sedap<b className="text-hijau">.</b>
        </span>

        <span className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* MENU DINAMIS */}
      <div className="mt-10">
        <ul className="space-y-3">

          {menus.map((menu, index) => (
            <li key={index}>
              <div className="flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:text-hijau hover:font-extrabold">
                <FaHome className="mr-4 text-xl" />
                {menu}
              </div>
            </li>
          ))}

        </ul>
      </div>

      {/* FOOTER */}
      <div className="mt-auto">

        <div className="mb-10 flex items-center rounded-md bg-hijau px-4 py-2 shadow-lg">

          <div className="text-sm text-white">
            <span>Please organize your menus through button below!</span>

            {/* 🟢 BUTTON ADD MENU SUDAH AKTIF */}
            <div
              onClick={handleAddMenu}
              className="mt-3 flex cursor-pointer items-center justify-center space-x-2 rounded-md bg-white p-2 hover:bg-gray-100"
            >
              <FaPlus className="text-gray-600" />
              <span className="text-gray-600">Add Menus</span>
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