import axios from "axios";
import { useEffect, useState } from "react";
// import { serverUrl } from "../App";
import { serverUrl } from "../src/serverUrl";
import { useDispatch } from "react-redux";
import { setUserData } from "../src/redux/userSlice";

function useGetCity() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // optional
  const [error, setError] = useState(null); // optional
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      console.log(position);
    });
  }, []);
}

export default useGetCity;
