import { useDispatch } from "react-redux";
import { toggleStatus, eraseTaskFromList } from "../Redux/TaskSline";
import { Checkbox, Box, styled, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Tasks } from "../interfaceTypes";
import { useFetch } from "use-http";

const strikethrough = styled(Box)({
  textDecoration: "line-through",
  color: "#c5c5c5",
  display: "flex",
  marginLeft: "10px",
  wordBreak: "break-all",
  marginTop: "auto",
  marginBottom: "auto",
});

const listDesign = styled(Box)({
  backgroundColor: "#b4e9f7",
  height: "60px",
  display: "flex",
  marginTop: "20px",
  fontSize: "30px",
  overflow: "auto",
});

const checkBoxDesign = styled(Box)({
  marginLeft: "auto",
  width: "60px",
  marginTop: "auto",
  marginBottom: "auto",
});

const deleteButtonDesign = styled(Box)({
  width: "60px",
  marginTop: "auto",
  marginBottom: "auto",
  color: "rgb(255, 0, 0)",
});

const textDesign = styled(Box)({
  display: "flex",
  marginLeft: "10px",
  wordBreak: "break-all",
  marginTop: "auto",
  marginBottom: "auto",
});

interface TaskProps {
  task: Tasks;
}

const TaskItem: React.FC<TaskProps> = ({ task }) => {
  const dispatch = useDispatch();
  const { patch, loading, error, del } = useFetch();

  if (loading) {
    return <Box>loading...</Box>;
  }
  if (error) {
    return <Box>Error: {error.message}</Box>;
  }

  const deleteTask = async () => {
    try {
      await del(`/deleteTask/${task.id}`);
    } catch (error) {
      console.error("Delete error:", error);
    }
    dispatch(eraseTaskFromList(task.id));
  };

  const completeTask = () => {
    try {
      patch(`/setStatus`, {
        complete: !task.isComplete,
        id: task.id,
      });
      dispatch(toggleStatus(task.id));
    } catch (error) {
      console.error("Status error:", error);
    }
  };

  return (
    <Box component={listDesign}>
      <Box component={task.isComplete ? strikethrough : textDesign}>
        {task.text}
      </Box>

      <Box component={checkBoxDesign}>
        <Checkbox checked={task.isComplete} onChange={completeTask} />
      </Box>

      <Box component={deleteButtonDesign}>
        <IconButton onClick={deleteTask} sx={{ color: "red" }}>
          <Delete />
        </IconButton>
      </Box>
    </Box>
  );
};
export default TaskItem;
