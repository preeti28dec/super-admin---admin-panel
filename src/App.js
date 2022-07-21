import { Routes, Route } from "react-router-dom"
import Dashboard from "./components/pages/dashboard"
import AdminDashboard from "./components/admin_panel/AdminDashboard"
import SuperAdminDashboard from "./components/super_admin_panel/SuperAdminDashboard"
import Login from "./components/login-signup/login"
import Signup from "./components/login-signup/signup"
import UserList from "./components/pages/UserList"
import PasswordDetil from "./components/super_admin_panel/passwordDetil"
import UserDetail from "./components/super_admin_panel/userDetail"

function App() {

  // const item = localStorage.getItem("userRegister");
  // const parsedItem = JSON.parse(item);

  const isAdmin = false;
  const authenticated = false;

  return (
    <div className="">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {authenticated ? <>
          {isAdmin ? <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-list" element={<UserList />} />

          </> :
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/user-list" element={<UserList />} />
              <Route path="/password-detail" element={<PasswordDetil />} />
              <Route path="/user-detail" element={<UserDetail />} /></>
          }

        </> : null}
      </Routes>
    </div>
  )
}

export default App