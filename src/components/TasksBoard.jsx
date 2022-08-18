import React, { useContext } from 'react'
import { TaskList } from './TaskList';
import { TasksContext } from '../contexts/TasksContext';

import clipBoard from '../assets/clipBoard.svg';
import styles from './TasksBoard.module.css';

export function TasksBoard() {
    
    const {TasksList, setTasksList, setNewTaskText} = useContext(TasksContext);
    
    
    function deleteTask(taskToDelete) {
        const TasksListWithoutDeletedOne = TasksList.filter(task => {
            return task.content !== taskToDelete
        })

        setTasksList(TasksListWithoutDeletedOne);
    }

    function completeTask(valorId, status){
        
        setTasksList((prevState) => {
            return(
                [...prevState.map(item => {
                    if (item.id == valorId) {
                        if(item.isComplete == false) {
                            return {...item, isComplete: true }
                        }else {
                            return {...item, isComplete: false } 
                        }
                    }
                    return item
                })]
            )
        })
    }

    const countTasksComplete = TasksList.reduce((total, elemento) => {
        if(elemento.isComplete === true) {
            return total += elemento.isComplete
        }else {return total}
    }, 0);
    
    const RealTaskList = TasksList.map(el => {
        return el
    })

    return(
        <div className={styles.container}>
            <header className={styles.headerContent}>
                <div>
                    <h4 className={styles.blueText}>Tarefas criadas</h4>
                    <span>{TasksList.length}</span>
                </div>
                <div>
                    <h4 className={styles.purpleText}>Concluídas</h4>
                    <span>{TasksList.length} de {countTasksComplete}</span>
                </div>
            </header>
            <main>
                {RealTaskList.length ? (
                  <div className={styles.listContainer}>
                        {TasksList.map(task => {
                            return(
                                <TaskList
                                    key={task.id}
                                    content={task.content}
                                    puplishAt={task.puplishedAt}
                                    isComplete={task.isComplete}
                                    id={task.id}
                                    deleteTask={deleteTask}
                                    completeTask={completeTask}
                                />
                            )
                        })}
                    </div>
                ) : (
                    <div className={styles.empty}>
                        <img src={clipBoard} alt="Clipboard" />
                        <p><strong>Você ainda não tem tarefas cadastrada</strong></p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>       
                )}
            </main>
        </div>
    )
}