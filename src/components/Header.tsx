import React from 'react';
const navLinks = ['HOME', 'PROJETOS', 'TECNOLOGIAS'];
const styles = {
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 40px',
        backgroundColor: '#121212',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    },
    nav: {
        display: 'flex',
        gap: '40px',
    },
    navLink: {
        color: '#efefef',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
    },
};
const Header: React.FC = () => {
    return (
        <header style={styles.header}>
            <nav style={styles.nav}>
                {navLinks.map((link, index) => (
                    <a key={index} href={`#${link.toLowerCase()}`} style={styles.navLink}>
                        {link}
                    </a>
                ))}
            </nav>
        </header>
    );
};
export default Header;