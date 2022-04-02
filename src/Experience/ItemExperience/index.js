import './styles.scss';
/* import logo from '../assets/andres_larrotta_logo.png';*/


const ItemExperience = ({ exp }) => {
    return (
        <div className="item_experience">
            <div className="item_experience_company">
                <img src={exp.image} alt={exp.name} />
                <h3>{exp.name}</h3>
            </div>
            <h4>{exp.cargo}</h4>
            <div className="item_experience_date">
                <span className="item_experience_date_before">{exp.startDate}</span>
                -
                <span className="item_experience_date_after">{exp.endDate}</span>
            </div>
            <div className="item_experience_description">
                <p>{exp.description}</p>
            </div>
            {/* <div className="item_experience_see_more">
                <a href={`/experince/${exp.name}`}>See more</a>
            </div> */}
        </div>
    );
}

export default ItemExperience;
