import { useState, useEffect } from 'react';
import './styles.scss';
/* import logo from '../assets/andres_larrotta_logo.png';*/

//components
import ItemMenu from './ItemMenu/index';

const Menu = ({ visible, eventTabButton }) => {
    // state
    const [changeTabButton, setChangeTabButton] = useState(visible);

    const handleChangeToView = async (event) => {
        setChangeTabButton(event)
    } // handleChangeToView

    useEffect(() => {
        eventTabButton(changeTabButton)
    }, [changeTabButton])

    return (
        <ul>
            <ItemMenu text="WEB DESIGN" active={visible === 'WEB DESIGN' ? true : false} handleTab={handleChangeToView} />
            <ItemMenu text="WEB DEVELOP" active={visible === 'WEB DEVELOP' ? true : false} handleTab={handleChangeToView} />
            <ItemMenu text="E-COMMERCE" active={visible === 'E-COMMERCE' ? true : false} handleTab={handleChangeToView} />
        </ul>

    );
}

export default Menu;
