import React, { useCallback, useState, useEffect } from 'react'
import ToDoList from '../toDoList/ToDoList';
import {v4} from "uuid";

const Index = () => {
    const [textInput, setTextInput] = useState('');
    const [toDoList, setToDoList] = useState([]);
    useEffect(()=>{
        if (Array.isArray(toDoList) && toDoList.length){
            localStorage.setItem("TODO_APP", JSON.stringify(toDoList));
        }
    },[toDoList])
    useEffect(() => {
        let storage = localStorage.getItem("TODO_APP");
        if (storage){
            setToDoList(JSON.parse(storage));
        }
    },[]);
    const onSetTextInputChange = useCallback((e) =>{
        setTextInput(e.target.value);
    }, []);

    const onButtonClick = useCallback((e) =>{
        setToDoList([
            { id: v4(), name: textInput, isCompleted: false },
            ...toDoList
        ])
        setTextInput('');
    }, [textInput, toDoList]);

    const onCheckClick = useCallback((id) =>{
        setToDoList((prevState) => prevState.map(
            todo => todo.id === id 
            ? (todo.isCompleted === false ? {...todo, isCompleted: true} : {...todo, isCompleted: false})
            : todo
            ));
    },[]);

    
  return (
    <div>
        <input name="email" value={textInput} onChange={onSetTextInputChange}/>
        <button type = "button" 
            disabled = {!textInput} 
            onClick ={onButtonClick}>Button</button>
        <div>
            <ToDoList toDoList={toDoList} onCheckClick ={onCheckClick}/>
        </div>
    </div>
  )
}

export default Index