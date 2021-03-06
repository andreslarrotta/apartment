import './styles.scss';
import Header from '../components/Header';
import Home from '../containers/HomeContainer';
import DatosCliente from '../containers/DatosClienteContainer';
import Correo from '../containers/CorreoContainer';
import Direccion from '../containers/DireccionContainer';
import NumeroPiso from '../containers/NumeroPisoContainer';
import ZonasComunes from '../containers/ZonasComunesContainer';
import Parqueadero from '../containers/ParqueaderoContainer';
import MontoImmueble from '../containers/MontoImmuebleContainer';
import Foto from '../containers/FotoContainer';
import Ascensor from '../containers/AscensorContainer';
import Detalle from '../containers/DetalleContainer';

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
                    <Route path="/datos-detalles">
                        <Header />
                        <Detalle />
                    </Route>
                    <Route path="/datos-ascensor">
                        <Header />
                        <Ascensor />
                    </Route>
                    <Route path="/datos-foto-immueble">
                        <Header />
                        <Foto />
                    </Route>
                    <Route path="/datos-monto">
                        <Header />
                        <MontoImmueble />
                    </Route>
                    <Route path="/datos-parqueadero">
                        <Header />
                        <Parqueadero />
                    </Route>
                    <Route path="/datos-zonas-comunes">
                        <Header />
                        <ZonasComunes />
                    </Route>
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
