import React from "react";
import { useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import UserDashboard from "../components/userDashboard";
import OwnerDashboard from "../components/OwnerDashboard";
import DelooveryBoy from "../components/DelooveryBoy";

const Home = () => {
  const { userData } = useSelector((state) => state.user);

  return (
    <div className="min-h-screen w-full bg-[#fff9f6]">
      <Navbar />

      {userData?.role === "user" && <UserDashboard />}
      {userData?.role === "owner" && <OwnerDashboard />}
      {userData?.role === "deliveryBoy" && <DelooveryBoy />}
    </div>
  );
};

export default Home;
