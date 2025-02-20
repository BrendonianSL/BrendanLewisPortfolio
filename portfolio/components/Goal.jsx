import styles from './Goal.module.css';

export default function Goal({ goal, goalStatus, description }) {

    //Sets A Object With The Possible Outcomes For The Goal Status
    const iconColor = {
        'In Progress': 'var(--cta-color)',
        'Completed': 'green',
        'Pending': 'gray',
    }
    return (
        <div className={styles['goal']}>
            <div className={styles['goal-icon']} style={{ backgroundColor: iconColor[goalStatus]}}></div>
            <div className={styles['goal-text-container']}>
                <h3>{goal}</h3>
                <p style={{ color: iconColor[goalStatus], fontWeight: '500'}}>{goalStatus}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}