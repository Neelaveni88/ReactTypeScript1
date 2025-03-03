import React from "react";
import './App.css'

import Filter from './Task1/Filter';
import useTodos from './Task1/UseToDos';
import TodoForm from "./Task1/TodoForm";
import TodoList from "./Task1/TodoList";

const App: React.FC = () => {
  const { addTodo, toggleTodo, deleteTodo, filteredTodos, setFilter } = useTodos();


  return (
    <>
    <div className="form">
     <h1>Todo List</h1>
      <TodoForm addToDo={addTodo} />
      <Filter setFilter={setFilter} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </>
  )
}

export default App
