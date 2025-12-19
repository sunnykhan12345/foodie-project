import axios from "axios";
import { useEffect, useState } from "react";
import { serverUrl } from "../App";

function useGetCurrentUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // optional
  const [error, setError] = useState(null); // optional

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(`${serverUrl}/api/user/current`, {
          withCredentials: true, // make sure your backend allows credentials
        });
        setUser(result.data); // store user data in state
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
}

export default useGetCurrentUser;
