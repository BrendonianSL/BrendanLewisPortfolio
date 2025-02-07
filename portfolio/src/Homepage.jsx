import styles from './Homepage.module.css';
import ButtonCTA from '../components/ButtonCTA';
import ProjectFrame from '../components/ProjectFrame';

export default function Homepage() {
    return (
        <div className={styles['index']}>
            <section className={styles['index-hero']}>
                <div className={styles['index-hero-container']}>
                    <img className={styles['index-hero-image']} src='../src/brendan.jpg' />
                    <div className={styles['index-hero-text']}>
                        <h1>
                            I'm Brendan Lewis, a Web Developer specializing in creating
                            user-friendly and intuitive digital experiences.
                        </h1>
                        <p>
                            Leveraging skills in UI/UX design, my approach enhances design with simplicity and minimalism, allowing user-friendly utilization of web pages.
                        </p>
                    </div>
                    <div className={styles['index-hero-button-container']}>
                        <ButtonCTA text='Get In Touch' invert={false} />
                        <ButtonCTA text='View Work' invert={true} />
                    </div>
                </div>
            </section>
            <section className={styles['index-workflow']}>
                <div className={styles['index-workflow-container']}>
                    <div className={styles['index-workflow-text']}>
                        <h2>I employ <span>web development methodologies</span> using <span>industry leading</span> tools.</h2>
                        <div className={styles['index-workflow-type']}>
                            <h3>UI/UX Research</h3>
                            <p>
                                I analyze user needs and preferences to create a user-friendly and intuitive digital experience.
                                I conduct research into common UI trends as well as employ UX research methodologies to ensure a visually sound design.
                            </p>
                        </div>
                    </div>
                    <img src='../src/assets/images/UX.png' />
                </div>
            </section>
        </div>
    );
}
