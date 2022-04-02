import React from 'react'

import './FotoContainer.scss';
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'

export const FotoContainer = () => {
    return (
        <section className="steps">
            <div className="steps_container">
                <div className="steps_container_state">
                    aqui va el estado de los pasos
                </div>
                <div className="steps_container_content">
                    <SectionTitle
                        title={'Foto del Immueble'}
                        subtitle={''}
                        color={'#8512ff'}
                    />
                    <div className="steps_container_form">
                        <input type="file"
                            id="avatar" name="avatar"
                            accept="image/png, image/jpeg" />
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