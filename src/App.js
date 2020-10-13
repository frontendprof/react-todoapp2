import React,{useState,useEffect} from 'react';
import './App.css';

import Form from "./components/Form";
import TodoList from "./components//TodoList";

function App() {

  const[inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filteredTodos,setFilteredTodos]=useState([]);


  useEffect(()=>{
    getLocalTodos()
  },[])

  useEffect(()=>{
    
    const filterHandler=()=>{

      switch(status){
        case "completed":
          setFilteredTodos(todos.filter(todo=>todo.completed))
          break;
  
        case "uncompleted":
        setFilteredTodos(todos.filter(todo=>todo.completed===false))
        break;
        
        default:
          setFilteredTodos(todos);
          break;
  
      }
    }
    filterHandler();
      // Persist in local storage

  const saveLocalTodos=()=>{

    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]))
    }
    else{
      localStorage.setItem("todos",JSON.stringify(todos))
    }

  }
    saveLocalTodos();

  }, [todos,status])




  // Retrieve data from storage
  const getLocalTodos=()=>{

    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]))
    }
    else{
      let localTodos=JSON.parse(localStorage.getItem("todos"))
      setTodos(localTodos)

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

      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
