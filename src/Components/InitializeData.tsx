import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useFetch from "use-http";
import { insertDataFromDB } from "../Redux/TaskSlice";
import { Box } from "@mui/material";

const DBDataInitializer = () => {
  const dispatch = useDispatch();
  const { get, data, loading, error } = useFetch("/Tasks", {}, []);

  useEffect(() => {
    const getAllTasks = async () => {
      try {
        const DBdata = await get();
        dispatch(insertDataFromDB(DBdata));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getAllTasks();
  }, [data, loading]);

  if (loading) {
    return <Box>Loading...</Box>;
  }
  if (error) {
    return <Box>Error: {error.message}</Box>;
  }

  return null;
};
export default DBDataInitializer;
