import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useFetch from "use-http";
import { insertDataFromDB } from "../Redux/Tasks";

const DBDataInitializer = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(
    "http://localhost:4000/data/all",
    {},
    []
  );

  useEffect(() => {
    const fetchTasks = () => {
      try {
        dispatch(insertDataFromDB(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (data) {
      fetchTasks();
    }
  }, [data, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return null;
};
export default DBDataInitializer;
