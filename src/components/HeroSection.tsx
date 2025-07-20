import React from 'react';
import { MdArrowForward } from 'react-icons/md';
const styles = {
    heroSection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 40px',
        backgroundColor: '#121212',
        height: 'calc(100vh - 80px)',
        color: '#efefef'
    },
    contentContainer: {
        display: 'flex',
        maxWidth: '1200px',
        width: '100%',
        alignItems: 'center',
        gap: '80px',
    },
    textContainer: {
        flex: 1,
        paddingRight: '40px',
    },
    title: {
        fontSize: '60px',
        fontWeight: 'bold',
        color: '#efefef',
        margin: '0',
    },
    subtitle: {
        fontSize: '36px',
        fontWeight: 'normal',
        color: '#efefef',
        margin: '10px 0 20px 0',
    },
    paragraph: {
        fontSize: '18px',
        lineHeight: '1.6',
        color: '#b0b0b0',
        maxWidth: '500px',
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        marginTop: '30px',
    },
    button: {
        padding: '15px 30px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#121212',
        backgroundColor: '#8bff8b',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    arrowIcon: {
        marginLeft: '15px',
        fontSize: '40px',
        color: '#8bff8b',
    },
    imageContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '100%',
        alignItems: 'center',
    },
    phoneImage: {
        borderRadius: '100%',
        maxWidth: '100%',
        height: 'auto',
    },
};
const HeroSection: React.FC = () => {
    return (
        <section style={styles.heroSection}>
            <div style={styles.contentContainer}>
                <div style={styles.textContainer}>
                    <h1 style={styles.title}>DAVI ARAGÃO:</h1>
                    <h2 style={styles.subtitle}>Desenvolvedor FullStack</h2>
                    <p style={styles.paragraph}>
                        Olá! Eu sou Davi Aragão, estudante da UNICEPLAC, graduado em Analise e Desenvolvimento de Sistemas.
                        Sou desenvolvedor e tenho experiência em criar interfaces intuitivas e responsivas usando HTML, CSS e JavaScript e Frame-works como React e React Native.
                        Fique a vontade para dar uma olhada nos meus projetos.
                    </p>
                    <div style={styles.buttonContainer}>
                        <button style={styles.button}>Conheça meus projetos</button>
                        <span style={styles.arrowIcon}>
                            <MdArrowForward />
                        </span>
                    </div>
                </div>
                <div style={styles.imageContainer}>
                    <img src="src\assets\davi.png" alt="myface" style={styles.phoneImage} />
                </div>
            </div>
        </section>
    );
};
export default HeroSection;