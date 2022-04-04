import React, { useState, useEffect } from 'react'

import './CorreoContainer.scss';
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'
import Steps from '../../components/Steps'
import Detalles from '../../components/Detalles'

export const CorreoContainer = () => {
    const [dataStorage, setDataStorage] = useState({})
    const [correoStorage, setCorreoStorage] = useState('')

    const handleCorreo = () => {
        let correo = document.querySelector('input[name="correo"]').value
        if (correo) {
            dataStorage.correo = correo
            localStorage.setItem('dataHabi', JSON.stringify(dataStorage));
            window.location.href = "/datos-direccion"
        }
    }

    const handleTyping = (e) => {
        setCorreoStorage(e.target.value)
    }

    useEffect(() => {

        let dataHabi = localStorage.getItem('dataHabi');

        if (dataHabi) {
            setDataStorage(JSON.parse(dataHabi))
            setCorreoStorage(JSON.parse(dataHabi).correo)
        } else {
            localStorage.setItem('dataHabi', '{}');
        }

    }, [])

    return (
        <section className="steps">
            <div className="steps_container">
                <div className="steps_container_state">
                    <Steps id={1} />
                </div>
                <div className="steps_container_content">
                    <SectionTitle
                        title={'Correo electrónico'}
                        subtitle={''}
                        color={'#8512ff'}
                    />
                    <div className="steps_container_form">
                        <input name="correo" type='email' placeholder='hola@habi.com' required value={correoStorage} onChange={handleTyping} />
                        <div onClick={handleCorreo}>
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