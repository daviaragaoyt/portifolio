import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './ProjectsSection.css';

// Importação das imagens para que funcionem após o build
import confetiariaImg from '../assets/confeitaria.png';
import blocodenotasImg from '../assets/blocodenotas.png';
import odontoappImg from '../assets/odontoapp.png';
import nearbyImg from '../assets/nearby.png';
import pokedexImg from '../assets/pokedeximage.png';
import IDetect from '../assets/idetect.png'
import CyberBorg from '../assets/cyberborg.png'
import CodePlac from '../assets/codeplac.png';
import Zaqueu from '../assets/zaqueu.png';
import IBMG from '../assets/ibmg.png';
import rosaIA from '../assets/rosaia.png';

interface Project {
    image: string;
    title: string;
    description: string;
    siteLink?: string;
    codeLink?: string;
}

const projectsData: Project[] = [
    {
        image: Zaqueu,
        title: 'Zaqueu',
        description: 'Faça todo o gerenciamento financeiro da igreja, lance o recebimento de dízimos e ofertas.',
        siteLink: 'https://zaqueu-web-ti1c.vercel.app',
        codeLink: 'https://github.com/daviaragaoyt/Zaqueu-Web',
    },
    {
        image: IBMG,
        title: 'Sorteador IBMG',
        description: 'Site criado para eventos que sorteiam pessoas para participar de premios.',
        siteLink: 'https://sorteador-ibmg.vercel.app/sorteio-nomes/index.html',
        codeLink: 'https://github.com/daviaragaoyt/Sorteador-IBMG',
    },
    {
        image: CodePlac,
        title: 'CodePlac',
        description: 'Projeto criado para o evento CODEPLAC realizado na faculdade UNICEPLAC, onde o professor cadastrado no banco de dados consegue criar um caça palavras em binario e o aluno loga ao encontrar as palavras loga para ganhar pontos.',
        siteLink: 'https://word-hunt-frontend.vercel.app',
        codeLink: 'https://github.com/daviaragaoyt/word-hunt-frontend',
    },
    {
        image: rosaIA,
        title: 'Rosa IA',
        description: 'Apresentamos a Dra. Rosa, sua assistente virtual integrada ao WhatsApp, pronta para oferecer informações confiáveis e suporte sobre o câncer de mama.',
        siteLink: 'https://rosaia.com.br',
        codeLink: 'https://github.com/IsabelaA99/rosa-ia',
    },

    {
        image: blocodenotasImg,
        title: 'Bloco de notas',
        description: 'Projeto de React da Rocketseat, com API que passa áudio para texto.',
        siteLink: 'https://nlw-2024-react.vercel.app',
        codeLink: 'https://github.com/daviaragaoyt/NLW-2024-React',
    },
    {
        image: odontoappImg,
        title: 'Higiene Score',
        description: 'Versão Web em Typescript e React para os alunos de odonto.',
        siteLink: 'https://odonto-web-five.vercel.app',
        codeLink: 'https://github.com/daviaragaoyt/Odonto-web',
    },
    {
        image: nearbyImg,
        title: 'Nearby',
        description: 'App para uso de cupons em lojas parceiras perto de você. Uso de Geolocalização e câmera do dispositivo usando Typescript, React e React Native.(NÂO POSSUI LINK DE DOWLOAND OU PAGE)',
        siteLink: 'https://nearby-exemplo.vercel.app',
        codeLink: 'https://github.com/daviaragaoyt/Nearby',
    },
    {
        image: pokedexImg,
        title: 'Pokedex',
        description: 'Pokedex utilizando React.js e Router-Dom.',
        siteLink: 'https://pokedex-delta-six-79.vercel.app',
        codeLink: 'https://github.com/daviaragaoyt/Pokedex',
    },
    {
        image: IDetect,
        title: 'IDetect',
        description: 'Projeto de Reconhecimento facial, utilizando a ferramenta Teacheble Machine da Google (Para o treinamento das models, foi usando somente meu rosto e de uma colega).',
        siteLink: 'https://i-detect.vercel.app',
        codeLink: 'https://github.com/daviaragaoyt/IDetect',
    },
    {
        image: CyberBorg,
        title: 'CyberBorg',
        description: 'Um jogo que conta a historia de um cyborg que acordou em um subsolo, sem saber o qur aconteceu e o POR QUE de estar ali...',
        siteLink: 'https://cyber-borg.vercel.app',
        codeLink: 'https://github.com/daviaragaoyt/CyberBorg',
    },
    {
        image: confetiariaImg,
        title: 'Confeitaria Dias',
        description: 'Projeto de uma loja de doces utilizando HTML, CSS e JavaScript.',
        siteLink: 'https://confeitaria-dias.vercel.app',
        codeLink: 'https://github.com/daviaragaoyt/ConfeitariaDias',
    },

];

const ProjectsSection: React.FC = () => {
    return (
        <section id="projetos" className="projects-section">
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