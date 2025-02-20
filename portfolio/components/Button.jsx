import styles from './ButtonCTA.module.css';

export default function Button({ text }) {
    return (
        <button className={styles['secondary-btn']}>
            {text}
        </button>
    )
}