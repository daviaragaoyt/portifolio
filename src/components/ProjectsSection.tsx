import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './ProjectsSection.css';

// 1. Importe as imagens diretamente
import confetiariaImg from '../assets/confeitaria.png';
import blocodenotasImg from '../assets/blocodenotas.png';
import odontoappImg from '../assets/odontoapp.png';
import nearbyImg from '../assets/nearby.png';
import pokedexImg from '../assets/pokedeximage.png';

// Defina uma interface para o tipo de dados dos projetos
interface Project {
    image: string;
    title: string;
    description: string;
    siteLink?: string;
    codeLink?: string;
}

// 2. Use as variáveis importadas nos dados dos projetos
const projectsData: Project[] = [
    {
        image: confetiariaImg, // Use a variável
        title: 'Confeitaria Dias',
        description: 'Projeto de uma loja de doces utilizando HTML, CSS e JavaScript.',
        siteLink: 'https://confeitaria-dias-exemplo.com.br',
        codeLink: 'https://github.com/seuperfil/confeitaria-dias',
    },
    {
        image: blocodenotasImg, // Use a variável
        title: 'Bloco de notas',
        description: 'Projeto de React da Rocketseat, com API que passa áudio para texto.',
        siteLink: 'https://bloco-de-notas-exemplo.vercel.app',
        codeLink: 'https://github.com/seuperfil/bloco-de-notas',
    },
    {
        image: odontoappImg, // Use a variável
        title: 'Higiene Score',
        description: 'Versão Web em Typescript e React para os alunos de odonto.',
        siteLink: 'https://higiene-score-exemplo.vercel.app',
        codeLink: 'https://github.com/seuperfil/higiene-score',
    },
    {
        image: nearbyImg, // Use a variável
        title: 'Nearby',
        description: 'App para uso de cupons em lojas parceiras perto de você. Uso de Geolocalização e câmera do dispositivo usando Typescript, React e React Native.',
        siteLink: 'https://nearby-exemplo.vercel.app',
        codeLink: 'https://github.com/seuperfil/nearby-app',
    },
    {
        image: pokedexImg, // Use a variável
        title: 'Pokedex',
        description: 'Pokedex utilizando React.js e Router-Dom.',
        siteLink: 'https://pokedex-exemplo.vercel.app',
        codeLink: 'https://github.com/seuperfil/pokedex',
    },
];

const ProjectsSection: React.FC = () => {
    return (
        <section className="projects-section">
            <h2 className="projects-heading">Meus Projetos</h2>
            <div className="cards-container">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-image-container">
                            <img src={project.image} alt={`Captura de tela do projeto ${project.title}`} className="project-image" />
                        </div>

                        <div className="card-content">
                            <h3 className="card-title">{project.title}</h3>
                            <p className="card-description">{project.description}</p>

                            <div className="card-buttons">
                                {project.siteLink && (
                                    <a href={project.siteLink} target="_blank" rel="noopener noreferrer" className="card-link">
                                        <FaExternalLinkAlt /> Site
                                    </a>
                                )}
                                {project.codeLink && (
                                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="card-link">
                                        <FaGithub /> Código
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;