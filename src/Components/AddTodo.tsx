import "../App.css";
import { useState } from "react";
import React from "react";
import { useFetch } from "use-http";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const apiUrl = `http://localhost:4000/data/addTask`;

  const { post, error, loading } = useFetch(apiUrl);

  const insertTask = async (task: object | BodyInit | undefined) => {
    try {
      const response = await post("", task);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const textHandle = (value: string) => {
    setTask(value);
  };

  const addTask = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const taskDB = { text: task };
    taskDB.text.length > 0
      ? insertTask(taskDB)
      : alertify.alert("Error", "Task cannot be empty!", function () {
          alertify.warning("Enter task");
        });
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
      <input
        className="button"
        type="submit"
        placeholder="SEND"
        onClick={addTask}
      />
    </div>
  );
};
export default AddTodo;
