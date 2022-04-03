import React from 'react'

import './DetalleContainer.scss';
import SectionTitle from '../../components/SectionTitle'
import Steps from '../../components/Steps'
import Detalles from '../../components/Detalles'

export const DetalleContainer = () => {
    return (
        <section className="steps">
            <div className="steps_container">
                <div className="steps_container_state">
                    <Steps id={9} />
                </div>
                <div className="steps_container_content">
                    <SectionTitle
                        title={'Detalles del apartamento'}
                        subtitle={''}
                        color={'#8512ff'}
                    />
                    <div className="steps_container_form steps_container_form_detalle">
                        <Detalles />
                    </div>
                </div>
            </div>
        </section>
    );
}