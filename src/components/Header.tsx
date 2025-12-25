import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const navLinks = ['PROJETOS', 'TECNOLOGIAS'];

const Header: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    // Close sidebar when clicking outside or resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isSidebarOpen) {
                setIsSidebarOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isSidebarOpen]);

    // Prevent body scroll when sidebar is open
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isSidebarOpen]);

    return (
        <header className="header">
            <div className="header-container">
                <a href="#" className="logo">DAVI ARAGÃO</a>

                {/* Desktop Navigation */}
                <nav className="nav">
                    {navLinks.map((link, index) => (
                        <a key={index} href={`#${link.toLowerCase()}`} className="nav-link">
                            {link}
                        </a>
                    ))}
                    <div className="theme-toggle-container">
                        <ThemeToggle />
                    </div>
                </nav>

                {/* Mobile Menu Icon */}
                <div
                    className={`menu-icon ${isSidebarOpen ? 'hidden' : ''}`}
                    onClick={toggleSidebar}
                >
                    <FaBars />
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            <div
                className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
                onClick={closeSidebar}
            />

            {/* Mobile Sidebar */}
            <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
                <div className="close-icon" onClick={closeSidebar}>
                    <FaTimes />
                </div>

                <nav className="sidebar-nav">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={`#${link.toLowerCase()}`}
                            className="sidebar-link"
                            onClick={closeSidebar}
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <ThemeToggle />
                </div>
            </aside>
        </header>
    );
};

export default Header;
