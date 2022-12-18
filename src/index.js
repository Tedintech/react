import React, {usestate} from "react";
import ReactDOM from "react-dom/client";
import TodoList from "./todolist/TodoList";



function App(){
  return <div>
  <TodoList />
  </div>;
}

let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App/>);