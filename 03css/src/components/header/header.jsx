import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>My Application Header</h1>
            <button className = {styles.btn} >login</button>
        </header>
    );

}
export default Header;
