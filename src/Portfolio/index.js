import './styles.scss';
//components
import ItemPortfolio from './ItemPortfolio/index';
import Info from '../assets/info/andres.json'

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="portfolio_container">
                <div className="portfolio_container_title">
                    <h2>portfolio</h2>
                </div>
                <div className="portfolio_container_items_portfolio">
                    {Info.portfolio.map((item, index) => {
                        return <ItemPortfolio port={item} key={index} />
                    })}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
