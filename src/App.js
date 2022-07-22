import { Routes, Route } from "react-router-dom"
import DashboardPage from "./components/pages/dashboard"


function App() {

  // const item = localStorage.getItem("userRegister");
  // const parsedItem = JSON.parse(item);

  // const isAdmin = false;
  // const authenticated = false;

  return (
    <div className="">
     <DashboardPage />
    </div>
  )
}

export default App


// import { lazy, useState } from 'react';
// import {
//   Router,
// } from 'react-router-dom';
// import ProtectedRoutes from '../src/routing/protectiveRouting'; //Authenticated routes
// import PublicRoute from '../src/routing/PublicRoute'; 
// import PrivateRoute from '../src/routing/privateRouting'; 
// import Login from '../src/components/login-signup/login';

// const LoginPage = lazy(() => import('../src/components/login-signup/login'));
// const Register = lazy(() => import('../src/components/login-signup/signup'));


// const App = () => {
//   const [token, setToken] = useState();
//   if(!token) {
//     return <Login setToken={setToken} />
//   }

//   // const LoginValue = JSON.parse(localStorage.getItem("logindata"));
//   // const isAuthenticated = LoginValue(true);
//   return (

//         <Router>
//           <PublicRoute
//             path="/login"
//             isAuthenticated={token}
//           >
//             <LoginPage />
//           </PublicRoute>

//           <PublicRoute
//             path="/register"
//             isAuthenticated={token}
//           >
//             <Register />
//           </PublicRoute>

//           <PrivateRoute
//             path="/"
//             isAuthenticated={token} >
//             <ProtectedRoutes />
//           </PrivateRoute>
       
//         </Router>
//   );
// };

// export default App;