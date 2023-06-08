import { useDispatch } from "react-redux";
import { insertTask } from "../Redux/TaskSlice";
import { useEffect, useState } from "react";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import { Box, Button, TextField } from "@mui/material";
import { gql, useMutation, useQuery } from "@apollo/client";

interface fetchingData {
  fetchData: any;
}

const AddTodo: React.FC<fetchingData> = ({ fetchData }) => {
  const MUTATION_INSERT_TASK = gql`
    mutation CreateTask($text: String) {
      createTask(text: $text) {
        id
        text
        isComplete
      }
    }
  `;

  const QUERY_LAST_ID = gql`
    query LastId {
      lastId
    }
  `;

  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");
  const [SHOULDRefetch, setSHOULDRefetch] = useState(true);
  const [insertNewTask, { data: insertTaskData }] = useMutation(
    MUTATION_INSERT_TASK,
    {
      variables: { text: taskText },
    }
  );
  const { data: lastIdData, refetch } = useQuery(QUERY_LAST_ID);

  useEffect(() => {
    fetchData();
  }, [SHOULDRefetch]);

  const addTask = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    let lastId: number | undefined;
    if (taskText) {
      try {
        insertNewTask();
        setSHOULDRefetch(!SHOULDRefetch);
        lastId = lastIdData + 1;
        refetch();
      } catch (error) {
        console.error(error);
      }
      if (lastId !== undefined) {
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

  if (insertTaskData) {
    console.log(insertTaskData);
  }

  return (
    <Box sx={{ display: "flex", marginTop: "5%" }}>
      <Box>
        <TextField
          type="text"
          placeholder="Insert your task here:"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          label="Task"
        />
      </Box>
      <Button onClick={addTask} variant="contained">
        SEND
      </Button>
    </Box>
  );
};
export default AddTodo;
