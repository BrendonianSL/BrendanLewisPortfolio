import styles from './Project.module.css';
import { Link } from 'react-router-dom';

export default function Project({ name, type, link, image }) {
    return (
        <Link className={styles['project'] + ' animate'} style={{transitionDelay: '100ms'}} to={link}>
            <figure className={styles['project-image-container']}>
                <img decoding='sync' loading='eager' className={styles['project-image']} src={`./src/assets/images/${image}`} />
                <img className={styles['arrow']} src='./src/assets/icons/arrow.svg' />
            </figure>
            <div className={styles['project-text-container']}>
                <p>{type}</p>
                <h4>{name}</h4>
            </div>
        </Link>
    )
}