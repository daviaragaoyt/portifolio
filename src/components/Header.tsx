import React from 'react';
const navLinks = ['HOME', 'PROJETOS', 'TECNOLOGIAS',];
const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        backgroundColor: '#121212',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
    },
    logoImg: {
        height: '40px',
    },
    logoText: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#efefef',
        marginLeft: '10px',
    },
    nav: {
        display: 'flex',
        gap: '20px',
    },
    navLink: {
        color: '#efefef',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
    },
    buttons: {
        display: 'flex',
        gap: '10px',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, color 0.3s ease',
    },
    signupButton: {
        backgroundColor: 'transparent',
        color: '#8bff8b',
        border: '2px solid #8bff8b',
    },
    loginButton: {
        backgroundColor: '#8bff8b',
        color: '#121212',
        border: '2px solid #8bff8b',
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