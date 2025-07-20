import React from 'react';
import { DiReact, DiNodejsSmall, DiHtml5, DiCss3, DiJavascript1, DiPostgresql } from 'react-icons/di';
import { SiTypescript, SiExpo } from 'react-icons/si';
import './TechnologiesSection.css';


const technologiesData = [
    { name: 'React', icon: <DiReact /> },
    { name: 'React Native', icon: <DiReact /> },
    { name: 'Node.js', icon: <DiNodejsSmall /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'JavaScript', icon: <DiJavascript1 /> },
    { name: 'HTML', icon: <DiHtml5 /> },
    { name: 'CSS', icon: <DiCss3 /> },
    { name: 'PostgreSQL', icon: <DiPostgresql /> },
    { name: 'Expo', icon: <SiExpo /> },
];

const TechnologiesSection: React.FC = () => {
    return (
        <section id='tecnologias' className="technologies-section">
            <h2 className="technologies-heading">Tecnologias</h2>
            <div className="technologies-grid">
                {technologiesData.map((tech, index) => (
                    <div key={index} className="tech-item">
                        <div className="tech-icon">{tech.icon}</div>
                        <span className="tech-name">{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnologiesSection;