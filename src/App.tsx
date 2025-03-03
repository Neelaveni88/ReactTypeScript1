import React from "react";
import './App.css'
import TodoForm from './Task1/TODOForm';
import Filter from './Task1/Filter';
import TodoList from './Task1/ToDoList';
import useTodos from './Task1/UseToDos';

const App: React.FC = () => {
  const { addTodo, toggleTodo, deleteTodo, filteredTodos, setFilter } = useTodos();


  return (
    <>
     <h1>Todo List</h1>
      <TodoForm addToDo={addTodo} />
      <Filter setFilter={setFilter} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}

export default App
