import React from 'react'
import Button from '../buttons/Button'

const ToDoList = ({toDoList, onCheckClick}) => {
  return ( 
    <div>
        {
            toDoList.map(todo=><Button key={todo.id} index={todo} onCheckClick ={onCheckClick}/>)
        }
    </div>
  )
}

export default ToDoList