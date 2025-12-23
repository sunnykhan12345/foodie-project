import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ForgetPassword from "./pages/ForgetPassword";
import useGetCurrentUser from "../hooks/userGetcurrent.js";
import { useSelector } from "react-redux";
import useGetCity from "../hooks/useGetCity.js";
import Croud from "./components/Croud.jsx";

// const App = () => {
//   useGetCurrentUser();
//   const { userData } = useSelector((state) => state.user);
//   return (
//     <main className="max-padd-container overflow-hidden text-textColor">
//       <Routes>
//         <Route
//           path="/signup"
//           element={!userData ? <Signup /> : <Navigate to={"/"} />}
//         />
//         <Route
//           path="/signin"
//           element={!userData ? <Signin /> : <Navigate to={"/"} />}
//         />
//         <Route
//           path="/forget-password"
//           element={!userData ? <ForgetPassword /> : <Navigate to={"/"} />}
//         />
//         <Route
//           path="/"
//           element={userData ? <Home /> : <Navigate to={"/signin"} />}
//         />
//       </Routes>
//       <Footer />
//     </main>
//   );
// };
const App = () => {
  const { loading } = useGetCurrentUser();
  const { userData } = useSelector((state) => state.user);
  useGetCity();
  if (loading) {
    return <div>Loading...</div>; // spinner or blank screen
  }

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={userData ? <Home /> : <Navigate to="/signin" />}
        />
        <Route
          path="/signin"
          element={!userData ? <Signin /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!userData ? <Signup /> : <Navigate to="/" />}
        />
        <Route path="/crud" element={<Croud />} />
      </Routes>
    </main>
  );
};

export default App;
