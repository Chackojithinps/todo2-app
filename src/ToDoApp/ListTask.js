import React from 'react'

const ListTask = ({tasks,index,removeItems}) => {
  return (
    <>
    <div className='list-container'>
    {tasks.title}
       <button onClick={()=>{removeItems(index)}} className='delete-btn'>Delete</button>
    </div>
     
    </>
  )
}

export default ListTask
