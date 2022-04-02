import { useState, useEffect } from 'react';
import './styles.scss';
import Info from '../../assets/info/andres.json'


const TextSkills = ({ text }) => {
    const [informacion, setInformacion] = useState('')
    useEffect(() => {
        if (text === 'WEB DESIGN') {
            setInformacion(Info.web.text)
        }
        if (text === 'WEB DEVELOP') {
            setInformacion(Info.develop.text)
        }
        if (text === 'E-COMMERCE') {
            setInformacion(Info.commerce.text)
        }
    }, [text])

    return (
        <p>{informacion}</p>
    );
}

export default TextSkills;
