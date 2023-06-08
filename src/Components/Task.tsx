import { Checkbox, Box, styled, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Task } from "../interfaceTypes";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";

const Strikethrough = styled(Box)({
  textDecoration: "line-through",
  color: "#c5c5c5",
  display: "flex",
  marginLeft: "10px",
  wordBreak: "break-all",
  marginTop: "auto",
  marginBottom: "auto",
});

const ListDesign = styled(Box)({
  backgroundColor: "#b4e9f7",
  height: "60px",
  display: "flex",
  marginTop: "20px",
  fontSize: "30px",
  overflow: "auto",
});

const CheckBoxDesign = styled(Box)({
  marginLeft: "auto",
  width: "60px",
  marginTop: "auto",
  marginBottom: "auto",
});

const DeleteButtonDesign = styled(Box)({
  width: "60px",
  marginTop: "auto",
  marginBottom: "auto",
  color: "rgb(255, 0, 0)",
});

const TextDesign = styled(Box)({
  display: "flex",
  marginLeft: "10px",
  wordBreak: "break-all",
  marginTop: "auto",
  marginBottom: "auto",
});

interface fetchingData {
  task: Task;
  fetchData: any;
}

const TaskItem: React.FC<fetchingData> = ({ task, fetchData }) => {
  const [SHOULDRefetch, setSHOULDRefetch] = useState(true);

  useEffect(() => {
    fetchData();
  }, [SHOULDRefetch]);

  const MUTATION_DELETE_TASK = gql`
    mutation DeleteTask($id: ID) {
      deleteTask(id: $id)
    }
  `;

  const MUTATION_TOGGLE_COMPLETE_TASK = gql`
    mutation ToggleCompleteTask($id: ID, $isComplete: Boolean) {
      toggleCompleteTask(id: $id, isComplete: $isComplete)
    }
  `;

  const [taskDelete] = useMutation(MUTATION_DELETE_TASK, {
    variables: { id: task.id },
  });

  const [taskToggleComplete] = useMutation(MUTATION_TOGGLE_COMPLETE_TASK, {
    variables: { id: task.id, isComplete: !task.isComplete },
  });

  const deleteTask = async () => {
    try {
      taskDelete();
      setSHOULDRefetch(!SHOULDRefetch);
      alertify.message("task was successfully deleted!");
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const completeTask = async () => {
    try {
      taskToggleComplete();
      setSHOULDRefetch(!SHOULDRefetch);
    } catch (error) {
      console.error("Status error:", error);
    }
  };

  return (
    <ListDesign>
      <Box component={task.isComplete ? Strikethrough : TextDesign}>
        {task.text}
      </Box>

      <CheckBoxDesign>
        <Checkbox checked={task.isComplete} onChange={completeTask} />
      </CheckBoxDesign>

      <DeleteButtonDesign>
        <IconButton onClick={deleteTask} sx={{ color: "red" }}>
          <Delete />
        </IconButton>
      </DeleteButtonDesign>
    </ListDesign>
  );
};
export default TaskItem;
