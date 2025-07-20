import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer id='footer' className="footer">
            <div className="footer-content">
                <h3 className="footer-heading">Vamos conversar?</h3>
                <p className="footer-text">
                    Estou sempre aberto a novas oportunidades e projetos.
                    <br />
                    Sinta-se à vontade para me contatar por qualquer um dos canais abaixo.
                </p>
                <div className="social-links">
                    <a href="https://www.instagram.com/d.a.v.i_aragao" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/davi-aragão-25aa30285" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaLinkedin />
                    </a>
                    <a href="https://wa.me/5561982611486" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Desenvolvido por Davi Aragão - 2025</p>
            </div>
        </footer>
    );
};

export default Footer;