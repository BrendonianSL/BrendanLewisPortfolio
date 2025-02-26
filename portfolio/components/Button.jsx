import styles from './ButtonCTA.module.css';
import { Link } from 'react-router-dom';

export default function Button({ text, link }) {
    return (
        <Link to={link}>
            <button className={styles['secondary-btn']}>
                {text}
            </button>
        </Link>
    )
}