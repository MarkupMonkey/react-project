import React from "react";

class Login extends React.Component {

    state = {
        username: '',
        password: '',
        remember: false,
    }

    handlerInputChange = (event) => {
        const {value, name, type, checked } = event.target


        this.setState({
            [name]: type === 'checkbox' ? checked : value,
        })
    }

    handlerOnClick = () => {
        this.props.onLogin(this.state)
    }




    render() {
        return (
            <>
                <div>
                    <button onClick={this.handlerOnClick} disabled={!this.state.username + !this.state.password}>login</button>
                </div>
                <div>
                    <input name="username" value={this.state.username} onChange={this.handlerInputChange} />
                    <input name="password" type="password" value={this.state.password} onChange={this.handlerInputChange} />
                    <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handlerInputChange} />
                </div>

            </>
        )
    }
}

export default Login;