import styles from './Header.module.css';
import { NavLink, Link } from 'react-router';
import { useState, useEffect } from 'react';

export default function Header() {

    //Adds Menu Items Or Changes When Needed
    const menuOptions = ['Home', 'Projects', 'Experience', 'About'];

    //Creates A UseState For The Menu
    const [isOpen, setIsOpen] = useState(false);

    //Creates A Function That Toggles The Menu On And Off
    function toggleMenu() {
        console.log
        //Toggles The IsOpen State
        setIsOpen(!isOpen);
    }

    // Automatically Close Menu on Resize to Desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false); // Close menu when resizing to desktop
            }
        };

        window.addEventListener('resize', handleResize); // Listen for window resize
        return () => window.removeEventListener('resize', handleResize); // Cleanup
    }, []); // Runs only once when the component mounts

    return (
        <header className={styles['header']}>
            <div className={styles['header-container']}>
                <p style={{fontFamily: 'Gabarito', fontSize: '18px'}}>Brendan Lewis</p>
                <nav>
                    <ul>
                        {menuOptions.map((item, index) => (
                            <li className={'navlink'} key={index}><NavLink to={`/${item.toLowerCase()}`}>{item}</NavLink></li>
                        ))}
                    </ul>
                </nav>
                <img onClick={toggleMenu} src='./src/assets/icons/menu.svg' alt='Menu Icon' />
                <div style={{maxHeight: isOpen ? '250px' : '0px'}} className={styles['mobileMenu']}>
                    <div>
                        {menuOptions.map((item, index) => (
                            <NavLink onClick={toggleMenu} key={index} to={`/${item.toLowerCase()}`}>{item}</NavLink>
                        ))
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}