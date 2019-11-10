import React from 'react';
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: '', invalidEmail: '', invalidPassword: '', alert: 'login hideAlert'};
    };

    doLogin = (event) => {
        event.preventDefault();
        this.setState({invalidEmail: '', invalidPassword: ''});
        if (!this.state.email) {
            this.setState({invalidEmail: 'is-invalid'});
        }
        if (!this.state.password) {
            this.setState({invalidPassword: 'is-invalid'});
        }
        if (this.state.email && this.state.password) {
            if (this.state.email === 'edward.suwirya@enigmacamp.com' && this.state.password === '123') {
                const userInfo = {email: this.state.email};
                this.props.rubahSesiMasuk(true, userInfo);
            } else {
                this.setState({alert: ''})
            }
        }
    };

    onEmailInputChange = (event) => {
        this.setState({email: event.target.value});
    };

    onPasswordInputChange = (event) => {
        this.setState({password: event.target.value});
    };

    render() {
        const loginLabel = {emailAddressText: 'Email Address', passwordText: 'Password', buttonText: 'Login'};
        const {email, password, invalidEmail, invalidPassword, alert} = this.state;
        return (
            <div className='login main'>
                <div className="d-flex flex-column login container">
                    <div className="d-flex align-items-center login containerCenter">
                        <div className="d-flex justify-content-end login containerEnd">
                            <div className="card w-50 login backgroundColorCard">
                                <div className="card-body">
                                    <h2 className="login labelInput">My Awesome Project</h2>
                                    <br/>
                                    <div className={`alert alert-danger ${alert}`} role="alert">
                                        Invalid login
                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <label className="login labelInput"
                                                   htmlFor="exampleInputEmail1">{loginLabel.emailAddressText}</label>
                                            <input type="text"
                                                   className={`form-control ${invalidEmail} login inputText`}
                                                   id="exampleInputEmail1"
                                                   placeholder="Enter email" value={email}
                                                   onChange={this.onEmailInputChange}/>
                                            <div className="invalid-feedback">
                                                Please enter an email in the input.
                                            </div>
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
                                            <input type="password"
                                                   className={`form-control ${invalidPassword} login inputText`}
                                                   id="exampleInputPassword1"
                                                   onChange={this.onPasswordInputChange}
                                                   value={password}
                                                   placeholder="Password"/>
                                            <div className="invalid-feedback">
                                                Please enter your password in the input.
                                            </div>
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