import React from 'react'

import './Button.scss';

export const Button = ({ title }) => {
    return (
        <a className='button' href='/'>
            {title}
        </a>
    );
}