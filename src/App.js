import React from 'react';
import Login from "./components/Login";
import MainContent from "./components/MainContent";
import './app.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {sudahLogin: false, userInfo: {}}
        // this.doChangeUserSession = this.doChangeUserSession.bind(this);
    }

    doChangeUserSession = (aksi, userInfo) => {
        this.setState({sudahLogin: aksi, userInfo});
    };
    // doChangeUserSession(aksi) {
    //     console.log(this);
    //     this.setState({sudahLogin: aksi});
    // }

    render() {
        const {sudahLogin, userInfo} = this.state;
        if (sudahLogin) {
            return (
                <MainContent rubahSesiKeluar={this.doChangeUserSession} userInfo={userInfo}/>
            )
        } else {
            return (
                <Login rubahSesiMasuk={this.doChangeUserSession}/>
            )
        }
    }
}

export default App;
