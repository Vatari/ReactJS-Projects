import { useEffect } from "react";
import authFetch from "../axios/interceptors";

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const res = await authFetch("/react-store-productss");
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;
