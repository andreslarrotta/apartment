import React, { useEffect } from 'react';
import './StepsList.scss';

export const StepsList = ({ id }) => {
    console.log('hola', id);

    useEffect(() => {
        let dataHabi = localStorage.getItem('dataHabi');
        let items = document.querySelectorAll('.steps-list-item')

        if (dataHabi) {
            let dataJson = JSON.parse(dataHabi)

            if (dataJson.nombre) {
                items[0].classList.add('fill')
            }
            if (dataJson.correo) {
                items[1].classList.add('fill')
            }
            if (dataJson.direccion) {
                items[2].classList.add('fill')
            }

            if (dataJson.piso) {
                items[3].classList.add('fill')
            }

            if (dataJson.zonabbq || dataJson.salon || dataJson.parque) {
                items[4].classList.add('fill')
            }

            if (dataJson.parqueadero === true || dataJson.parqueadero === false) {
                items[5].classList.add('fill')
            }
        }


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
                    <a href='/datos-direccion' disabled>
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
