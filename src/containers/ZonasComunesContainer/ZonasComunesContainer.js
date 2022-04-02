import React from 'react'

import './ZonasComunesContainer.scss';
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'

import icon from '../../assets/Icons/bbq-svgrepo-com.svg';

export const ZonasComunesContainer = () => {
    return (
        <section className="steps">
            <div className="steps_container">
                <div className="steps_container_state">
                    aqui va el estado de los pasos
                </div>
                <div className="steps_container_content">
                    <SectionTitle
                        title={'Zonas Comunes'}
                        subtitle={'Selecciona si tienes alguna zona común'}
                        color={'#8512ff'}
                    />
                    <div className="steps_container_form">
                        <div className="steps_container_form--zonas">
                            <label className="steps_container_form--zona">
                                <input type="checkbox" id="cbox1" value="zona bbq" />
                                <img src={icon} alt="React Logo" />
                                Zona BBQ
                            </label>
                            <label className="steps_container_form--zona">
                                <input type="checkbox" id="cbox1" value="salón comunal" />
                                <img src={icon} alt="React Logo" />
                                Zona BBQ
                            </label>
                            <label className="steps_container_form--zona">
                                <input type="checkbox" id="cbox1" value="parque de juegos" />
                                <img src={icon} alt="React Logo" />
                                Parque de Juegos
                            </label>
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