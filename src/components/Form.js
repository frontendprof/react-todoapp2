
import React from 'react';






const Form=({setInputText})=> {



    const inputSubmitHandler=e=>{
        e.preventDefault();
    }
    
    const inputTextHandler=(e)=>{
    
        console.log(e.target.value);
        setInputText(e.target.value);
        
    }




    return (
        <form onSubmit={inputSubmitHandler}>
            <input 
            type="text" 
            className="todo-input"
            onChange={inputTextHandler}
            />
            <button type="submit" className="todo-button">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
            
        </form>
    );
}

export default Form;
