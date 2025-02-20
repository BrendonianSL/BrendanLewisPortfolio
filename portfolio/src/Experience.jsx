import ButtonCTA from '../components/ButtonCTA';
import CredentialsFrame from '../components/CredentialsFrame';
import Skill from '../components/Skill';
import Quote from '../components/Quote';
import styles from './Experience.module.css';
export default function Experience() {
    return (
        <section className={styles['experience']}>
            <article className={styles['resume-header']}>
                <div className={styles['resume-header-container']}>
                    <div className={styles['resume-header-text']}>
                        <h1><span>Never Truly Graduated</span></h1>
                        <p className={'subheading-text'}>
                            My education from college may be over, but in life, you never truly stop learning. I’m keen to continue my education in learning industry wide techniques and skills to further myself as a professional and to better contribute to future teams.
                        </p>
                    </div>
                    <ButtonCTA text={'View Resume'} />
                </div>
            </article>
            <article className={styles['education']}>
                <div className={styles['education-container']}>
                    <h2><span>Education And Certifications</span></h2>
                    <CredentialsFrame title={'Bachelors of Media Arts & Science'} source={'Indiana University Indianapolis'} date={'March 2023'} description={['Specialized in digital media production, interactive design, and emerging technologies.', 'Developed a strong foundation in visual storytelling, UX/UI design, and multimedia communication.', 'Collaborated on interdisciplinary projects, enhancing problem-solving and creative thinking skills.']} />
                    <CredentialsFrame title={'Foundational C#'} source={'Microsoft'} date={'March 2023'} description={['Mastered core C# programming concepts, including object-oriented programming and data structures.', 'Gained proficiency in building modular, maintainable, and efficient applications.', 'Applied knowledge to create functional console applications and interactive user experiences.']} />
                    <CredentialsFrame title={'Learn Python 3 Course'} source={'Codecademy'} date={'April 2024'} description={['Acquired fundamental Python programming skills, including variables, loops, functions, and error handling.', 'Emphasized practical problem-solving and algorithmic thinking.', 'Built small-scale projects to solidify understanding of scripting and automation.']} />
                </div>
            </article>
            <article className={styles['skills']}>
                <div className={styles['skills-container']}>
                    <h2><span>Skills</span></h2>
                    <div className={styles['skills-grid']}>
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
            <article className={styles['professional-experience']}>
                <div className={styles['professional-experience-container']}>
                    <h2><span>Professional Experience</span></h2>
                    <CredentialsFrame title={'Front End Web Developer'} source={'Web Development Company'} date={'You Could Be The First!'} description={['What I lack in professional experience, I make up for in adaptability and an unmatched zeal for learning and improvement!']} />
                </div>
            </article>
            <article className={styles['quote']}>
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