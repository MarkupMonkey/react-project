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

    onLogin = (event) => {
        this.setState({

        })
    }

    handlerResetState = (event) => {
        this.setState({
            username: '',
            password: '',
            remember: false
        })
    }

    componentDidUpdate() {
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
                <div>
                    <button onClick={this.handlerResetState}>reset</button>
                </div>


            </>
        )
    }
}

export default Login;