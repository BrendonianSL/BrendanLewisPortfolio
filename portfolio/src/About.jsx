import Goal from '../components/Goal';
import styles from './About.module.css';
import Quote from '../components/Quote';
import { useEffect } from 'react';

export default function About() {
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
        <section className={styles['about']}>
            <article className={styles['story-section'] + ' hidden'}>
                <div className={styles['story']}>
                    <h1 className={'animate'}>The <span>Man</span>, The <span>Myth</span>, The <span>Web Developer</span>?</h1>
                    <div className={styles['story-content']+ ' animate'}>
                        <figure>
                            <img src='/brendancapstone.jpg' />
                        </figure>
                        <div className={styles['story-text-container']}>
                            <h2><span>My Journey!</span></h2>
                            <p>
                            Growing up, video games were more than just a hobby—they were my passion. This passion drove me to pursue an education in game development, supported by a full-ride scholarship. However, through courses in web development, UI/UX, and graphic design, I discovered my love for creating digital experiences extended beyond games to media development as a whole.
                            </p>
                            <p>
                                After graduation, I took a leap of faith and began my journey into web development as a self-taught programmer. 
                                Along the way, I relied on countless online resources and communities, knowing I couldn’t have made it this far alone. Today, I combine my creativity and technical skills to craft engaging digital experiences.

                            </p>
                        </div>
                    </div>
                </div>
            </article>
            <article className={styles['goals-section'] + ' hidden'}>
                <div className={styles['goals-container']}>
                    <div className={styles['goals-text-container']}>
                        <h2 className={'animate'}><span>Can't Stop, Won't Stop.</span></h2>
                        <p className='subheading-text animate' style={{transitionDelay: '100ms'}}>
                            Despite my circumstances and knowledge, I make it a point to always be striving towards something and adapting where I can. Here, I outline my goals I want to achieve to better myself as a up and coming web developer!
                        </p>
                    </div>
                    <div className={styles['goals-list'] + ' animate'} style={{transitionDelay: '200ms'}}>
                        <Goal goal={'Learn And Master CSS Animations'} goalStatus={'In Progress'} description={'My knowledge of CSS is strong, but I wish to better understand the animation aspect that css brings to the table.'} />
                        <Goal goal={'Learn Tailwind'} goalStatus={'Pending'} description={'After rounding out my css knowledge, I aim to bring this level of understanding to a new framework.'} />
                        <Goal goal={'Learn TypeScript'} goalStatus={'Pending'} description={'Learning TypeScript will allow me to create more dynamic and interactive web pages as well as catch errors earlier than runtime.'} />
                    </div>
                </div>
            </article>
            <Quote quote={[
                { text: 'I ', highlight: false },
                { text: `don't pity `, highlight: true },
                { text: `any man who does hard work worth doing. I `, highlight: false }, 
                { text: `admire him.`, highlight: true },
            ]} author={'- Theodore Roosevelt, President Of The United States'} />
        </section>
    )
}
