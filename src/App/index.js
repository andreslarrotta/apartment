import './styles.scss';
import Header from '../components/Header';
import Home from '../containers/HomeContainer';
import DatosCliente from '../containers/DatosClienteContainer';
import Correo from '../containers/CorreoContainer';
import Direccion from '../containers/DireccionContainer';
import NumeroPiso from '../containers/NumeroPisoContainer';

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
                    <Route path="/datos-piso">
                        <Header />
                        <NumeroPiso />
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
