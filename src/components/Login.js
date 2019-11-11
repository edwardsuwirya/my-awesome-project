import React from 'react';
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            invalidEmail: '',
            invalidPassword: '',
            alert: 'login hideAlert',
            hideEmail: '',
            hidePassword: 'hideInput',
            notificationMessage: ''
        };
    };

    doLogin = (event) => {
        event.preventDefault();

        if (!this.state.password) {
            this.setState({invalidPassword: 'is-invalid'});
        }
        if (this.state.email && this.state.password) {
            if (this.state.email === 'edward.suwirya@enigmacamp.com' && this.state.password === '123') {
                const userInfo = {email: this.state.email};
                this.props.rubahSesiMasuk(true, userInfo);
                this.props.history.push({
                    pathname: '/protected/main'
                })
            } else {
                this.setState({alert: '', notificationMessage: 'Invalid Password'})
            }
        }
    };

    onEmailInputChange = (event) => {
        this.setState({email: event.target.value});
    };

    onPasswordInputChange = (event) => {
        this.setState({password: event.target.value});
    };

    onHandleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (!this.state.email) {
                this.setState({invalidEmail: 'is-invalid'});
            } else {
                if (this.state.email === 'edward.suwirya@enigmacamp.com') {
                    this.setState({
                        invalidEmail: '',
                        invalidPassword: '',
                        alert: 'login hideAlert',
                        hideEmail: 'login hideInput',
                        hidePassword: ''
                    })
                } else {
                    this.setState({alert: '', notificationMessage: 'We do not know you'});
                }
            }

        }
    };

    render() {
        const loginLabel = {emailAddressText: 'Email Address', passwordText: 'Password', buttonText: 'Login'};
        const {email, password, invalidEmail, invalidPassword, alert, hideEmail, hidePassword, notificationMessage} = this.state;
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
                                        {notificationMessage}
                                    </div>
                                    <div>
                                        <div className={`form-group ${hideEmail}`}>
                                            <label className=" login labelInput"
                                                   htmlFor=" exampleInputEmail1">{loginLabel.emailAddressText}</label>
                                            <input type=" text"
                                                   className={`form-control ${invalidEmail} login inputText`}
                                                   id=" exampleInputEmail1"
                                                   placeholder=" Enter email" value={email}
                                                   onChange={this.onEmailInputChange}
                                                   onKeyPress={this.onHandleKeyPress}/>
                                            <div className=" invalid-feedback">
                                                Please enter an email in the input.
                                            </div>
                                            <small id=" emailHelp" className=" form-text text-muted">We'll never share
                                                your
                                                email
                                                with
                                                anyone
                                                else.
                                            </small>
                                        </div>
                                        <div className={`form-group login ${hidePassword}`}>
                                            <label className=" login labelInput"
                                                   htmlFor=" exampleInputPassword1">{loginLabel.passwordText}</label>
                                            <input type="password"
                                                   className={`form-control ${invalidPassword} login inputText`}
                                                   id=" exampleInputPassword1"
                                                   onChange={this.onPasswordInputChange}
                                                   value={password}
                                                   placeholder=" Password"/>
                                            <div className=" invalid-feedback">
                                                Please enter your password in the input.
                                            </div>
                                        </div>
                                        <button type=" submit"
                                                className={`btn btn-primary login inputButton ${hidePassword}`}
                                                onClick={this.doLogin}>{loginLabel.buttonText}</button>
                                    </div>
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