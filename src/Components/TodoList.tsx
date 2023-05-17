import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import Task from "./Task";
import "../App.css";

const RenderTodos = () => {
  const taskList = useSelector((state: RootState) => state.tasks.TaskList);

  return (
    <div className="eityperc">
      {taskList.map((item) => (
        <Task text={item} />
      ))}
    </div>
  );
};
export default RenderTodos;
