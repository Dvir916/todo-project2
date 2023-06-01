import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useFetch from "use-http";
import { insertDataFromDB } from "../Redux/TaskSline";

const DBDataInitializer = () => {
  const dispatch = useDispatch();
  const { get, data, loading, error } = useFetch("/all", {}, []);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const dataDB = await get();
        dispatch(insertDataFromDB(dataDB));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTasks();
  }, [data, loading]);

  // const tasks = useSelector((state: RootState) => state.tasks);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return null;
};
export default DBDataInitializer;
