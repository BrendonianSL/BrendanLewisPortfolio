import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles['footer']}>
            <div className={styles['footer-container']}>
                <div>
                    <p>© 2023 Brendan Lewis</p>
                </div>
            </div>
        </footer>
    )
}