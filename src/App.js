import React, { useState, useEffect } from 'react';
import './App.css';
// Importing Components
import Form from './components/Form';
import TodoList from "./components/TodoList";

function App() {

  // State
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Run once
  useEffect(() => {
    getLocalTodos();
  }, []);

  // Use Effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // functions
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default: 
        setFilteredTodos(todos);
    }
  }

  // Save to Local Storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  }

  return (
    <div className="app">
      <header>
        <h1>Rob's Todo List</h1>
      </header>
      <Form 
        todos={todos}
        setTodos={setTodos} 
        setInputText={setInputText} 
        inputText={inputText}
        status={status}
        setStatus={setStatus}
        />
      <TodoList
        setTodos={setTodos} 
        todos={todos} 
        filteredTodos={filteredTodos}
        inputText={inputText}
        />
    </div>
  );
}

export default App;