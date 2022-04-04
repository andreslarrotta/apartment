import React, { useState, useEffect } from 'react'

import './ParqueaderoContainer.scss';
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'
import Steps from '../../components/Steps'
import Detalles from '../../components/Detalles'

export const ParqueaderoContainer = () => {
    const [dataStorage, setDataStorage] = useState({})
    const [parqueadero, setParqueadero] = useState(false)
    const [cubierto, setCubierto] = useState(false)

    const handleParqueadero = () => {
        dataStorage.parqueadero = parqueadero
        dataStorage.cubierto = cubierto
        localStorage.setItem('dataHabi', JSON.stringify(dataStorage));
        window.location.href = "/datos-monto"
    }

    const handleRadioCubierto = (e) => {
        let parqueaderoRadioCubierto = e.target.value

        if (parqueaderoRadioCubierto) {
            if (parqueaderoRadioCubierto === "si") {
                setCubierto(true)
            }
            else {
                setCubierto(false)
            }
        }
    }

    const handleRadio = (e) => {
        let parqueaderoRadio = e.target.value

        if (parqueaderoRadio) {
            if (parqueaderoRadio === "no") {
                setParqueadero(false)
                setCubierto(false)
            }
            else {
                setParqueadero(true)
            }
        }
    }

    useEffect(() => {

        let dataHabi = localStorage.getItem('dataHabi');

        if (dataHabi) {
            setDataStorage(JSON.parse(dataHabi))
            setParqueadero(JSON.parse(dataHabi).parqueadero)
            setCubierto(JSON.parse(dataHabi).cubierto)
        }

    }, [])

    return (
        <section className="steps">
            <div className="steps_container">
                <div className="steps_container_state">
                    <Steps id={5} />
                </div>
                <div className="steps_container_content">
                    <SectionTitle
                        title={'¿Tiene parqueadero?'}
                        subtitle={''}
                        color={'#8512ff'}
                    />
                    <div className="steps_container_form">
                        <div className="steps_container_form_parqueadero">
                            <div className="steps_container_form_parqueadero--sino">
                                <label className="steps_container_form--parqueadero-item">
                                    <input
                                        type="radio"
                                        name="parqueadero"
                                        value="no"
                                        checked={!parqueadero}
                                        onChange={handleRadio}
                                    />
                                    No
                                </label>
                                <label className="steps_container_form--parqueadero-item">
                                    <input
                                        type="radio"
                                        name="parqueadero"
                                        value="si"
                                        checked={parqueadero}
                                        onChange={handleRadio}
                                    />
                                    SI
                                </label>
                            </div>
                            <div className={`steps_container_form_parqueadero--cubierto ${parqueadero ? '' : 'hidden'}`}>
                                <SectionTitle
                                    title={''}
                                    subtitle={'¿Tiene parqueadero cubierto?'}
                                    color={'#8512ff'}
                                />
                                <div className="steps_container_form_parqueadero--cubierto_content">
                                    <label className="steps_container_form--parqueadero--cubierto-item">
                                        <input
                                            type="radio"
                                            name="cubierto"
                                            value="no"
                                            checked={!cubierto}
                                            onChange={handleRadioCubierto}
                                        />
                                        No
                                    </label>
                                    <label className="steps_container_form--parqueadero--cubierto-item">
                                        <input
                                            type="radio"
                                            name="cubierto"
                                            value="si"
                                            checked={cubierto}
                                            onChange={handleRadioCubierto}
                                        />
                                        SI
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div onClick={handleParqueadero}>
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