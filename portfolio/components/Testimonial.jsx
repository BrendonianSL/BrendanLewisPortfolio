import styles from './Testimonial.module.css';

export default function Testimonial({ name, description, paragraph, image}) {
    return (
        <div className={styles['testimonial']}>
            <img src={`/${image}`} />
            <div className={styles['text-container']}>
                <div className={styles['container-heading']}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
                <p>{paragraph}</p>
            </div>
        </div>
    )
}