import React from 'react'

import './CorreoContainer.scss';
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'

export const CorreoContainer = () => {
    return (
        <section className="steps">
            <div className="steps_container">
                <div className="steps_container_state">
                    aqui va el estado de los pasos
                </div>
                <div className="steps_container_content">
                    <SectionTitle
                        title={'Correo electrónico'}
                        subtitle={''}
                        color={'#8512ff'}
                    />
                    <div className="steps_container_form">
                        <input type='email' placeholder='hola@habi.com' required />
                        <Button title={'Continuar'} />
                    </div>
                </div>
            </div>
            <div className="data_container">
                aqui van todos los datos
            </div>
        </section>
    );
}