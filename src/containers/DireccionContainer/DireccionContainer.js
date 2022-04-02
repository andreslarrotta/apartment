import React from 'react'

import './DireccionContainer.scss';
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'
import Steps from '../../components/Steps'

export const DireccionContainer = () => {
    return (
        <section className="steps">
            <div className="steps_container">
                <div className="steps_container_state">
                    <Steps id={2}/>
                </div>
                <div className="steps_container_content">
                    <SectionTitle
                        title={'Dirección del apartamento'}
                        subtitle={'Indicanos el lugar del apartamento'}
                        color={'#8512ff'}
                    />
                    <div className="steps_container_form">
                        <input type='text' placeholder='Cra 69 ...' required />
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