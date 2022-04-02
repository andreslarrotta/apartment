import React from 'react'

import './SectionTitle.scss';

export const SectionTitle = ({ title, subtitle, color }) => {
    const style = {
        color: color
    }
    return (
        <div className="section_title">
            <h1 className="section_title--h1" style={style}>{title}</h1>
            <h2 className="section_title--h2" style={style}>{subtitle}</h2>
        </div>
    );
}