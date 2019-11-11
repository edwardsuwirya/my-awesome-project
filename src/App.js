import React from 'react';
import Login from "./components/Login";
import MainContent from "./components/MainContent";
import './app.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import {UTILS} from "./utils/authUtils";
import MasterProduct from "./components/MasterProduct";
import MasterCategory from "./components/MasterCategory";


class App extends React.Component {
    constructor() {
        super();
        this.state = {userInfo: {}}
        // this.doChangeUserSession = this.doChangeUserSession.bind(this);
    }

    doChangeUserSession = (aksi, userInfo) => {
        UTILS.auth.isAuthenticated = aksi;
        this.setState({userInfo});
    };

    render() {
        const {userInfo} = this.state;
        return (
            <BrowserRouter>
                <Switch>
                    <PrivateRoute path='/protected/main/masterCategory' Component={MasterCategory}
                                  rubahSesiKeluar={this.doChangeUserSession}
                                  userInfo={userInfo}/>
                    <PrivateRoute path='/protected/main/masterProduct' Component={MasterProduct}
                                  rubahSesiKeluar={this.doChangeUserSession}
                                  userInfo={userInfo}/>
                    <PrivateRoute path='/protected/main' Component={MainContent}
                                  rubahSesiKeluar={this.doChangeUserSession}
                                  userInfo={userInfo}/>
                    <Route path="/"
                           render={(props) => <Login {...props} rubahSesiMasuk={this.doChangeUserSession}/>}
                    />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
