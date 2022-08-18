import { useContext } from 'react';
import { TasksContext } from '../contexts/TasksContext';

import { PlusCircle } from 'phosphor-react';
import styles from './Insert.module.css';

export function Insert() {
      
    const {newTaksText, handleCreatNewTask, handleNewTaskChange} = useContext(TasksContext);
    
    return(
        <div className={styles.container}>
            <input type="text" placeholder='Insira uma nova tarefa' name='taskText' onChange={handleNewTaskChange} value={newTaksText.content}/>
            <button onClick={handleCreatNewTask}>Criar <span><PlusCircle size={16} /></span></button>
        </div>
    )
}