import React from 'react';
import Login from "./components/Login";
import MainContent from "./components/MainContent";
import './app.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import MasterProduct from "./components/MasterProduct";
import MasterCategory from "./components/MasterCategory";


class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <PrivateRoute path='/protected/main/masterCategory' Component={MasterCategory}/>
                    <PrivateRoute path='/protected/main/masterProduct' Component={MasterProduct}/>
                    <PrivateRoute path='/protected/main' Component={MainContent}/>
                    <Route path="/"
                           render={(props) => <Login {...props}/>}
                    />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
