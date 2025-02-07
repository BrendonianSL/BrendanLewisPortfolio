import styles from './ButtonCTA.module.css';

export default function ButtonCTA({ text, invert }) {
    return (
        <button id={styles['cta-button']} style={{backgroundColor: invert ? 'transparent' : '#1A1A1A', border: invert ? '1px solid #1A1A1A' : 'none', color: invert ? '#1A1A1A' : '#F7F7F7'}}>
            {text}
        </button>
    )
}