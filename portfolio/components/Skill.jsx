import styles from './Skill.module.css';

export default function Skill({ name, type }) {
    return (
        <div className={styles['skill-container']}>
            <img className={styles['skill-icon']} src='./src/assets/icons/skill.png' alt='Icon Representing Listed Skills' />
            <div className={styles['skill-text-container']}>
                <h3>{name}</h3>
                <p>{type}</p>
            </div>
        </div>
    )
}