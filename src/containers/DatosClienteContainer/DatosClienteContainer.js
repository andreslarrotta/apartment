import React from 'react'

import './DatosClienteContainer.scss';
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'
import Steps from '../../components/Steps'
import Detalles from '../../components/Detalles'

export const DatosClienteContainer = () => {
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
                        <input type='text' placeholder='Sebastian Nogera' required />
                        <Button title={'Continuar'} />
                    </div>
                </div>
            </div>
            <div className="data_container">
                <Detalles />
            </div>
        </section>
    );
}