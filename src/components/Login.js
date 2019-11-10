import React from 'react';
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
    };

    doLogin = (event) => {
        // event.preventDefault();
        this.props.rubahSesiMasuk(true);
    };

    render() {
        const loginLabel = {emailAddressText: 'Email Address', passwordText: 'Password', buttonText: 'Login'};
        return (
            <div className='login main'>
                <div className="d-flex flex-column login container">
                    <div className="d-flex align-items-center login containerCenter">
                        <div className="d-flex justify-content-end login containerEnd">
                            <div className="card w-50 login backgroundColorCard">
                                <div className="card-body">
                                    <h2 className="login labelInput">My Awesome Project</h2>
                                    <br/>
                                    <form>
                                        <div className="form-group">
                                            <label className="login labelInput"
                                                   htmlFor="exampleInputEmail1">{loginLabel.emailAddressText}</label>
                                            <input type="text" className="form-control login inputText"
                                                   id="exampleInputEmail1"
                                                   aria-describedby="emailHelp"
                                                   placeholder="Enter email"/>
                                            <small id="emailHelp" className="form-text text-muted">We'll never share
                                                your
                                                email
                                                with
                                                anyone
                                                else.
                                            </small>
                                        </div>
                                        <div className="form-group">
                                            <label className="login labelInput"
                                                   htmlFor="exampleInputPassword1">{loginLabel.passwordText}</label>
                                            <input type="password" className="form-control login inputText"
                                                   id="exampleInputPassword1"
                                                   placeholder="Password"/>
                                        </div>
                                        <button type="submit" className="btn btn-primary login inputButton"
                                                onClick={this.doLogin}>{loginLabel.buttonText}</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Login;