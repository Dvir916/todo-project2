import { useDispatch } from "react-redux/es/exports";
import "../App.css";
import { insertTaskList } from "../Redux/Tasks";
import { useState } from "react";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const textHandle = (value: string) => {
    setTask(value);
  };

  const addTask = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(insertTaskList(task));
    setTask("");
  };

  return (
    <div>
      <input
        className="text-area"
        type="text"
        value={task}
        onChange={(e) => textHandle(e.target.value)}
        placeholder="Insert your task here:"
      />
      <input className="button" type="submit" onClick={addTask} />
    </div>
  );
};
export default AddTodo;
