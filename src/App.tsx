import React from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import RenderTodos from "./Components/TodoList";

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <AddTodo />
          <RenderTodos />
        </header>
      </div>
    </div>
  );
}

export default App;
