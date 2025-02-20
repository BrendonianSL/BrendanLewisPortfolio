import styles from './Header.module.css';
import { NavLink, Link } from 'react-router';

export default function Header() {
    return (
        <header className={styles['header']}>
            <div>
                <p>Brendan Lewis</p>
                <nav>
                    <ul>
                    <li><NavLink to='/projects'>Projects</NavLink></li>
                        <li><NavLink to='/experience'>Experience</NavLink></li>
                        <li><NavLink to='/about'>About Me</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}