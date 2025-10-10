import '../src/index.css';

export default function Homepage() {

    //Holds A List Of All Professional Work Experience.
    const workExperience = [
        {
            duration: '2025 - Present',
            position: 'Junior Frontend Developer',
            company: 'Portland Trail Blazers'
        },
        {
            duration: "2025",
            position: "Volunteer Web Developer",
            company: "NYC Auto Museum"
        },
        {
            duration: "2023",
            position: "Freelance Game Developer",
            company: "Benjamin Harrison Presidential Site"
        }
    ];

    const techStack = [
        {
            name: 'React',
            description: 'Frontend framework for web interfaces.'
        },
        {
            name: 'Typescript',
            description: 'Strongly typed language built on Javascript.'
        },
        {
            name: 'Tailwind',
            description: 'Utility-first CSS framework.'
        },
        {
            name: 'Express',
            description: 'Backend server routing using Javascript'
        },
        {
            name: 'PSQL',
            description: 'Structured Query Language for databases.'
        },
        {
            name: 'Node',
            description: 'Javascript runtime environment.'
        }
    ];

    const project = [
        {
            name: 'VCT Masters Toronto 2025 Summative',
            projectType: 'Data Analysis',
            link: 'https://github.com/BrendonianSL/VCToronto_Analytics',
            icon: 'vct'
        },
        {
            name: 'Life Expectancy vs GDP',
            projectType: 'Data Analysis',
            link: 'https://github.com/BrendonianSL/LifeAndGDP',
            icon: 'data'
        },
        {
            name: 'Medical Insurance Analysis',
            projectType: 'Data Analysis',
            link: 'https://github.com/BrendonianSL/MedicalFindings',
            icon: 'data'
        },
        {
            name: 'Threadway',
            projectType: 'Full Stack Development',
            link: 'https://github.com/BrendonianSL/Threadway',
        },
        {
            name: 'Data Analyst Portfolio',
            projectType: 'Freelance Frontend Development',
            link: 'https://ngordonportfolio.com',
            icon: 'dataanalystportfolio'
        },
        {
            name: 'Breadbox',
            projectType: 'Full Stack Development',
            link: 'https://github.com/BrendonianSL/BreadBox',
        },
        {
            name: 'Breaddit',
            projectType: 'Frontend Development',
            link: 'https://breadditmini.netlify.app',
        },
        {
            name: 'Jammin',
            projectType: 'Frontend Development',
            link: 'https://github.com/BrendonianSL/Jammin-React-Application'
        }
    ]

    const education = [
        {
            name: 'Data Analyst',
            institution: 'Codecademy',
            description: 'Completed the Codecademy Data Analyst Career Path. Developed skills in statistical analysis, visualization, and languages such as Python and SQL.',
            year: '2025',
            icon: 'codecademy.svg'
        },
        {
            name: 'Full Stack Engineer',
            institution: 'Codecademy',
            description: 'Completed the Codecademy Full Stack Engineer Career Path. Developed skills in build scalable web applications using PSQL, Express, React, and Node.',
            year: '2025',
            icon: 'codecademy.svg'
        },
        {
            name: 'B.A. Media Arts & Science',
            institution: 'Indiana University',
            description:'Graduated from Luddy School of Informatics & Computing. Developed skills in web development, UI/UX, and game systems contributing to agile projects with an emphasis on clean code.',
            year: '2023',
            icon: 'indianauniversity.svg'
        },
    ];

    return (
        <main className='flex flex-col gap-40 w-full max-w-[56.25rem]'>
            <section className='flex flex-col gap-8 items-start'>
                <div className='flex flex-col gap-2 items-start'>
                    <img src='brendan.png' />
                    <h1>Hey, I'm Brendan Lewis</h1>
                    <p className='text-(--blackSecondary)'>I'm a Junior Frontend Developer for the Portland Trailblazers. I transform creative, visionary concepts into user-centered masterpieces.</p>
                </div>
                <div className='flex flex-col items-start md:flex-row gap-4'>
                    <a download='BLWD.pdf' href='./BLWD.pdf' className='rounded-lg bg-[#333333] text-white pr-4 pl-4 pt-2 pb-2 font-normal text-sm'>Download Resume</a>
                    <div className='flex gap-2 items-center rounded-lg bg-[#e9b492] text-[#ff6200] pr-4 pl-4 pt-2 pb-2 font-normal text-sm'><div className='bg-[#ff6200] rounded-full w-2 h-2 animate-bounce'></div>No Longer Available</div>
                </div>
                <div className='flex gap-4'>
                    <a href='https://www.behance.net/brendanlewis4/projects'><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.1925 13.8837V11.8775C9.1925 11.7587 9.1925 11.7112 9.3475 11.7112C10.6763 11.7112 11.7563 11.6325 12.2925 11.9487C12.83 12.2637 12.8525 12.6987 12.8613 12.8287C12.87 12.9587 12.8663 13.145 12.6163 13.5987C12.3663 14.0525 11.2475 14.0612 10.44 14.0612H9.37126C9.24001 14.0612 9.1925 14.0137 9.1925 13.8837ZM12.875 15.9862C12.9988 16.1442 13.0872 16.3271 13.1341 16.5222C13.1811 16.7174 13.1855 16.9204 13.1471 17.1175C13.1086 17.3145 13.0283 17.501 12.9115 17.6643C12.7947 17.8275 12.6441 17.9638 12.47 18.0637C12.2143 18.1713 11.9399 18.2278 11.6625 18.23H9.35875C9.24 18.23 9.1925 18.23 9.1925 18.0762V15.7012C9.1925 15.5825 9.1925 15.535 9.3475 15.535H10.8788C11.8288 15.535 12.4225 15.4525 12.875 15.9862Z" fill="#333333"/>
                        <path d="M21.2363 14.8863C21.1726 14.7361 21.0759 14.6021 20.9534 14.4944C20.831 14.3866 20.6858 14.3078 20.5288 14.2638C20.2148 14.178 19.8862 14.1598 19.5647 14.2104C19.2432 14.2611 18.9361 14.3794 18.6637 14.5575C18.3923 14.8318 18.2169 15.1865 18.1638 15.5687C18.1638 15.7025 18.1637 15.7275 18.3225 15.7275H21.285C21.4312 15.7275 21.4313 15.7275 21.4188 15.5438C21.4047 15.314 21.3434 15.0899 21.2363 14.8863ZM21.2363 14.8863C21.1726 14.7361 21.0746 14.6021 20.9522 14.4944C20.8297 14.3866 20.6858 14.3078 20.5288 14.2638C20.2148 14.178 19.8862 14.1598 19.5647 14.2104C19.2432 14.2611 18.9361 14.3794 18.6637 14.5575C18.3923 14.8318 18.2156 15.1865 18.1625 15.5687C18.1625 15.7025 18.1625 15.7275 18.3212 15.7275H21.285C21.4312 15.7275 21.4313 15.7275 21.4188 15.5438C21.4047 15.314 21.3409 15.0899 21.2337 14.8863M22.625 3.125H8C6.70707 3.125 5.46709 3.63861 4.55285 4.55285C3.63861 5.46709 3.125 6.70707 3.125 8V22.625C3.125 23.9179 3.63861 25.1579 4.55285 26.0721C5.46709 26.9864 6.70707 27.5 8 27.5H22.625C23.9179 27.5 25.1579 26.9864 26.0721 26.0721C26.9864 25.1579 27.5 23.9179 27.5 22.625V8C27.5 6.70707 26.9864 5.46709 26.0721 4.55285C25.1579 3.63861 23.9179 3.125 22.625 3.125ZM17.8475 10.8875C17.8475 10.7913 17.8475 10.7537 17.9575 10.7537H21.9062V11.7788C21.9062 11.7788 21.91 11.8512 21.845 11.8512H18.0187C17.8475 11.8512 17.8475 11.8513 17.8475 11.6813V10.8875ZM14.1912 19.8462C12.6912 20.6625 10.17 20.3338 7.18375 20.3338V10.23H11.9488C13.1675 10.23 14.6175 10.535 15.0075 11.8263C15.21 12.3902 15.1977 13.009 14.9729 13.5645C14.7481 14.12 14.3265 14.5731 13.7888 14.8375C14.2844 15.0209 14.7172 15.3425 15.0358 15.7642C15.3544 16.186 15.5456 16.6901 15.5866 17.2171C15.6276 17.744 15.5168 18.2717 15.2673 18.7376C15.0178 19.2036 14.6401 19.5883 14.1788 19.8462H14.1912ZM23.2713 16.97H18.3963C18.2625 16.97 18.14 17.0425 18.1638 17.2137C18.31 17.9325 18.6387 18.6887 19.3837 18.7987C19.7771 18.9158 20.1984 18.8978 20.5803 18.7476C20.9623 18.5974 21.283 18.3237 21.4913 17.97C21.4913 17.97 21.5525 17.8963 21.5887 17.8963H23.1737C23.1737 17.8963 23.2713 17.8963 23.2463 17.9813C23.0791 18.4546 22.8317 18.8956 22.515 19.285C22.0914 19.6896 21.5802 19.9912 21.0212 20.1663C20.4621 20.3414 19.8703 20.3853 19.2915 20.2947C18.7127 20.204 18.1627 19.9812 17.684 19.6435C17.2053 19.3058 16.8108 18.8623 16.5313 18.3475C16.3593 18.0042 16.2521 17.6322 16.215 17.25C15.9976 16.2895 16.1638 15.2821 16.6781 14.4422C17.1925 13.6024 18.0144 12.9966 18.9688 12.7538C21.735 12.1563 23.49 14.0575 23.49 16.7387C23.4941 16.7701 23.4909 16.8019 23.4808 16.8319C23.4706 16.8618 23.4537 16.889 23.4313 16.9113C23.409 16.9337 23.3818 16.9506 23.3519 16.9608C23.322 16.9709 23.2901 16.9741 23.2588 16.97H23.2713ZM20.5413 14.2638C20.2276 14.1767 19.8988 14.1588 19.5775 14.2113C19.2562 14.2613 18.9687 14.3225 18.6762 14.5575C18.3837 14.7912 18.2288 15.1862 18.1763 15.5687C18.1763 15.7025 18.1763 15.7275 18.335 15.7275H21.285C21.4312 15.7275 21.4313 15.7275 21.4188 15.5438C21.4047 15.314 21.3434 15.0899 21.2363 14.8863C21.1726 14.7361 21.0759 14.6021 20.9534 14.4944C20.831 14.3866 20.6858 14.3078 20.5288 14.2638H20.5413Z" fill="#333333"/>
                    </svg></a>
                    <a href='https://www.linkedin.com/in/brendanslewis/'><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.75 3.75C24.413 3.75 25.0489 4.01339 25.5178 4.48223C25.9866 4.95107 26.25 5.58696 26.25 6.25V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V6.25C3.75 5.58696 4.01339 4.95107 4.48223 4.48223C4.95107 4.01339 5.58696 3.75 6.25 3.75H23.75ZM23.125 23.125V16.5C23.125 15.4192 22.6957 14.3828 21.9315 13.6185C21.1672 12.8543 20.1308 12.425 19.05 12.425C17.9875 12.425 16.75 13.075 16.15 14.05V12.6625H12.6625V23.125H16.15V16.9625C16.15 16 16.925 15.2125 17.8875 15.2125C18.3516 15.2125 18.7967 15.3969 19.1249 15.7251C19.4531 16.0533 19.6375 16.4984 19.6375 16.9625V23.125H23.125ZM8.6 10.7C9.15695 10.7 9.6911 10.4788 10.0849 10.0849C10.4788 9.6911 10.7 9.15695 10.7 8.6C10.7 7.4375 9.7625 6.4875 8.6 6.4875C8.03973 6.4875 7.50241 6.71007 7.10624 7.10624C6.71007 7.50241 6.4875 8.03973 6.4875 8.6C6.4875 9.7625 7.4375 10.7 8.6 10.7ZM10.3375 23.125V12.6625H6.875V23.125H10.3375Z" fill="#333333"/>
                    </svg></a>
                    <a href='https://github.com/BrendonianSL'><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 2.5C13.3585 2.5 11.733 2.82332 10.2165 3.45151C8.69989 4.07969 7.3219 5.00043 6.16117 6.16117C3.81696 8.50537 2.5 11.6848 2.5 15C2.5 20.525 6.0875 25.2125 11.05 26.875C11.675 26.975 11.875 26.5875 11.875 26.25V24.1375C8.4125 24.8875 7.675 22.4625 7.675 22.4625C7.1 21.0125 6.2875 20.625 6.2875 20.625C5.15 19.85 6.375 19.875 6.375 19.875C7.625 19.9625 8.2875 21.1625 8.2875 21.1625C9.375 23.0625 11.2125 22.5 11.925 22.2C12.0375 21.3875 12.3625 20.8375 12.7125 20.525C9.9375 20.2125 7.025 19.1375 7.025 14.375C7.025 12.9875 7.5 11.875 8.3125 10.9875C8.1875 10.675 7.75 9.375 8.4375 7.6875C8.4375 7.6875 9.4875 7.35 11.875 8.9625C12.8625 8.6875 13.9375 8.55 15 8.55C16.0625 8.55 17.1375 8.6875 18.125 8.9625C20.5125 7.35 21.5625 7.6875 21.5625 7.6875C22.25 9.375 21.8125 10.675 21.6875 10.9875C22.5 11.875 22.975 12.9875 22.975 14.375C22.975 19.15 20.05 20.2 17.2625 20.5125C17.7125 20.9 18.125 21.6625 18.125 22.825V26.25C18.125 26.5875 18.325 26.9875 18.9625 26.875C23.925 25.2 27.5 20.525 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7835 3.45151C18.267 2.82332 16.6415 2.5 15 2.5Z" fill="#333333"/>
                    </svg></a>
                    <a href='mailto:bscottlewis04@gmail.com?subject=Inquiry About Web Development Services'><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.2938 7.10749C25.8338 5.61374 24.3863 4.16624 22.8926 4.70749L4.6363 11.31C3.13755 11.8525 2.9563 13.8975 4.33505 14.6962L10.1626 18.07L15.3663 12.8662C15.6021 12.6385 15.9178 12.5126 16.2456 12.5154C16.5733 12.5182 16.8868 12.6497 17.1186 12.8815C17.3503 13.1132 17.4818 13.4267 17.4846 13.7545C17.4875 14.0822 17.3615 14.398 17.1338 14.6337L11.9301 19.8375L15.3051 25.665C16.1026 27.0437 18.1476 26.8612 18.6901 25.3637L25.2938 7.10749Z" fill="#333333"/>
                    </svg></a>
                </div>
            </section>
            <section className='flex flex-col gap-8 items-start'>
                <h1>About Me</h1>
                <div className=' flex items-center justify-center w-full lg:h-[200px]'>
                    <div className='flex flex-col items-center relative w-[600px] h-full'>
                        <img className='w-[300px] lg:w-auto animate-[float_6s_ease-in-out_infinite] lg:absolute top-0 left-[0%]' src='floridafam.png' />
                        <img className='w-[300px] lg:w-auto animate-[float_3s_ease-in-out_infinite] lg:absolute top-0 left-[20%]' src='floridabrendan.png' />
                        <img className='w-[300px] lg:w-auto animate-[float_5s_ease-in-out_infinite] lg:absolute top-0 left-[35%]' src='graduationparents.png' />
                        <img className='w-[300px] lg:w-auto animate-[float_4s_ease-in-out_infinite] lg:absolute top-0 left-[60%]' src='brendanfrances.png' />
                    </div>
                </div>
                <p className='text-(--blackSecondary)'>
                    I’m Brendan Lewis, a Junior Frontend Developer for the Portland Trail Blazers. As an Indiana University graduate, I have a deep background in Game Development. However, post graduation, 
                    I have since pivoted towards Web Development. 
                    My passion for creating interesting and compelling designs for players has since been translated to creating transformative and user-centered designs. 
                    I thrive on developing my skillset by tackling new projects or learning new languages and frameworks to better market myself for the future.<br></br><br></br>
                    Outside of my profession, I find myself working out at the gym, playing video games (a bit too much), and being around friends and loved ones. I also love peaches.
                </p>
            </section>
            <section className='flex flex-col gap-8'>
                <h1>Projects</h1>
                <div className='w-full'>
                    {
                        project.map((project, index) => {
                            return (
                            <a href={project.link} key={index} className='flex justify-between items-center p-4 rounded-lg lg:hover:cursor-pointer lg:hover:bg-[#E8E8E8]'>
                                <div className='flex items-center justify-start gap-4'>
                                    <img src={project.icon ? `${project.icon}.png` : `${project.name.toLowerCase()}.png`} />
                                    <div>
                                        <h2>{project.name}</h2>
                                        <span className='text-(--blackSecondary) text-[1rem]'>{project.projectType}</span>
                                    </div>
                                </div> 
                                <img src='arrow.png' />
                            </a>
                            )
                        })
                    }
                </div>
            </section>
            <section className='flex flex-col gap-8 items-start'>
                    <h1>Tech Stack</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
                    {
                        techStack.map((tech, index) => {
                            return (
                                <div key={index} className='flex flex-col items-start gap-4 bg-white rounded-lg p-8'>
                                    <img src={`${tech.name.toLowerCase()}.png`} alt={`${tech.name} logo`} />
                                    <div className='flex flex-col gap-2'>
                                        <h2>{tech.name}</h2>
                                        <span className='block text-(--blackSecondary)'>{tech.description}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='w-full'>

                </div>
            </section>
            <section className='flex flex-col gap-8'>
                <h1>Work Experience</h1>
                <div className='flex flex-col items-start gap-8'>
                    {
                        workExperience.map((work, index) => {
                            return (
                                <div key={index} className='flex flex-col lg:flex-row items-start gap-4 justify-between w-full'>
                                    <span className='text-(--blackSecondary)'>{work.duration}</span>
                                    <div className='px-4 py-2 bg-[#E8E8E8] rounded-lg font-semibold'>
                                        {`${work.position} at ${work.company}`}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className='flex flex-col gap-8'>
                <h1>Education</h1>
                <div className='flex flex-col items-start gap-8'>
                    {
                        education.map((edu, index) => {
                            return (
                                <div key={index} className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-16'>
                                    <span>{edu.year}</span>
                                    <div className='flex flex-col gap-2'>
                                        <h2 className=' text-(--blackPrimary)'>{edu.name} from <img className='inline-block w-[24px] h-[24px]' src={`${edu.icon}`} alt={`${edu.name} logo`} /> {edu.institution}</h2>
                                        <div className='text-(--blackSecondary) w-full'>{edu.description}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className='flex flex-col items-center justify-center gap-4'>
                <h1>Hey, Thanks For Visiting!</h1>
                <p className='text-(--blackSecondary)'>Keep being great! Don't forget to check me out!</p>
                <div className='flex gap-4'>
                    <a href='https://www.behance.net/brendanlewis4/projects'><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.1925 13.8837V11.8775C9.1925 11.7587 9.1925 11.7112 9.3475 11.7112C10.6763 11.7112 11.7563 11.6325 12.2925 11.9487C12.83 12.2637 12.8525 12.6987 12.8613 12.8287C12.87 12.9587 12.8663 13.145 12.6163 13.5987C12.3663 14.0525 11.2475 14.0612 10.44 14.0612H9.37126C9.24001 14.0612 9.1925 14.0137 9.1925 13.8837ZM12.875 15.9862C12.9988 16.1442 13.0872 16.3271 13.1341 16.5222C13.1811 16.7174 13.1855 16.9204 13.1471 17.1175C13.1086 17.3145 13.0283 17.501 12.9115 17.6643C12.7947 17.8275 12.6441 17.9638 12.47 18.0637C12.2143 18.1713 11.9399 18.2278 11.6625 18.23H9.35875C9.24 18.23 9.1925 18.23 9.1925 18.0762V15.7012C9.1925 15.5825 9.1925 15.535 9.3475 15.535H10.8788C11.8288 15.535 12.4225 15.4525 12.875 15.9862Z" fill="#333333"/>
                        <path d="M21.2363 14.8863C21.1726 14.7361 21.0759 14.6021 20.9534 14.4944C20.831 14.3866 20.6858 14.3078 20.5288 14.2638C20.2148 14.178 19.8862 14.1598 19.5647 14.2104C19.2432 14.2611 18.9361 14.3794 18.6637 14.5575C18.3923 14.8318 18.2169 15.1865 18.1638 15.5687C18.1638 15.7025 18.1637 15.7275 18.3225 15.7275H21.285C21.4312 15.7275 21.4313 15.7275 21.4188 15.5438C21.4047 15.314 21.3434 15.0899 21.2363 14.8863ZM21.2363 14.8863C21.1726 14.7361 21.0746 14.6021 20.9522 14.4944C20.8297 14.3866 20.6858 14.3078 20.5288 14.2638C20.2148 14.178 19.8862 14.1598 19.5647 14.2104C19.2432 14.2611 18.9361 14.3794 18.6637 14.5575C18.3923 14.8318 18.2156 15.1865 18.1625 15.5687C18.1625 15.7025 18.1625 15.7275 18.3212 15.7275H21.285C21.4312 15.7275 21.4313 15.7275 21.4188 15.5438C21.4047 15.314 21.3409 15.0899 21.2337 14.8863M22.625 3.125H8C6.70707 3.125 5.46709 3.63861 4.55285 4.55285C3.63861 5.46709 3.125 6.70707 3.125 8V22.625C3.125 23.9179 3.63861 25.1579 4.55285 26.0721C5.46709 26.9864 6.70707 27.5 8 27.5H22.625C23.9179 27.5 25.1579 26.9864 26.0721 26.0721C26.9864 25.1579 27.5 23.9179 27.5 22.625V8C27.5 6.70707 26.9864 5.46709 26.0721 4.55285C25.1579 3.63861 23.9179 3.125 22.625 3.125ZM17.8475 10.8875C17.8475 10.7913 17.8475 10.7537 17.9575 10.7537H21.9062V11.7788C21.9062 11.7788 21.91 11.8512 21.845 11.8512H18.0187C17.8475 11.8512 17.8475 11.8513 17.8475 11.6813V10.8875ZM14.1912 19.8462C12.6912 20.6625 10.17 20.3338 7.18375 20.3338V10.23H11.9488C13.1675 10.23 14.6175 10.535 15.0075 11.8263C15.21 12.3902 15.1977 13.009 14.9729 13.5645C14.7481 14.12 14.3265 14.5731 13.7888 14.8375C14.2844 15.0209 14.7172 15.3425 15.0358 15.7642C15.3544 16.186 15.5456 16.6901 15.5866 17.2171C15.6276 17.744 15.5168 18.2717 15.2673 18.7376C15.0178 19.2036 14.6401 19.5883 14.1788 19.8462H14.1912ZM23.2713 16.97H18.3963C18.2625 16.97 18.14 17.0425 18.1638 17.2137C18.31 17.9325 18.6387 18.6887 19.3837 18.7987C19.7771 18.9158 20.1984 18.8978 20.5803 18.7476C20.9623 18.5974 21.283 18.3237 21.4913 17.97C21.4913 17.97 21.5525 17.8963 21.5887 17.8963H23.1737C23.1737 17.8963 23.2713 17.8963 23.2463 17.9813C23.0791 18.4546 22.8317 18.8956 22.515 19.285C22.0914 19.6896 21.5802 19.9912 21.0212 20.1663C20.4621 20.3414 19.8703 20.3853 19.2915 20.2947C18.7127 20.204 18.1627 19.9812 17.684 19.6435C17.2053 19.3058 16.8108 18.8623 16.5313 18.3475C16.3593 18.0042 16.2521 17.6322 16.215 17.25C15.9976 16.2895 16.1638 15.2821 16.6781 14.4422C17.1925 13.6024 18.0144 12.9966 18.9688 12.7538C21.735 12.1563 23.49 14.0575 23.49 16.7387C23.4941 16.7701 23.4909 16.8019 23.4808 16.8319C23.4706 16.8618 23.4537 16.889 23.4313 16.9113C23.409 16.9337 23.3818 16.9506 23.3519 16.9608C23.322 16.9709 23.2901 16.9741 23.2588 16.97H23.2713ZM20.5413 14.2638C20.2276 14.1767 19.8988 14.1588 19.5775 14.2113C19.2562 14.2613 18.9687 14.3225 18.6762 14.5575C18.3837 14.7912 18.2288 15.1862 18.1763 15.5687C18.1763 15.7025 18.1763 15.7275 18.335 15.7275H21.285C21.4312 15.7275 21.4313 15.7275 21.4188 15.5438C21.4047 15.314 21.3434 15.0899 21.2363 14.8863C21.1726 14.7361 21.0759 14.6021 20.9534 14.4944C20.831 14.3866 20.6858 14.3078 20.5288 14.2638H20.5413Z" fill="#333333"/>
                    </svg></a>
                    <a href='https://www.linkedin.com/in/brendanslewis/'><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.75 3.75C24.413 3.75 25.0489 4.01339 25.5178 4.48223C25.9866 4.95107 26.25 5.58696 26.25 6.25V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V6.25C3.75 5.58696 4.01339 4.95107 4.48223 4.48223C4.95107 4.01339 5.58696 3.75 6.25 3.75H23.75ZM23.125 23.125V16.5C23.125 15.4192 22.6957 14.3828 21.9315 13.6185C21.1672 12.8543 20.1308 12.425 19.05 12.425C17.9875 12.425 16.75 13.075 16.15 14.05V12.6625H12.6625V23.125H16.15V16.9625C16.15 16 16.925 15.2125 17.8875 15.2125C18.3516 15.2125 18.7967 15.3969 19.1249 15.7251C19.4531 16.0533 19.6375 16.4984 19.6375 16.9625V23.125H23.125ZM8.6 10.7C9.15695 10.7 9.6911 10.4788 10.0849 10.0849C10.4788 9.6911 10.7 9.15695 10.7 8.6C10.7 7.4375 9.7625 6.4875 8.6 6.4875C8.03973 6.4875 7.50241 6.71007 7.10624 7.10624C6.71007 7.50241 6.4875 8.03973 6.4875 8.6C6.4875 9.7625 7.4375 10.7 8.6 10.7ZM10.3375 23.125V12.6625H6.875V23.125H10.3375Z" fill="#333333"/>
                    </svg></a>
                    <a href='https://github.com/BrendonianSL'><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 2.5C13.3585 2.5 11.733 2.82332 10.2165 3.45151C8.69989 4.07969 7.3219 5.00043 6.16117 6.16117C3.81696 8.50537 2.5 11.6848 2.5 15C2.5 20.525 6.0875 25.2125 11.05 26.875C11.675 26.975 11.875 26.5875 11.875 26.25V24.1375C8.4125 24.8875 7.675 22.4625 7.675 22.4625C7.1 21.0125 6.2875 20.625 6.2875 20.625C5.15 19.85 6.375 19.875 6.375 19.875C7.625 19.9625 8.2875 21.1625 8.2875 21.1625C9.375 23.0625 11.2125 22.5 11.925 22.2C12.0375 21.3875 12.3625 20.8375 12.7125 20.525C9.9375 20.2125 7.025 19.1375 7.025 14.375C7.025 12.9875 7.5 11.875 8.3125 10.9875C8.1875 10.675 7.75 9.375 8.4375 7.6875C8.4375 7.6875 9.4875 7.35 11.875 8.9625C12.8625 8.6875 13.9375 8.55 15 8.55C16.0625 8.55 17.1375 8.6875 18.125 8.9625C20.5125 7.35 21.5625 7.6875 21.5625 7.6875C22.25 9.375 21.8125 10.675 21.6875 10.9875C22.5 11.875 22.975 12.9875 22.975 14.375C22.975 19.15 20.05 20.2 17.2625 20.5125C17.7125 20.9 18.125 21.6625 18.125 22.825V26.25C18.125 26.5875 18.325 26.9875 18.9625 26.875C23.925 25.2 27.5 20.525 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7835 3.45151C18.267 2.82332 16.6415 2.5 15 2.5Z" fill="#333333"/>
                    </svg></a>
                    <a href='mailto:bscottlewis04@gmail.com?subject=Inquiry About Web Development Services'><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.2938 7.10749C25.8338 5.61374 24.3863 4.16624 22.8926 4.70749L4.6363 11.31C3.13755 11.8525 2.9563 13.8975 4.33505 14.6962L10.1626 18.07L15.3663 12.8662C15.6021 12.6385 15.9178 12.5126 16.2456 12.5154C16.5733 12.5182 16.8868 12.6497 17.1186 12.8815C17.3503 13.1132 17.4818 13.4267 17.4846 13.7545C17.4875 14.0822 17.3615 14.398 17.1338 14.6337L11.9301 19.8375L15.3051 25.665C16.1026 27.0437 18.1476 26.8612 18.6901 25.3637L25.2938 7.10749Z" fill="#333333"/>
                    </svg></a>
                </div>
            </section>
        </main>
    )
}
