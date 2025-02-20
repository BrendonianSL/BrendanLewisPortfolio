import styles from './Homepage.module.css';
import '../src/index.css';
import ButtonCTA from '../components/ButtonCTA';
import ProjectFrame from '../components/ProjectFrame';
import Button from '../components/Button';
import Testimonial from '../components/Testimonial';
import { useEffect } from 'react';

export default function Homepage() {

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
        <main className={styles['homepage']}>
            <section className={styles['hero-section'] + ' hidden'}>
                <div className={styles['hero-section-container']}>
                    <img className={styles['hero-image'] + ' animate'} src='./src/brendan.jpg' />
                    <div className={styles['hero-section-text']}>
                        <h1 className={'animate'} style={{transitionDelay: '200ms'}}>I'm Brendan Lewis, a <span>Web Developer </span>specializing in creating <span>user friendly </span> and <span>intuitive </span> websites for everyone!</h1>
                        <p className={'subheading-text animate'} style={{transitionDelay: '300ms'}}>Drawing from my expertise in UI/UX design and a solid foundation in web development, I craft intuitive, user-centric web pages that deliver seamless and engaging experiences.</p>
                    </div>
                    <div className={styles['hero-button-container'] + ' animate'} style={{transitionDelay: '400ms'}}>
                        <ButtonCTA text={'Get In Touch'} />
                        <Button text={'View Work'} />
                    </div>
                </div>
            </section>
            <section className={styles['featured-work']}>
                <div className={styles['featured-work-container']}>

                </div>
            </section>
            <section className={styles['workflow-section'] + ' hidden'}>
                <div className={styles['workflow-container']}>
                    <div className={styles['workflow-text-container']}>
                        <h2 className={'animate'}><span>Efficient And Productive Workflow</span></h2>
                        <p className={'subheading-text animate'} style={{transitionDelay: '100ms'}}>Winging it might work for a weekend road trip, but in web development? Not so much. Without a solid game plan, things can spiral into a mess of extra work, frustration, and unnecessary headaches—for clients, studios, and, most importantly, me. That’s why I stick to the time-tested, battle-approved three-step process to keep everything smooth, efficient, and (mostly) stress-free.</p>
                    </div>
                    <div className={styles['workflow-process']}>
                        <div className={styles['workflow-process-step'] + ' animate'} style={{transitionDelay: '200ms'}}>
                            <span>01</span>
                            <h3>Research</h3>
                            <p>
                                The research phase is the foundation of any project. 
                                I begin the process by gathering relevant information while understanding the goals the project at hand. 
                                I do research of surrounding websites within the same niche to discover common trends amongst competitors.
                            </p>
                        </div>
                        <div className={styles['workflow-process-step'] + ' animate'} style={{transitionDelay: '300ms'}}>
                            <span>02</span>
                            <h3>UI/UX Design</h3>
                            <p>
                                Design is where I take the ideas from the research page and give them shape. 
                                This phase will include prototypes and wireframes, focusing on aesthetics, usability, and consistency across the website.
                            </p>
                        </div>
                        <div className={styles['workflow-process-step'] + ' animate'} style={{transitionDelay: '400ms'}}>
                            <span>03</span>
                            <h3>Web Design & Development</h3>
                            <p>
                                Development is where the project comes to life through clean and scalable code while following best practices. 
                                This phase involves converting design assets into a function product while finding ways to ensure accessibility and optimize performance. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles['skillset-section'] + ' hidden'}>
                <div className={styles['skillset-section-container']}>
                    <div className={styles['skillset-text-container']}>
                        <h2 className={'animate'}><span>Ever Expanding Skillset</span></h2>
                        <p className={'subheading-text animate'} style={{transitionDelay: '200ms'}}>
                            Tech moves fast. Maybe not as fast as this scroll animation but still! You’re going to need someone who can keep up!
                        </p>
                    </div>
                    <div className={styles['skillset-carousel'] + ' animate'}>
                        <img src='./src/assets/images/scrollnames.png'/>
                        <img src='./src/assets/images/scrollnames.png'/>
                    </div>
                </div>
            </section>
            <section className={styles['about-section'] + ' hidden'}>
                <div className={styles['about-section-container']}>
                    <img src='./src/brendan.jpg' className={styles['about-section-image'] + ' animate'} />
                    <div className={styles['about-section-text']}>
                        <h2 className={'animate'}><span>Breaking Code, Taking Names (Sometimes)</span></h2>
                        <p className={'subheading-text animate'} style={{transitionDelay: '100ms'}}>When I’m not spending time debugging a website that was the result of a missing semicolon, I’m usually diving into new projects, experimenting with design ideas, or indulging in hobbies and activities outside my profession. My journey has been far from boring, but I promise you I won’t bore you with the details. Just take a seat! </p>
                    </div>
                </div>
            </section>
            <section className={styles['testimonials-section'] + ' hidden'}>
                <div className={styles['testimonials-container']}>
                    <div className={styles['testimonials-text-container']}>
                        <h2 className={'animate'}><span>Need More Convincing?</span></h2>
                        <p className={'subheading-text animate'} style={{transitionDelay: '100ms'}}>Thought so, I brought some help just in case!</p>
                    </div>
                    <div className={styles['testimonials-card-container'] + ' animate'}>
                        <Testimonial name={'Brandon Louis'} description={'Not Brendan Lewis'} paragraph={'This guy? Absolute wizard with JavaScript. I once saw him fix a bug so fast, the computer apologized. His code is so clean, I use it as a benchmark for my own… which is weird, because we have exactly the same coding style. Suspicious.'}/>
                        <Testimonial name={'Brendon Lewison'} description={'Definetely Not Brendan Lewis'} paragraph={'This guy? Absolute wizard with JavaScript. I once saw him fix a bug so fast, the computer apologized. His code is so clean, I use it as a benchmark for my own… which is weird, because we have exactly the same coding style. Suspicious.'}/>
                        <Testimonial name={'Branden Louise'} description={'Is This Brendan Lewis?'} paragraph={'This guy? Absolute wizard with JavaScript. I once saw him fix a bug so fast, the computer apologized. His code is so clean, I use it as a benchmark for my own… which is weird, because we have exactly the same coding style. Suspicious.'}/>
                    </div>
                </div>
            </section>
            <section className={styles['cta-section'] + ' hidden'}>
                <div className={styles['cta-section-container'] + ' animate'}>
                    <div className={styles['cta-text-container']}>
                        <h2>You Got Room For <span>One More?</span></h2>
                        <p className={'subheading-text'}>My resume and I are looking for a new home!</p>
                    </div>
                    <ButtonCTA text={'View My Resume'} style={{transitionDelay: '200ms'}}/>
                </div>
            </section>
        </main>
    );
}
