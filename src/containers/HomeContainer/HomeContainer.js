import React from 'react'

import './HomeContainer.scss';
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'

export const HomeContainer = () => {
    const handleStart = () => {
        localStorage.setItem('dataHabi', '{}');
        window.location.href = '/datos-cliente'
    }
    return (
        <section className="home">
            <div className="home_container">
                <div className="home_container_column">
                    <div className='home_container_column_content'>
                        <SectionTitle
                            title={'Vende tu apartamento'}
                            subtitle={'Nos cuentas de tu inmueble y solicitas la oferta'}
                            color={'white'}
                        />
                        <div onClick={handleStart}>
                            <Button title={'Vender'} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}