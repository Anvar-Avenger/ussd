import { BrowserRouter, Switch } from 'react-router-dom';

import Router from './routes';


export default function Ilova() {
    return (
        <BrowserRouter>
            <Switch>
                <Router />
            </Switch>
        </BrowserRouter>
    )
}