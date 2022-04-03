import React, { useState, useEffect } from 'react'

import './FotoContainer.scss';
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'
import Steps from '../../components/Steps'
import Detalles from '../../components/Detalles'

export const FotoContainer = () => {
    const [dataStorage, setDataStorage] = useState({})
    const [fotoStorage, setFotoStorage] = useState('')

    const handleFotoApartamento = () => {
        let fotoApartamento = document.querySelector('input[name="fotoApartamento"]').value

        if (fotoApartamento) {
            dataStorage.foto = fotoApartamento
            localStorage.setItem('dataHabi', JSON.stringify(dataStorage));
            window.location.href = "/datos-ascensor"
        }
    }

    useEffect(() => {

        let dataHabi = localStorage.getItem('dataHabi');

        if (dataHabi) {
            setDataStorage(JSON.parse(dataHabi))
            setFotoStorage(JSON.parse(dataHabi).foto)
        }

    }, [])
    return (
        <section className="steps">
            <div className="steps_container">
                <div className="steps_container_state">
                    <Steps id={7} />
                </div>
                <div className="steps_container_content">
                    <SectionTitle
                        title={'Foto del Immueble'}
                        subtitle={''}
                        color={'#8512ff'}
                    />
                    <div className="steps_container_form">
                        <input
                            type="file"
                            id="fotoApartamento"
                            name="fotoApartamento"
                            accept="image/png, image/jpeg"
                        />
                        <div onClick={handleFotoApartamento}>
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