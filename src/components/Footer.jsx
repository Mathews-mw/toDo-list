import logoToDo from '../assets/logoToDo.svg';

import styles from './Footer.module.css'

export function Footer() {
    return(
        <footer>
            <div className={styles.container}>
                <div className={styles.logoFooter}>
                    <img src={logoToDo} alt="Logo do rodapé" />
                </div>
                <div className={styles.textFooter}>
                    <p>
                        By Mathews © - 2022
                    </p>
                </div>
            </div>
        </footer>
    )
}