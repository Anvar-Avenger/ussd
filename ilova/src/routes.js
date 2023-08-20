import { Switch, Route } from 'react-router-dom';

import Navbar from './views/components/navbar';
import Footer from './views/components/footer';
import Boshi from './views/sahifalar/bosh';
import Xizmat from './views/sahifalar/xizmat/tymx';
import Support from './views/sahifalar/support';
import Boshqaruv from './views/sahifalar/tizim/boshqaruv';

import Uzmobile from "./views/sahifalar/uzmobile";


export default function Router({isSecond = false}) {
    if (isSecond) {
        return (
            <Switch>
                <Uzmobile />
            </Switch>
        );
    }

    return (
        <div>
            <header className="header container mb-5 pb-5">
                <Navbar />
                <br />
            </header>
            <Switch>
                <Route path="/" exact component={Boshi} />
                <Route path="/kodlar">
                    <Xizmat />
                </Route>
                <Route path="/tizim">
                    <Boshqaruv />
                </Route>
                <Route path="/yordam">
                    <Support />
                </Route>
            </Switch>

            {/* Saytning pastki qismi */}
            <Footer />
        </div>
    )
}