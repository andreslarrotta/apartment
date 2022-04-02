import React from 'react'

import './ParqueaderoContainer.scss';
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'

export const ParqueaderoContainer = () => {
    return (
        <section className="steps">
            <div className="steps_container">
                <div className="steps_container_state">
                    aqui va el estado de los pasos
                </div>
                <div className="steps_container_content">
                    <SectionTitle
                        title={'¿Tiene parqueadero?'}
                        subtitle={''}
                        color={'#8512ff'}
                    />
                    <div className="steps_container_form">
                        <div className="steps_container_form_parqueadero">
                            <div className="steps_container_form_parqueadero--sino">
                                <label className="steps_container_form--parqueadero-item">
                                    <input type="radio" name="parqueadero" value="no" />
                                    No
                                </label>
                                <label className="steps_container_form--parqueadero-item">
                                    <input type="radio" name="parqueadero" value="no" />
                                    SI
                                </label>
                            </div>
                            <div className="steps_container_form_parqueadero--cubierto">
                                <SectionTitle
                                    title={''}
                                    subtitle={'¿Tiene parqueadero cubierto?'}
                                    color={'#8512ff'}
                                />
                                <div className="steps_container_form_parqueadero--cubierto_content">
                                    <label className="steps_container_form--parqueadero--cubierto-item">
                                        <input type="radio" name="parqueadero" value="no" />
                                        No
                                    </label>
                                    <label className="steps_container_form--parqueadero--cubierto-item">
                                        <input type="radio" name="parqueadero" value="no" />
                                        SI
                                    </label>
                                </div>
                            </div>
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