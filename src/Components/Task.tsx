import { useDispatch } from "react-redux";
import { toggleStatus, eraseTaskFromList } from "../Redux/TaskSlice";
import { Checkbox, Box, styled } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Task } from "../interfaceTypes";

const strikethrough = styled(Box)({
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

const textDesign = styled(Box)({
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

  const isCompleteByIndex = () => {
    return task.isComplete;
  };

  const deleteTask = () => {
    dispatch(eraseTaskFromList(task.id));
  };

  const completeTask = () => {
    dispatch(toggleStatus(task.id));
  };

  return (
    <ListDesign>
      <Box component={isCompleteByIndex() ? strikethrough : textDesign}>
        {task.taskText}
      </Box>

      <CheckBoxDesign>
        <Checkbox checked={isCompleteByIndex()} onChange={completeTask} />
      </CheckBoxDesign>

      <DeleteButtonDesign>
        <Delete onClick={deleteTask} />
      </DeleteButtonDesign>
    </ListDesign>
  );
};
export default TaskItem;
