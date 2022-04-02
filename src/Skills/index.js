import { useState, useEffect } from 'react';
import './styles.scss';
/* import logo from '../assets/andres_larrotta_logo.png';*/

import Info from '../assets/info/andres.json'

//components
import Menu from './Menu/index';
import TextSkills from './TextSkills/index';
import ItemSkills from './ItemSkills/index';

const Skills = () => {
    const [typeToView, setTypeToView] = useState('WEB DEVELOP');

    // actions
    const eventTabButton = async (event) => {
        setTypeToView(event)
    } // eventTabButton

    const [skillsArray, setSkillsArray] = useState([])

    useEffect(() => {
        if (typeToView === 'WEB DESIGN') {
            setSkillsArray(Info.web.skills)
        }
        if (typeToView === 'WEB DEVELOP') {
            setSkillsArray(Info.develop.skills)
        }
        if (typeToView === 'E-COMMERCE') {
            setSkillsArray(Info.commerce.skills)
        }
    }, [typeToView])

   /*  console.log('click final', typeToView); */
    return (
        <section className="skills" id="skills">
            <div className="skills_container">
                <div className="skills_container_header">
                    <div className="menu">
                        <Menu visible={typeToView} eventTabButton={eventTabButton} />
                    </div>
                    <div className="text_skills">
                        <TextSkills text={typeToView} />
                    </div>
                </div>
                <div className="skills_container_content">
                    {
                        skillsArray.map((item, index) => {
                            return <ItemSkills skill={item} key={index} />
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Skills;
