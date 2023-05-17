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
    <div style={{ display: "flex", marginTop: "5%" }}>
      <div>
        <input
          type="text"
          className="form__input"
          placeholder="Insert your task here:"
          value={task}
          onChange={(e) => textHandle(e.target.value)}
        />
        <label className="form__label">Task</label>
      </div>
      <input className="button" type="submit" onClick={addTask} />
    </div>
  );
};
export default AddTodo;
