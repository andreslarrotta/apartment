import React, { useState, useEffect } from 'react'

import './NumeroPisoContainer.scss';
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'
import Steps from '../../components/Steps'
import Detalles from '../../components/Detalles'

export const NumeroPisoContainer = () => {
    const numerosPisosMax = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"]
    const [dataStorage, setDataStorage] = useState({})
    const [pisoStorage, setPisoStorage] = useState('')

    const handlePisos = () => {
        let piso = document.querySelector('select[name="pisos"]').value
        if (piso) {
            dataStorage.piso = piso
            localStorage.setItem('dataHabi', JSON.stringify(dataStorage));
            window.location.href = "/datos-zonas-comunes"
        }
    }

    useEffect(() => {

        let dataHabi = localStorage.getItem('dataHabi');

        if (dataHabi) {
            setDataStorage(JSON.parse(dataHabi))
            setPisoStorage(JSON.parse(dataHabi).piso)
        } else {
            localStorage.setItem('dataHabi', '{}');
        }
        document.querySelector('select[name="pisos"]').value = pisoStorage
    }, [])


    return (
        <section className="steps">
            <div className="steps_container">
                <div className="steps_container_state">
                    <Steps id={3} />
                </div>
                <div className="steps_container_content">
                    <SectionTitle
                        title={'Numero de piso'}
                        subtitle={'donde se encuentra el apartamento'}
                        color={'#8512ff'}
                    />
                    <div className="steps_container_form">
                        <div className="steps_container_form--pisos">

                            <select name="pisos">
                                {
                                    numerosPisosMax.map((option) => {
                                        if (option === pisoStorage) {
                                            return <option value={option} selected>{option}</option>
                                        }
                                        else {
                                            return <option value={option}>{option}</option>
                                        }
                                    })
                                }
                            </select>
                            Piso
                        </div>
                        <div onClick={handlePisos}>
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