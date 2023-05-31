import { useDispatch } from "react-redux";
import { insertTask } from "../Redux/TaskSline";
import { useState } from "react";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import { Box, Button, TextField } from "@mui/material";
import useFetch from "use-http";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");

  const { get, post, error, loading } = useFetch();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const addTask = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    let lastId: number | undefined;
    if (taskText.length > 0) {
      try {
        post("/data/addTask", { text: taskText });
        lastId = await get("/data/lastID");
      } catch (error) {
        console.error(error);
      }
      if (lastId) {
        dispatch(insertTask({ text: taskText, id: lastId }));
        alertify.success("Task was Inserted successfully!");
        setTaskText("");
      }
    } else {
      alertify.alert("Error:", "the task must contain text!", () => {
        alertify.warning("Please enter your task");
      });
    }
  };

  return (
    <Box sx={{ display: "flex", marginTop: "5%" }}>
      <Box>
        <TextField
          type="text"
          placeholder="Insert your task here:"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          label="Task:"
        />
      </Box>
      <Button onClick={addTask} variant="contained">
        SEND
      </Button>
    </Box>
  );
};
export default AddTodo;
