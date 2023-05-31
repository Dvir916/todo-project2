import { useDispatch } from "react-redux";
import { toggleStatus, eraseTaskFromList } from "../Redux/TaskSline";
import { Checkbox, Box, styled } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Tasks } from "../interfaceTypes";

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

  const isCompleteByIndex = () => {
    return task.isComplete;
  };

  const deleteTask = () => {
    console.log(task.id);
    dispatch(eraseTaskFromList(task.id));
  };

  const completeTask = () => {
    dispatch(toggleStatus(task.id));
  };

  return (
    <Box component={listDesign}>
      <Box component={isCompleteByIndex() ? strikethrough : textDesign}>
        {task.text}
      </Box>

      <Box component={checkBoxDesign}>
        <Checkbox checked={isCompleteByIndex()} onChange={completeTask} />
      </Box>

      <Box component={deleteButtonDesign}>
        <Delete onClick={deleteTask} />
      </Box>
    </Box>
  );
};
export default TaskItem;
