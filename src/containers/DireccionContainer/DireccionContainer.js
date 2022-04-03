import React, { useState, useEffect } from 'react'

import './DireccionContainer.scss';
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'
import Steps from '../../components/Steps'
import Detalles from '../../components/Detalles'

export const DireccionContainer = () => {
    const [dataStorage, setDataStorage] = useState({})
    const [direccionStorage, setDireccionStorage] = useState('')

    const handleDireccion = () => {
        let direccion = document.querySelector('input[name="direccion"]').value
        if (direccion) {
            dataStorage.direccion = direccion
            localStorage.setItem('dataHabi', JSON.stringify(dataStorage));
            window.location.href = "/datos-piso"
        }
    }

    const handleTyping = (e) => {
        console.log(e.target.value)
        setDireccionStorage(e.target.value)
    }

    useEffect(() => {

        let dataHabi = localStorage.getItem('dataHabi');

        if (dataHabi) {
            setDataStorage(JSON.parse(dataHabi))
            setDireccionStorage(JSON.parse(dataHabi).direccion)
        } else {
            localStorage.setItem('dataHabi', '{}');
            console.log(JSON.parse(dataHabi))
        }

    }, [])

    return (
        <section className="steps">
            <div className="steps_container">
                <div className="steps_container_state">
                    <Steps id={2} />
                </div>
                <div className="steps_container_content">
                    <SectionTitle
                        title={'Dirección del apartamento'}
                        subtitle={'Indicanos el lugar del apartamento'}
                        color={'#8512ff'}
                    />
                    <div className="steps_container_form">
                        <input name='direccion' type='text' placeholder='Cra 69 ...' required value={direccionStorage} onChange={handleTyping} />
                        <div onClick={handleDireccion}>
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