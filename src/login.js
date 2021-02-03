import React, {Component} from 'react';
import store from './store/store';


class Login extends Component {
    state = {
        user: "",
        password: "",
        error: {
            password: "",
        },
    }

    render () {
        const handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        const handleLogin = (e) => {
            e.preventDefault();

            

            //validate password
            if(this.state.password.length < 5) {
                this.setState({
                    error: {
                        password: "Password must be longer than 4 characters!"
                    }
                })
            }
            else {
                this.setState({
                    error: {
                        password: ""
                    }
                })
            }

            if (!this.state.error.password) {
                console.log("Valid details, trying to log in")
                //dispatch action to store
                store.dispatch({
                    type: "LOGIN",
                    user: this.state.user,
                    password: this.state.password
                })
                if(store.getState().current.auth) {
                    window.alert("Logged in!")
                    this.props.history.push("/details")
                }
                else {
                    window.alert("Could not find user. Please retry login.")
                }
            }
            else {
                console.log("invalid details")
                window.alert(this.state.error.password)
            }
        }
        return(
            <form>
                <div>
                    <input required
                        name="user"
                        type="text"
                        placeholder="Username"
                        value={this.state.user}
                        onChange={e=>{handleChange(e)}}
                    />
                    <input required
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={e=>{handleChange(e)}}
                    />
                </div>
                <button onClick={e=>{handleLogin(e)}}>
                    Login
                </button>
            </form>
        )
    }
}

export default Login;