import React from 'react';
import Login from "./components/Login";
import MainContent from "./components/MainContent";

class App extends React.Component {
    constructor() {
        super();
        this.state = {sudahLogin: false}
        // this.doChangeUserSession = this.doChangeUserSession.bind(this);
    }

    doChangeUserSession = (aksi) => {
        this.setState({sudahLogin: aksi});
    };
    // doChangeUserSession(aksi) {
    //     console.log(this);
    //     this.setState({sudahLogin: aksi});
    // }

    render() {
        if (this.state.sudahLogin) {
            return (
                <MainContent rubahSesiKeluar={this.doChangeUserSession}/>
            )
        } else {
            return (
                <div style={{height: '100vh', width: '100vw'}}>
                    <Login rubahSesiMasuk={this.doChangeUserSession}/>
                </div>
            )
        }
    }
}

export default App;
