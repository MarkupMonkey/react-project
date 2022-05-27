import React from "react";

class Login extends React.Component {

    state = {
        username: '',
        password: '',
        remember: false,
    }

    handlerInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const type = event.target.type;
        const checked = event.target.checked;


        this.setState({
            [name]: type === 'checkbox' ? checked : value,
        })
    }

    onLogin = () => {
        console.log(this.state)
    }


    render() {
        return (
            <>
                <div>
                    <button onClick={this.onLogin} disabled={!this.state.username + !this.state.password}>login</button>
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