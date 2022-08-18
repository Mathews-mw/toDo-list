import React, { createContext, useState } from "react";
import { taskData } from "../Data/taskData";
import { v4 as uuidv4 } from 'uuid';


export const TasksContext = createContext();

export function TasksContextProvider({ children }) {
    const [newTaksText, setNewTaskText] = useState({id:"", content:"", puplishedAt:"", isComplete: ""});
    const [TasksList, setTasksList] = useState([]);

    
    function handleCreatNewTask() {
        setTasksList([...TasksList, newTaksText]);
        setNewTaskText({content:''});
    }

    function handleNewTaskChange() {
        setNewTaskText({id:uuidv4(), content:event.target.value, puplishedAt: new Date(), isComplete: false}); 
    }
    
    return(
    <TasksContext.Provider value={{newTaksText, setNewTaskText, TasksList, setTasksList, handleCreatNewTask, handleNewTaskChange}}>
        {children}
    </TasksContext.Provider>
    );
}