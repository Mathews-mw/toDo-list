import { format, formatDistanceToNow,  } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Trash } from 'phosphor-react';
import styles from './TaskList.module.css'

export function TaskList({content, deleteTask, puplishAt, completeTask, id, isComplete }) {
    
    const date = new Date('2022-08-10 10:15:00');
    const puplishedDateFormatted = format(puplishAt, "d 'de' LLL 'às' HH:mm'hrs'", {locale: ptBR});
    const relativeDateToNow = formatDistanceToNow(puplishAt, {
        locale: ptBR,
        addSufix: true
    });

    function selectTaskToDelete() {
        deleteTask(content)
    }

    function selectTaskToComplete() {
        completeTask(id, isComplete)
    }
    
    return(
        <div className={styles.card}>
            <label className={styles.container}>
                <input type="checkbox" className='check-mark' onClick={selectTaskToComplete}/>
                <span className={styles.checkmark}></span>
            </label>
            <div className={styles.content}>
                <p>
                    {content}
                </p>
            </div>
            <div className={styles.trashIcon}>
                <button title='Deletar tarefa' onClick={selectTaskToDelete}><Trash size={24}/></button>   
            </div>
            <div className={styles.puplishedDate}>
                <time title={puplishedDateFormatted} dateTime={puplishAt.toISOString()}>{relativeDateToNow}</time>
            </div>
        </div>
    )
}
