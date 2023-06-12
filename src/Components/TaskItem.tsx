import { Checkbox, Box, styled, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Task } from "../interfaceTypes";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import { gql, useMutation } from "@apollo/client";
import { useEffect } from "react";

const TextDesign = styled(Box)({
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

interface TaskItemProps {
  task: Task;
  refetchTasks: () => void;
}

const MUTATION_DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id)
  }
`;

const MUTATION_TOGGLE_COMPLETE_TASK = gql`
  mutation ToggleCompleteTask($id: String!, $isComplete: Boolean!) {
    toggleCompleteTask(id: $id, isComplete: $isComplete)
  }
`;

const TaskItem: React.FC<TaskItemProps> = ({ task, refetchTasks }) => {
  const textStyle: React.CSSProperties = task.isComplete
    ? {
        textDecoration: "line-through",
        color: "#c5c5c5",
      }
    : {};

  const [taskDelete, deleteResult] = useMutation<string>(MUTATION_DELETE_TASK, {
    variables: { id: task.id },
  });

  const [taskToggleComplete, completeResult] = useMutation<string>(
    MUTATION_TOGGLE_COMPLETE_TASK,
    {
      variables: { id: task.id, isComplete: !task.isComplete },
    }
  );

  useEffect(() => {
    if (!deleteResult.loading && deleteResult.data) {
      refetchTasks();
      alertify.message("task was successfully deleted!");
    }
  }, [deleteResult.loading]);

  useEffect(() => {
    if (!completeResult.loading && completeResult.data) {
      refetchTasks();
    }
  }, [completeResult.loading]);

  return (
    <ListDesign>
      <TextDesign style={textStyle}>{task.text}</TextDesign>

      <CheckBoxDesign>
        <Checkbox
          checked={task.isComplete}
          onChange={() => taskToggleComplete()}
        />
      </CheckBoxDesign>

      <DeleteButtonDesign>
        <IconButton onClick={() => taskDelete()} sx={{ color: "red" }}>
          <Delete />
        </IconButton>
      </DeleteButtonDesign>
    </ListDesign>
  );
};
export default TaskItem;
