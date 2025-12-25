import React from 'react';
import ThemeToggle from './ThemeToggle';

const navLinks = ['PROJETOS', 'TECNOLOGIAS'];

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.5rem 2rem',
        backgroundColor: 'var(--header-bg)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 6px -1px var(--shadow-color)',
        position: 'sticky' as const,
        top: 0,
        zIndex: 100,
        borderBottom: '1px solid var(--border-color)',
    },
    container: {
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'var(--text-primary)',
        textDecoration: 'none',
    },
    nav: {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
    },
    navLink: {
        color: 'var(--text-primary)',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '0.9rem',
        letterSpacing: '0.5px',
        transition: 'color 0.3s ease',
    },
};

const Header: React.FC = () => {
    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <a href="#" style={styles.logo}>DAVI ARAGÃO</a>
                <nav style={styles.nav}>
                    {navLinks.map((link, index) => (
                        <a key={index} href={`#${link.toLowerCase()}`} style={styles.navLink}>
                            {link}
                        </a>
                    ))}
                    <div style={{ marginLeft: '1rem', borderLeft: '1px solid var(--border-color)', paddingLeft: '1rem' }}>
                        <ThemeToggle />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
