import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles['footer']}>
            <div className={styles['footer-container']}>
                <div className={styles['content']}>
                    <div>
                        <p style={{fontFamily: 'Gabarito', fontSize: '18px'}}>Brendan Lewis</p>
                        <p>Brendan Lewis is a Front End Web Developer seeking Web, Software, And QA Opportunities.</p>
                    </div>
                    <div className={styles['socials-container']}>
                        <Link to='https://www.linkedin.com/in/brendanslewis/'>
                            <img src='./src/assets/icons/linkedin.svg' />
                        </Link>
                        <Link to='https://github.com/BrendonianSL'>
                            <img src='./src/assets/icons/github.svg' />
                        </Link>
                        <Link to='https://www.behance.net/brendanlewis4/projects'>
                            <img src='./src/assets/icons/behance.svg' />
                        </Link>
                        <Link to='mailto:bscottlewis04@gmail.com'>
                            <img src='./src/assets/icons/email.svg' />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}