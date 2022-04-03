import React from 'react'

import './Button.scss';

export const Button = ({ title }) => {
    return (
        <button className='button' href='/'>
            {title}
        </button>
    );
}