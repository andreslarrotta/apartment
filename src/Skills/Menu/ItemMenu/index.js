import './styles.scss';
/* import logo from '../assets/andres_larrotta_logo.png';*/

const ItemMenu = ({ text, active, handleTab }) => {
    return (
        <li className={`skills_menu_item ${active ? 'active' : ''}`} onClick={() => { handleTab(text) }}>{text}</li>
    );
}

export default ItemMenu;
