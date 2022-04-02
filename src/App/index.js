import './styles.scss';
import Header from '../components/Header';
import Home from '../containers/HomeContainer';
import DatosCliente from '../containers/DatosClienteContainer';
import Correo from '../containers/CorreoContainer';
import Direccion from '../containers/DireccionContainer';

import ExperienceAll from '../ExperienceAll/index';
import Portfolio from '../Portfolio/index';
import Footer from '../Footer/index';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/experience/all">
                        <Header />
                        <ExperienceAll />
                        <Footer />
                    </Route>
                    <Route path="/portfolio">
                        <Header />
                        <Portfolio />
                        <Footer />
                    </Route>
                    <Route path="/datos-direccion">
                        <Header />
                        <Direccion />
                    </Route>
                    <Route path="/datos-correo">
                        <Header />
                        <Correo />
                    </Route>
                    <Route path="/datos-cliente">
                        <Header />
                        <DatosCliente />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
