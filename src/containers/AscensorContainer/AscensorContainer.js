import React, { useState, useEffect } from 'react'

import './AscensorContainer.scss';
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'
import Steps from '../../components/Steps'

export const AscensorContainer = () => {
    const [dataStorage, setDataStorage] = useState({})
    const [ascensor, setAscensor] = useState(false)

    const handleRadio = (e) => {
        let ascensorRadio = e.target.value

        if (ascensorRadio) {
            if (ascensorRadio === "no") {
                setAscensor(false)
            }
            else {
                setAscensor(true)
            }
        }
    }

    const handleAscensor = () => {
        dataStorage.ascensor = ascensor
        localStorage.setItem('dataHabi', JSON.stringify(dataStorage));
        window.location.href = "/datos-detalles"
    }


    useEffect(() => {

        let dataHabi = localStorage.getItem('dataHabi');

        if (dataHabi) {
            setDataStorage(JSON.parse(dataHabi))
            setAscensor(JSON.parse(dataHabi).ascensor)
        }

    }, [])

    return (
        <section className="steps">
            <div className="steps_container">
                <div className="steps_container_state">
                    <Steps id={8} />
                </div>
                <div className="steps_container_content">
                    <SectionTitle
                        title={'¿Tiene Ascensor?'}
                        subtitle={''}
                        color={'#8512ff'}
                    />
                    <div className="steps_container_form">
                        <div className="steps_container_form_ascensor">
                            <div className="steps_container_form_ascensor--sino">
                                <label className="steps_container_form--ascensor-item">
                                    <input
                                        type="radio"
                                        name="ascensor"
                                        value="no"
                                        checked={!ascensor}
                                        onChange={handleRadio}
                                    />
                                    No
                                </label>
                                <label className="steps_container_form--ascensor-item">
                                    <input
                                        type="radio"
                                        name="ascensor"
                                        value="si"
                                        checked={ascensor}
                                        onChange={handleRadio}
                                    />
                                    SI
                                </label>
                            </div>
                        </div>
                        <div onClick={handleAscensor}>
                            <Button title={'Continuar'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="data_container">
                aqui van todos los datos
            </div>
        </section>
    );
}