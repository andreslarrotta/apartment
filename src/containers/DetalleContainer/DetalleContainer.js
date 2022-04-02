import React from 'react'

import './DetalleContainer.scss';
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'

export const DetalleContainer = () => {
    return (
        <section className="steps">
            <div className="steps_container">
                <div className="steps_container_state">
                    aqui va el estado de los pasos
                </div>
                <div className="steps_container_content">
                    <SectionTitle
                        title={'Detalles del apartamento'}
                        subtitle={''}
                        color={'#8512ff'}
                    />
                    <div className="steps_container_form">
                        <div className="steps_container_form_detalle">
                            <ul>
                                <li>
                                    <span>Nombre</span>
                                    <p>Holaaaaa</p>
                                </li>
                                <li>
                                    <span>Nombre</span>
                                    <p>Holaaaaa</p>
                                </li>
                                <li>
                                    <span>Nombre</span>
                                    <p>Holaaaaa</p>
                                </li>
                            </ul>

                        </div>
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