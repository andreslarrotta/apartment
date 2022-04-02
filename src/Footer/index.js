import './styles.scss';
import linkedin from '../assets/linkedin-social-network.png';
import instagram from '../assets/instagram-social-network.png';
import github from '../assets/github-social-network.png';
import email from '../assets/email-social-network.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer_container'>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/andres-felipe-larrotta-pino-97772849/" target="_blank">
                            <img src={linkedin} alt="linkedin" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/design_andreslarrotta/" target="_blank">
                            <img src={instagram} alt="instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/andreslarrotta" target="_blank">
                            <img src={github} alt="github" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:andreslarrottapino911@gmail.com" target="_blank">
                            <img src={email} alt="email" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
