import React, { useState, useEffect } from 'react'

import './DatosClienteContainer.scss';
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'
import Steps from '../../components/Steps'
import Detalles from '../../components/Detalles'

export const DatosClienteContainer = () => {
    const [dataStorage, setDataStorage] = useState({})
    const [nombreStorage, setNombreStorage] = useState('')
    /* 
        let data = {
            nombre: "andres",
            correo: "andres@gmail.com",
            direccion: "Cra 69 D # 1-10 sur",
            piso: 2,
            zonas: ['zonas', 'zonas', 'zonas'],
            parqueadero: true,
            cubierto: true,
            monto: 2000000000,
            foto: "",
            ascensor: true
        }
        let dataString = '{"nombre":"andres","correo":"andres@gmail.com","direccion":"Cra 69 D # 1-10 sur","piso":2,"zonas":["zonas","zonas","zonas"],"parqueadero":true,"cubierto":true,"monto":2000000000,"foto":"","ascensor":true}'
        console.log(JSON.stringify(data))
        console.log(JSON.parse(dataString)) */

    const handleDatosCliente = () => {
        let nombre = document.querySelector('input[name="nombre"]').value
        if (nombre) {
            dataStorage.nombre = nombre
            localStorage.setItem('dataHabi', JSON.stringify(dataStorage));
            window.location.href = "/datos-correo"
        }
    }

    const handleTyping = (e) => {
        console.log(e.target.value)
        setNombreStorage(e.target.value)
    }

    useEffect(() => {

        let dataHabi = localStorage.getItem('dataHabi');

        if (dataHabi) {
            setDataStorage(JSON.parse(dataHabi))
            setNombreStorage(JSON.parse(dataHabi).nombre)
        } else {
            localStorage.setItem('dataHabi', '{}');
            console.log(JSON.parse(dataHabi))
        }

    }, [])

    return (
        <section className="steps">
            <div className="steps_container">
                <div className="steps_container_state">
                    <Steps id={0} />
                </div>
                <div className="steps_container_content">
                    <SectionTitle
                        title={'Nombre y apellido'}
                        subtitle={''}
                        color={'#8512ff'}
                    />
                    <div className="steps_container_form">
                        <input
                            name='nombre'
                            type='text'
                            placeholder='Sebastian Nogera'
                            required
                            value={nombreStorage}
                            onChange={handleTyping}
                        />
                        <div onClick={handleDatosCliente}>
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