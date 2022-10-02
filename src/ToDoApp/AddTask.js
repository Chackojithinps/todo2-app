import React, { useState } from 'react'

const AddTask = ({addItems}) => {
    const [value,setValue]=useState('')
   
    const addChange=()=>{
       addItems(value)
       setValue("")
    
    }
  return (
    <>
      <div className='add-container'>
        <input type="text" 
        value={value}
        onChange={(e)=>{setValue(e.target.value)}}
         placeholder='Add items to the list' className="input"></input>
        <button onClick={addChange} className='add-btn'>Add</button> 

      </div>
      
    </>
  )
}

export default AddTask
