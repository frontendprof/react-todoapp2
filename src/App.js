import React,{useState} from 'react';
import './App.css';

import Form from "./components/Form";
import TodoList from "./components//TodoList";

function App() {

  const[inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filteredTodos,setFilteredTodos]=useState([]);


  const filterHandler=()=>{

    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo=>todo.complete))
        break;

      case "uncompleted":
      setFilteredTodos(todos.filter(todo=>todo.complete===false))
      break;
      
      default:
        setFilteredTodos(todos);
        break;


    }
  }


  return (
    <div className="App">

      <header>
        <h1>My TodoList</h1>        
      </header>

      <Form 
      todos={todos}
      setTodos={setTodos}
      inputText={inputText}
      setInputText={setInputText}
      setStatus={setStatus}
      />

      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
