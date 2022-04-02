import React, { useEffect } from 'react';
import './StepsList.scss';

export const StepsList = ({ id }) => {
    console.log('hola', id);

    useEffect(() => {
        let items = document.querySelectorAll('.steps-list-item')
        items[id].classList.add('active')
    })


    return (
        <div className='steps-list'>
            <ul className='steps-list-ul'>
                <li className='steps-list-item'>
                    <a href='/datos-cliente'>
                        <div>
                            1.
                        </div>
                        Datos cliente
                    </a>
                </li>
                <li className='steps-list-item'>
                    <a href='/datos-correo'>
                        <div>
                            2.
                        </div>
                        Correo Electrónico
                    </a>
                </li>
                <li className='steps-list-item'>
                    <a href='/datos-direccion'>
                        <div>
                            3.
                        </div>
                        Dirección del Apartamento
                    </a>
                </li>
                <li className='steps-list-item'>
                    <a href='/datos-piso'>
                        <div>
                            4.
                        </div>
                        Numéro de piso
                    </a>
                </li>
                <li className='steps-list-item'>
                    <a href='/datos-zonas-comunes'>
                        <div>
                            5.
                        </div>
                        Zonas Comunes
                    </a>
                </li>
                <li className='steps-list-item'>
                    <a href='/datos-parqueadero'>
                        <div>
                            6.
                        </div>
                        Parqueadero
                    </a>
                </li>
                <li className='steps-list-item'>
                    <a href='/datos-monto'>
                        <div>
                            7.
                        </div>
                        Monto del apartamento
                    </a>
                </li>
                <li className='steps-list-item'>
                    <a href='/datos-foto-immueble'>
                        <div>
                            8.
                        </div>
                        Foto del immueble
                    </a>
                </li>
                <li className='steps-list-item'>
                    <a href='/datos-ascensor'>
                        <div>
                            9.
                        </div>
                        Ascensor
                    </a>
                </li>
                <li className='steps-list-item'>
                    <a href='/datos-detalles'>
                        <div>
                            10.
                        </div>
                        Detalles
                    </a>
                </li>
            </ul>
        </div>
    );
}
