import React, { useState, useEffect } from 'react';

import './Detalles.scss';
import emplyIcon from '../../assets/Icons/emply.png';
import detallesIcon from '../../assets/Icons/detalles_icon.png';
import detallesIconClose from '../../assets/Icons/detalles_close.png';

export const Detalles = () => {
    const [dataStorage, setDataStorage] = useState({})
    const [vacio, setVacio] = useState(true)
    const [mobile, setMobile] = useState(false)
    const [open, setOpen] = useState(false)

    const updateDimensions = () => {
        let width = window.innerWidth
        if (width < 1000) {
            setMobile(true)
        }
        else {
            setMobile(false)
        }
    }

    const handleModal = () => {
        let containerModal = document.querySelector('.data_container')
        containerModal.classList.toggle('open')
        if (containerModal.classList.contains('open')) {
            setOpen(true)
        }
        else {
            setOpen(false)
        }
    }
    useEffect(() => {

        let dataHabi = localStorage.getItem('dataHabi');
        let width = window.innerWidth
        if (width < 1000) {
            setMobile(true)
        }
        else {
            setMobile(false)
        }
        if (dataHabi) {
            setDataStorage(JSON.parse(dataHabi))
        }

        const isEmpty = Object.keys(JSON.parse(dataHabi)).length === 0;
        setVacio(isEmpty)

        window.addEventListener('resize', updateDimensions)
    }, [])

    return (
        <>
            {
                mobile &&
                <div className="detalles_mobile_icon" onClick={handleModal}>
                    <img src={open ? detallesIconClose : detallesIcon} alt='menu mobile'/>
                </div>
            }
            <div className="detalles">
                {
                    vacio
                        ? <div className='detalles_emply'>
                            <div className='detalles_emply_container'>
                                <img src={emplyIcon} alt='apartamento vacio'/>
                                <p>
                                    La información de tu apartamento esta vacía completa todos los pasos
                                </p>
                            </div>
                        </div>
                        : <ul>
                            {
                                dataStorage.nombre &&
                                <li>
                                    <span>Nombre</span>
                                    <p>{dataStorage.nombre}</p>
                                </li>
                            }
                            {
                                dataStorage.correo &&
                                <li>
                                    <span>Correo electrónico</span>
                                    <p>{dataStorage.correo}</p>
                                </li>
                            }
                            {
                                dataStorage.direccion &&
                                <li>
                                    <span>Dirección</span>
                                    <p>{dataStorage.direccion}</p>
                                </li>
                            }
                            {
                                dataStorage.piso &&
                                <li>
                                    <span>Numero de piso</span>
                                    <p>{dataStorage.piso}</p>
                                </li>
                            }
                            <li>
                                {
                                    dataStorage.zonabbq || dataStorage.salon || dataStorage.parque
                                        ? <span>Zonas Comunes</span>
                                        : ''
                                }
                                {
                                    dataStorage.zonabbq &&
                                    <p>Zona BBQ</p>
                                }
                                {
                                    dataStorage.salon &&
                                    <p>Salón Comunal</p>
                                }
                                {
                                    dataStorage.parque &&
                                    <p>Parque de Juegos</p>
                                }
                            </li>
                            {
                                dataStorage.parqueadero
                                    ? dataStorage.parqueadero === true
                                        ? <li>
                                            <span>Parqueadero</span>
                                            <p>SI</p>
                                        </li>
                                        : <li>
                                            <span>Parqueadero</span>
                                            <p>NO</p>
                                        </li>
                                    : ''
                            }
                            {
                                dataStorage.parqueadero === true && dataStorage.cubierto === true
                                    ? <li>
                                        <span>Cubierto</span>
                                        <p>SI</p>
                                    </li>
                                    : dataStorage.parqueadero === true && dataStorage.cubierto === false
                                        ? <li>
                                            <span>Cubierto</span>
                                            <p>NO</p>
                                        </li>
                                        : ''

                            }
                            {
                                dataStorage.monto &&
                                <li>
                                    <span>Monto del apartamento</span>
                                    <p>{dataStorage.monto}</p>
                                </li>
                            }
                            {
                                dataStorage.foto &&
                                <li>
                                    <span>Imagen del apartamento</span>
                                    <p>{dataStorage.foto}</p>
                                </li>
                            }
                            {
                                dataStorage.ascensor
                                    ? dataStorage.ascensor === true
                                        ? <li>
                                            <span>Ascensor</span>
                                            <p>SI</p>
                                        </li>
                                        : <li>
                                            <span>Ascensor</span>
                                            <p>NO</p>
                                        </li>

                                    : ''
                            }
                        </ul>
                }
            </div>
        </>
    );
}
