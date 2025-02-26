import ButtonCTA from '../components/ButtonCTA';
import CredentialsFrame from '../components/CredentialsFrame';
import Skill from '../components/Skill';
import Quote from '../components/Quote';
import styles from './Experience.module.css';
import { useEffect } from 'react';
export default function Experience() {
    useEffect(() => {
        //Creates An Intersection Observer.
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    });
    return (
        <section className={styles['experience']}>
            <article className={styles['resume-header'] + ' hidden'}>
                <div className={styles['resume-header-container']}>
                    <div className={styles['resume-header-text']}>
                        <h1 className={'animate'}><span>Never Truly Graduated</span></h1>
                        <p className={'subheading-text' + ' animate'} style={{transitionDelay: '100ms'}}>
                            My education from college may be over, but in life, you never truly stop learning. I’m keen to continue my education in learning industry wide techniques and skills to further myself as a professional and to better contribute to future teams.
                        </p>
                    </div>
                    <div className={'animate'} style={{transitionDelay: '200ms'}}>
                        <ButtonCTA text={'View Resume'} link={'https://drive.google.com/file/d/17qZpWx7edGK1ID70q8XJtb9ErlcujrNY/view?usp=sharing'}/>
                    </div>
                </div>
            </article>
            <article className={styles['education'] + ' hidden'}>
                <div className={styles['education-container']}>
                    <h2 className={'animate'}><span>Education And Certifications</span></h2>
                    <CredentialsFrame title={'Bachelors of Media Arts & Science'} source={'Indiana University Indianapolis'} date={'March 2023'} description={['Specialized in digital media production, interactive design, and emerging technologies.', 'Developed a strong foundation in visual storytelling, UX/UI design, and multimedia communication.', 'Collaborated on interdisciplinary projects, enhancing problem-solving and creative thinking skills.']} />
                    <CredentialsFrame title={'Foundational C#'} source={'Microsoft'} date={'March 2023'} description={['Mastered core C# programming concepts, including object-oriented programming and data structures.', 'Gained proficiency in building modular, maintainable, and efficient applications.', 'Applied knowledge to create functional console applications and interactive user experiences.']} />
                    <CredentialsFrame title={'Learn Python 3 Course'} source={'Codecademy'} date={'April 2024'} description={['Acquired fundamental Python programming skills, including variables, loops, functions, and error handling.', 'Emphasized practical problem-solving and algorithmic thinking.', 'Built small-scale projects to solidify understanding of scripting and automation.']} />
                </div>
            </article>
            <article className={styles['skills'] + ' hidden'}>
                <div className={styles['skills-container']}>
                    <h2 className={'animate'}><span>Skills</span></h2>
                    <div className={styles['skills-grid'] + ' animate'} style={{transitionDelay: '100ms'}}>
                        <Skill name={'HTML'} type={'Programming Language'} />
                        <Skill name={'CSS'} type={'Programming Language'} />
                        <Skill name={'JavaScript'} type={'Programming Language'} />
                        <Skill name={'React'} type={'JavaScript Library'} />
                        <Skill name={'Redux'} type={'JavaScript Library'} />
                        <Skill name={'Express.JS'} type={'JavaScript Library'} />
                        <Skill name={'PostgreSQL'} type={'Database Programming Language'} />
                        <Skill name={'Figma'} type={'UI/UX Design Tool'} />
                    </div>
                </div>
            </article>
            <article className={styles['professional-experience'] + ' hidden'}>
                <div className={styles['professional-experience-container']}>
                    <h2 className={'animate'}><span>Professional Experience</span></h2>
                    <CredentialsFrame title={'Front End Web Developer'} source={'Web Development Company'} date={'You Could Be The First!'} description={['What I lack in professional experience, I make up for in adaptability and an unmatched zeal for learning and improvement!']} />
                </div>
            </article>
            <article className={styles['quote'] + ' hidden'}>
                <div className={styles['quote-container']}>
                    <Quote quote={[
                        {text: 'Careers are a ', highlight: false},
                        {text: 'jungle gym, ', highlight: true},
                        {text: 'not a ', highlight: false},
                        {text: 'ladder.', highlight: true}
                    ]} author={'- Pattie Sellers, Journalist, Multimedia Producer'}/>
                </div>
            </article>
        </section>
    )
}