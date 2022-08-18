import logoToDo from '../assets/logoToDo.svg';

import styles from './Header.module.css';

export function Header() {
    
    return(
        <header className={styles.header}>
            <div>
                <img src={logoToDo} alt="Logo da página" />
            </div>
        </header>
    )
}
