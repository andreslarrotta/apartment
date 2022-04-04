import React, { useState, useEffect } from 'react'

import './MontoImmuebleContainer.scss';
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'
import Steps from '../../components/Steps'
import Detalles from '../../components/Detalles'

export const MontoImmuebleContainer = () => {
    const [dataStorage, setDataStorage] = useState({})
    const [motonStorage, setMontoStorage] = useState('')

    const handleMontoImmueble = () => {
        let monto = document.querySelector('input[name="monto"]').value
        if (monto) {
            dataStorage.monto = monto
            localStorage.setItem('dataHabi', JSON.stringify(dataStorage));
            window.location.href = "/datos-foto-immueble"
        }
    }

    const handleTyping = (e) => {
        setMontoStorage(e.target.value)
    }

    useEffect(() => {

        let dataHabi = localStorage.getItem('dataHabi');

        if (dataHabi) {
            setDataStorage(JSON.parse(dataHabi))
            setMontoStorage(JSON.parse(dataHabi).monto)
        }

    }, [])

    return (
        <section className="steps">
            <div className="steps_container">
                <div className="steps_container_state">
                    <Steps id={6} />
                </div>
                <div className="steps_container_content">
                    <SectionTitle
                        title={'Monto del inmueble'}
                        subtitle={''}
                        color={'#8512ff'}
                    />
                    <div className="steps_container_form">
                        <input
                            name='monto'
                            type="number"
                            min="0.00"
                            max="10000.00"
                            step="0.01"
                            value={motonStorage}
                            onChange={handleTyping}
                        />
                        <div onClick={handleMontoImmueble}>
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