import './styles.scss';
/* import logo from '../assets/andres_larrotta_logo.png';*/


const ItemPortfolio = ({ port }) => {
    return (
        <div className="item_portfolio">
            <div className="item_portfolio_img">
                <img src={port.image} alt={port.title}/>
            </div>
            <div className="item_portfolio_text">
                <h3>{port.title}</h3>
                <p>{port.description}</p>
            </div>
        </div>
    );
}

export default ItemPortfolio;
