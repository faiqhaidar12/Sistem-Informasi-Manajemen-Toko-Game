import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import AkunGame from "./pages/AkunGame";
import ProdukGame from "./pages/ProdukGame";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddProduk from "./pages/AddProduk";
import EditProduk from "./pages/EditProduk";
import AddAkun from "./pages/AddAkun";
import EditAkun from "./pages/EditAkun";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/akun" element={<AkunGame />} />
          <Route path="/akun/add" element={<AddAkun />} />
          <Route path="/akun/edit/:id" element={<EditAkun />} />
          <Route path="/produk" element={<ProdukGame />} />
          <Route path="/produk/add" element={<AddProduk />} />
          <Route path="/produk/edit/:id" element={<EditProduk />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
