import React from 'react'

import './MontoImmuebleContainer.scss';
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'
import Steps from '../../components/Steps'

export const MontoImmuebleContainer = () => {
    return (
        <section className="steps">
            <div className="steps_container">
                <div className="steps_container_state">
                    <Steps id={6}/>
                </div>
                <div className="steps_container_content">
                    <SectionTitle
                        title={'Monto del immueble'}
                        subtitle={''}
                        color={'#8512ff'}
                    />
                    <div className="steps_container_form">
                        <input type="number" min="0.00" max="10000.00" step="0.01" />
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