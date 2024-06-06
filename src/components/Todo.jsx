import React from 'react'

const Todo = ({todo,index,tododelete}) => {
  return (
    <div className="todo">
        <div>{todo}</div>
        <div className='buttons'>
        <input type="checkbox" />
        <button onClick={()=>tododelete(index)}>Cancel</button>
        </div>
    </div>
  )
}

export default Todo
