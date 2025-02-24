import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import OrderList from "./pages/OrderList";
import UserList from "./pages/UserList";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <AdminLayout>
        <Routes>
          <Route path="/orders" element={<OrderList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AdminLayout>
    </Router>
  );
}

export default App;
