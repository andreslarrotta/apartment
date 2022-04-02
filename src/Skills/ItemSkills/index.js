import './styles.scss';
/* import logo from '../assets/andres_larrotta_logo.png';*/


const ItemSkills = ({ skill }) => {
    const stylesPercent = {
        with: '30px'
    }
    return (
        <div className="skills_container_content_item">
            <div className="skill_image">
                <img src={skill.image} alt={skill.skill} />
                <div className="percent">
                    <span className="percent_value" style={{ width: `${skill.value}%` }}></span>
                    {`${skill.value}%`}
                </div>
            </div>
            <p>{skill.text}</p>
        </div >
    );
}

export default ItemSkills;
