import React, {Component} from 'react';
import store from './store/store';

class NewUser extends Component {
    state = {
        user: "",
        password: "",
        addr: "",
        phone: "",
        role: ""
    }

    render () {
        const handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        const handleNew = (e) => {
            e.preventDefault();
            if(this.state.password.length >= 4) {
                if(this.state.phone.length === 10) {
                    if(this.state.role === "admin" || this.state.role === "normal" ) {
                        if( this.state.user !== "" && this.state.addr !== "") {
                            console.log("component state " ,this.state)
                            store.dispatch({
                                type: "ADD_USER",
                                payload: {
                                    id: Math.random(),
                                    user: this.state.user,
                                    name: this.state.name,
                                    phone: this.state.phone,
                                    password: this.state.password,
                                    addr: this.state.addr,
                                    role: this.state.role
                                }
                            })
                            window.alert("New user added!")
                            this.props.history.push("/details")
                        }
                        else {
                            window.alert("All the fields are required")
                        }
                    }
                    else {
                        window.alert("Role must be either admin or normal")
                    }
                }
                else {
                    window.alert("invalid phone number")
                }
            }
            else {
                window.alert("Password must be longer than 4 characters")
            }
        }

        return (
            (store.getState().current.role === "admin")
            ?
            (
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
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={e=>{handleChange(e)}}
                    />
                    <input
                        name="addr"
                        type="text"
                        placeholder="Address"
                        value={this.state.addr}
                        onChange={e=>{handleChange(e)}}
                    />
                    <input
                        name="phone"
                        type="number"
                        placeholder="Phone number"
                        value={this.state.phone}
                        onChange={e=>{handleChange(e)}}
                    />
                    <input
                        name="role"
                        type="text"
                        placeholder="Role: admin/normal"
                        value={this.state.role}
                        onChange={e=>{handleChange(e)}}
                    />
                </div>
                <button onClick={e=>{handleNew(e)}}>
                    Add User
                </button>
            </form>
            )
            :
            (
                <h3>You are not authorised to access this page</h3>
            )
        )
    }
}

export default NewUser;