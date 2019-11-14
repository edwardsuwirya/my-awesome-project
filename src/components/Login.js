import React from 'react';
import './login.css';
import {validateUserName,validatePassword} from "../api/user";

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
            notificationMessage: '',
            userId:'',
            userInfo:{}
        };
        this.passwordRef = React.createRef();
    };

    doLogin = async (event) => {
        event.preventDefault();

        if (!this.state.password) {
            this.setState({invalidPassword: 'is-invalid'});
        }
        if (this.state.userId && this.state.password) {

            const response = await validatePassword(this.state.userId,this.state.password);
            const data = await response.json();
            await this.setState({userInfo: data});

            if (this.state.userInfo.userId) {
                const userInfo = {email: this.state.userInfo.namaLengkap};
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

    onHandleKeyPress = async (event) => {
        if (event.key === 'Enter') {
            if (!this.state.email) {
                this.setState({invalidEmail: 'is-invalid'});
            } else {
                const response = await validateUserName(this.state.email);
                const data = await response.json();
                if (data.status==='ok') {
                    await this.setState({
                        invalidEmail: '',
                        invalidPassword: '',
                        alert: 'login hideAlert',
                        hideEmail: 'login hideInput',
                        hidePassword: '',
                        userId:data.id
                    });
                    this.passwordRef.current.focus();
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
                                            <input ref={this.passwordRef} type="password"
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