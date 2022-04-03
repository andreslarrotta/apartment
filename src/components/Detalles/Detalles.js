import React, { useState, useEffect } from 'react';

import './Detalles.scss';
import emplyIcon from '../../assets/Icons/emply.png';

export const Detalles = () => {
    const [dataStorage, setDataStorage] = useState({})
    const [vacio, setVacio] = useState(true)

    useEffect(() => {

        let dataHabi = localStorage.getItem('dataHabi');

        if (dataHabi) {
            setDataStorage(JSON.parse(dataHabi))
        }

        const isEmpty = Object.keys(JSON.parse(dataHabi)).length === 0;
        console.log('esta vacion', isEmpty);
        setVacio(isEmpty)

    }, [])

    return (
        <div className="detalles">
            {
                vacio
                    ? <div className='detalles_emply'>
                        <div className='detalles_emply_container'>
                            <img src={emplyIcon} />
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
                            dataStorage.parqueadero === true
                                ? <li>
                                    <span>Parqueadero</span>
                                    <p>SI</p>
                                </li>
                                : <li>
                                    <span>Parqueadero</span>
                                    <p>NO</p>
                                </li>
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
                            dataStorage.ascensor === true
                                ? <li>
                                    <span>Ascensor</span>
                                    <p>SI</p>
                                </li>
                                : <li>
                                    <span>Ascensor</span>
                                    <p>NO</p>
                                </li>
                        }
                    </ul>
            }
        </div>
    );
}
