import styles from './ProjectFrame.module.css';

export default function ProjectFrame() {
    return (
        <div className={styles['project-frame']}>
            <div className={styles['project-image-container']}>
                <img className={styles['project-image']} src={'../src/assets/images/Image.png'} />
            </div>
            <div className={styles['project-text-container']}>
                <p className={styles['project-type']}>Full Stack Web Development</p>
                <p className={styles['project-name']}>BreadBox</p>
            </div>
        </div>
    )
}