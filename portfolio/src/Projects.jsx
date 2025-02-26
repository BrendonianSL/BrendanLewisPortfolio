import styles from './Projects.module.css';
import { useEffect } from 'react';
import Project from '../components/Project';

    //Creates A List Of The Projects To Loop Over
    export const projectList = [
        {
            projectType: 'Full Stack Web Development',
            projectName: 'Breadbox',
            projectLink: 'https://breadbox.onrender.com',
            projectImage: 'Breadbox.webp',
        },
        {
            projectType: 'Front End Web Development',
            projectName: 'RedditMini',
            projectLink: 'https://brendoniansl.github.io/RedditMini/',
            projectImage: 'Programming.webp',
        },
        {
            projectType: 'API Based Programming',
            projectName: 'Jammin',
            projectLink: 'https://github.com/BrendonianSL/Jammin-React-Application',
            projectImage: 'Programming.webp',
        },
        {
            projectType: 'Game Development',
            projectName: 'Gunblade',
            projectLink: 'https://brendonian.itch.io/gunblade',
            projectImage: 'Gunblade.webp',
        },
        {
            projectType: 'Game Development',
            projectName: 'Motus Alchimia',
            projectLink: 'https://banndev.itch.io/motus-alchimia',
            projectImage: 'Motus.webp',
        },
        {
            projectType: 'Game Development',
            projectName: 'Go Fish: Stay Alive',
            projectLink: 'https://vezy.itch.io/gofishstayalive',
            projectImage: 'GoFish.webp',
        },
        {
            projectType: 'Game Development',
            projectName: 'Meow Mayhem',
            projectLink: 'https://brendonian.itch.io/meowmayhem',
            projectImage: 'MeowMayhem.webp',
        },
        {
            projectType: 'C# Programming',
            projectName: 'Street Fighter Database',
            projectLink: 'https://github.com/BrendonianSL/StreetFighterDatabase',
            projectImage: 'Programming.webp',
        }
    ];

export default function Projects() {
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
        <section className={styles['projects'] + ' hidden'}>
            <div className={styles['project-container']}>
                <h1 className={'animate'}><span>Projects</span></h1>
                <div className={styles['project-container-list']}>
                {
                    projectList.map((element, index) => {
                        return (
                            <Project id={index} name={element.projectName} type={element.projectType} link={element.projectLink} image={element.projectImage}/>
                        )
                    })
                }
                </div>
            </div>
        </section>
    )
}