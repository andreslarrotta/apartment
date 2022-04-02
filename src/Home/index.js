import './styles.scss';
import linkedin from '../assets/linkedin-social-network.png';
import instagram from '../assets/instagram-social-network.png';
import github from '../assets/github-social-network.png';
import email from '../assets/email-social-network.png';

const Home = () => {
    return (
        <section className="home">
            <div className="home_container">
                <div className="home_container_column">
                    <h3>Hello I’m</h3>
                    <h1>Andres Larrotta Pino</h1>
                    <h2>Developer and Designer Web</h2>
                    <p>Being a hardworking and challenge-oriented individual. <br />
                        For me is so important the team work, I would describe myself as a confident, enthusiastic, and sociable individual.</p>
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
            </div>
        </section>
    );
}

export default Home;
