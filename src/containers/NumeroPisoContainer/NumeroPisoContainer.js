import React from 'react'

import './NumeroPisoContainer.scss';
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'

export const NumeroPisoContainer = () => {
    return (
        <section className="steps">
            <div className="steps_container">
                <div className="steps_container_state">
                    aqui va el estado de los pasos
                </div>
                <div className="steps_container_content">
                    <SectionTitle
                        title={'Numero de piso'}
                        subtitle={'donde se encuentra el apartamento'}
                        color={'#8512ff'}
                    />
                    <div className="steps_container_form">
                        <div className="steps_container_form--pisos">
                            <select name="select">
                                <option value="value1">1</option>
                                <option value="value2" selected>2</option>
                                <option value="value3">3</option>
                            </select>
                            Piso
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