import { useDispatch } from "react-redux";
import { toggleStatus, eraseTaskFromList } from "../Redux/TaskSlice";
import { Checkbox, Box, styled, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Task } from "../interfaceTypes";
import { useFetch } from "use-http";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

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

interface TaskProps {
  task: Task;
}

const TaskItem: React.FC<TaskProps> = ({ task }) => {
  const dispatch = useDispatch();
  const { patch, response, del, loading, error } = useFetch<string>("/tasks");

  if (loading) {
    return <Box>loading...</Box>;
  }
  if (error) {
    return <Box>Error: {error.message}</Box>;
  }

  const deleteTask = async () => {
    try {
      await del(`/${task.id}`);
      if (response.ok) {
        dispatch(eraseTaskFromList(task.id));
        alertify.message("task was successfully deleted!");
      } else {
        console.log("Error: ", response.status, response.statusText);
        alertify.error(`task cannot be deleted. try again later`);
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const completeTask = async () => {
    try {
      await patch(`/${task.id}`, {
        complete: !task.isComplete,
      });
      if (response.ok) {
        dispatch(toggleStatus(task.id));
      } else {
        console.log("Error: ", response.status, response.statusText);
        alertify.error(`task cannot be toggled. try again later`);
      }
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
