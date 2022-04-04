import React, { useState, useEffect } from 'react'

import './ZonasComunesContainer.scss';
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'
import Steps from '../../components/Steps'
import Detalles from '../../components/Detalles'

import icon from '../../assets/Icons/bbq-svgrepo-com.svg';
import iconComunal from '../../assets/Icons/comunal-svgrepo-com.svg';
import iconGames from '../../assets/Icons/games-svgrepo-com.svg';

export const ZonasComunesContainer = () => {
    const [dataStorage, setDataStorage] = useState({})
    const [zonabbq, setZonabbq] = useState(false)
    const [salon, setSalon] = useState(false)
    const [parque, setParque] = useState(false)

    const handleCheckboxBBQ = () => {
        setZonabbq(!zonabbq)
    }

    const handleCheckboxSalon = () => {
        setSalon(!salon)
    }

    const handleCheckboxParque = () => {
        setParque(!parque)
    }

    const handleZonas = () => {
        let zonaBbq = document.querySelector('#bbq').checked;
        let salonComunal = document.querySelector('#salon').checked;
        let parqueCheck = document.querySelector('#parque').checked;

        dataStorage.zonabbq = zonaBbq
        localStorage.setItem('dataHabi', JSON.stringify(dataStorage));

        dataStorage.salon = salonComunal
        localStorage.setItem('dataHabi', JSON.stringify(dataStorage));

        dataStorage.parque = parqueCheck
        localStorage.setItem('dataHabi', JSON.stringify(dataStorage));

        window.location.href = "/datos-parqueadero"
    }

    useEffect(() => {

        let dataHabi = localStorage.getItem('dataHabi');

        if (dataHabi) {
            setDataStorage(JSON.parse(dataHabi))
            setZonabbq(JSON.parse(dataHabi).zonabbq)
            setSalon(JSON.parse(dataHabi).salon)
            setParque(JSON.parse(dataHabi).parque)
        }

    }, [])

    return (
        <section className="steps">
            <div className="steps_container">
                <div className="steps_container_state">
                    <Steps id={4} />
                </div>
                <div className="steps_container_content">
                    <SectionTitle
                        title={'Zonas Comunes'}
                        subtitle={'Selecciona si tienes alguna zona común'}
                        color={'#8512ff'}
                    />
                    <div className="steps_container_form">
                        <div className="steps_container_form--zonas">
                            <label className="steps_container_form--zona">
                                <input
                                    type="checkbox"
                                    id="bbq"
                                    value="zona bbq"
                                    checked={zonabbq}
                                    onClick={handleCheckboxBBQ}
                                />
                                <img src={icon} alt="Zona bbq" />
                                Zona BBQ
                            </label>
                            <label className="steps_container_form--zona">
                                <input
                                    type="checkbox"
                                    id="salon"
                                    value="salón comunal"
                                    checked={salon}
                                    onClick={handleCheckboxSalon}
                                />
                                <img src={iconComunal} alt="Salon comunal" />
                                Salón Comunal
                            </label>
                            <label className="steps_container_form--zona">
                                <input
                                    type="checkbox"
                                    id="parque"
                                    value="parque de juegos"
                                    checked={parque}
                                    onClick={handleCheckboxParque}
                                />
                                <img src={iconGames} alt="parque de juegos" />
                                Parque de Juegos
                            </label>
                        </div>
                        <div onClick={handleZonas}>
                            <Button title={'Continuar'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="data_container">
                <Detalles />
            </div>
        </section>
    );
}