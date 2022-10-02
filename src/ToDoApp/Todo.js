import React, { useEffect, useState } from 'react'

import './todo.css'
import AddTask from './AddTask'
import ListTask from './ListTask'
const Local_Storage_Key = 'react-app-acciojob-todos';
const Todo = () => {
    const [tasks,setTasks] = useState([
        // {title:"Learn Html"},
        // {title:"Learn Css"},
        // {title:"Learn js"}
    ])
    
   //  useEffect(()=> {
   //    const storedTodos = JSON.parse(localStorage.getItem(Local_Storage_Key));
   //    if (storedTodos) setTasks(storedTodos);
   //  }, []);
    
   //  useEffect(()=> {
   //    if(tasks.length > 0)
   //    localStorage.setItem(Local_Storage_Key, JSON.stringify(tasks));
   //  }, [tasks]);


    useEffect(()=>{
      document.title="you have "+tasks.length+" pending tasks"
   })
   
    const addItems =(title)=>{
        // const newItems=[...tasks,{title}]
        setTasks([...tasks,{title}])
    }
    const removeItems=(index)=>{
       const newItems=[...tasks]
       newItems.splice(index,1) 
       setTasks(newItems)
    }
 
  return (
    <>
      <div className='todo-container'>
         <p className='text'>TODO APP</p>
      <div >
         <AddTask addItems={addItems}/>
      </div>
      <div>
         {
            tasks.map((task,index)=>(
                <ListTask tasks={task} index={index} removeItems={removeItems} />
            ))
         }
      </div>
      <p>------</p>
      </div>
      
    </>
    
  )
}

export default Todo
