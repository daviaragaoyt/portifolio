import React from 'react';
import person from '../assets/davi.png';
import { MdArrowForward } from 'react-icons/md';
import './HeroSection.css';

const HeroSection: React.FC = () => {
    return (
        <section className="hero-section">
            <div className="content-container">
                {/* 1. Mova a div da imagem para o início */}
                <div className="image-container">
                    <img src={person} className="profile-image" alt="Foto de perfil de Davi Aragão" />
                </div>
                {/* 2. A div do texto vem em seguida */}
                <div className="text-container">
                    <h1 className="profile-title">DAVI ARAGÃO:</h1>
                    <h2 className="profile-subtitle">Desenvolvedor FullStack</h2>
                    <p className="profile-paragraph">
                        Olá! Sou Davi Aragão, desenvolvedor de software graduado em Análise e Desenvolvimento de Sistemas pela UNICEPLAC. Minha especialidade é criar interfaces intuitivas e responsivas, focando sempre na melhor experiência para o usuário. No meu toolkit principal, utilizo HTML, CSS, JavaScript e frameworks como React e React Native. Convido você a explorar meus projetos abaixo para conhecer mais sobre meu trabalho!
                    </p>
                    <div className="button-container">
                        <a href="#projetos" className="button-link">Conheça meus projetos</a>
                        <span className="arrow-icon">
                            <MdArrowForward />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;