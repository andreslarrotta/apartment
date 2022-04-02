import React from 'react'

import './AscensorContainer.scss';
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'
import Steps from '../../components/Steps'

export const AscensorContainer = () => {
    return (
        <section className="steps">
            <div className="steps_container">
                <div className="steps_container_state">
                    <Steps id={8}/>
                </div>
                <div className="steps_container_content">
                    <SectionTitle
                        title={'¿Tiene Ascensor?'}
                        subtitle={''}
                        color={'#8512ff'}
                    />
                    <div className="steps_container_form">
                        <div className="steps_container_form_ascensor">
                            <div className="steps_container_form_ascensor--sino">
                                <label className="steps_container_form--ascensor-item">
                                    <input type="radio" name="ascensor" value="no" />
                                    No
                                </label>
                                <label className="steps_container_form--ascensor-item">
                                    <input type="radio" name="ascensor" value="no" />
                                    SI
                                </label>
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