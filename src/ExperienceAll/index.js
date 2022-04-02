import './styles.scss';
import ItemExperience from './ItemExperience/index';
import Info from '../assets/info/andres.json'

const ExperienceAll = () => {
    return (
        <section className="experience">
            <div className="experience_container">
                <div className="experience_container_title">
                    <h2>Experience</h2>
                </div>
                <div className="experience_container_line_time_all">
                    <span className="draw_line"></span>
                    <ul>
                        <li>2022</li>
                        <li>2019</li>
                        <li>2017</li>
                        <li>2016</li>
                        <li>2015</li>
                    </ul>
                </div>
                <div className="experience_container_items_experience">
                    {Info.experience.companiesall.map((item, index) => {
                        return <ItemExperience exp={item} key={index} />
                    })}
                </div>
                <div className="experience_container_margen"></div>
            </div>
        </section>
    );
}

export default ExperienceAll;
