import React from "react";

class Login extends React.Component {

    state = {
        username: '',
        password: '',
        remember: false,
    }

    handlerInputChange = (event) => {
        const {value, name, type, checked} = event.target

        this.setState({
            [name]: type === 'checkbox' ? checked : value,
        })
    }

     onLogin = () => {
        console.log(this.state)
    }

    handlerResetState = () => {
        this.setState({
            username: '',
            password: '',
            remember: false
        })
    }



    render() {
        const LoginStyle={
            backgroundColor: this.state.password.length >= 8 ? 'green' : 'red',
        }
        return (
            <>
                <div >
                    <button style={LoginStyle} onClick={this.onLogin} disabled={!this.state.username + !this.state.password}>login</button>
                </div>
                <div >
                    <input name="username" value={this.state.username} onChange={this.handlerInputChange} />
                    <input name="password" type="password" value={this.state.password} onChange={this.handlerInputChange} />
                    <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handlerInputChange} />
                </div>
                <div>
                    <button onClick={this.handlerResetState}>reset</button>
                </div>
            </>
        )
    }
}

export default Login;