import React from 'react'
import Todo from './Todo'

const Todocontainer = ({todos,tododelete}) => {
  return (
    <div className="todo-container">
        {todos.map((todo,index)=>{
            return (<Todo todo={todo} index={index} tododelete={tododelete}/>)
        })}
      </div>
  )
}

export default Todocontainer
