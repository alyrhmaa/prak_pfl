import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import ErrorPage from "./components/ErrorPage"; // ⬅️ TAMBAH

function App() {
  return (
    <div className="flex min-h-screen bg-latar">
      <Sidebar />
      <div className="flex-1 p-4">
        <Header />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />

          {/* 🔥 ERROR ROUTES */}
          <Route
            path="/error400"
            element={
              <ErrorPage
                code={400}
                description="Bad Request"
                image="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
              />
            }
          />
          <Route
            path="/error401"
            element={
              <ErrorPage
                code={401}
                description="Unauthorized"
                image="https://cdn-icons-png.flaticon.com/512/1828/1828479.png"
              />
            }
          />
          <Route
            path="/error403"
            element={
              <ErrorPage
                code={403}
                description="Forbidden"
                image="https://cdn-icons-png.flaticon.com/512/564/564619.png"
              />
            }
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
