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
                        Olá! Eu sou Davi Aragão, estudante da UNICEPLAC, graduado em Analise e Desenvolvimento de Sistemas. Sou desenvolvedor e tenho experiência em criar interfaces intuitivas e responsivas usando HTML, CSS e JavaScript e Frame-works como React e React Native. Fique a vontade para dar uma olhada nos meus projetos.
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