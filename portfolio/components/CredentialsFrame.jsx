import styles from './CredentialsFrame.module.css';

export default function CredentialsFrame({ title, source, date, description = [] }) {
    console.log(description);
    return (
        <div className={styles['credentials']}>
            <div className={styles['credentials-details']}>
                <img className={styles['icon']}src='./src/assets/icons/education.png' />
                <p>{source}</p>
            </div>
            <div className={styles['credentials-text-container']}>
                <div className={styles['credentials-info']}>
                    <h3>{title}</h3>
                    <p>{date}</p>
                </div>
                <ul>
                    {description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}