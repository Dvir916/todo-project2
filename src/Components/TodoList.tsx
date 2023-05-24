import Task from "./Task";
import "../App.css";
import React from "react";
import useFetch from "../API/useFetch";

const apiUrl = `http://localhost:4000/data/all`;
const TodoList = () => {
  const { data, loading, error } = useFetch(apiUrl);

  if (loading) {
    return <div>loading...</div>;
  }
  const dataArray = JSON.parse(data.toString());

  return (
    <div className="eityperc">
      {dataArray.map(
        (
          item: { text: string; id: string; isComplete: boolean },
          index: React.Key
        ) => (
          <Task
            key={index}
            text={item.text}
            id={item.id}
            complate={item.isComplete}
          />
        )
      )}
    </div>
  );
};
export default TodoList;
