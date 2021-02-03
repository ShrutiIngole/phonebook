var data;
const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN": {
            //verify details against store
            data = state.users.filter(user=> {
                return user.user === action.user
            })
        
            if(!data[0]) {
                return state;
            }
            else {
            if (action.password === data[0].password) {
                return ({
                    ...state,
                    current: {
                        auth: true,
                        user: data[0].user,
                        role: data[0].role
                    }
                })
            }
            }
        }

        case "ADD_USER": {
            //send new details to store users array
            console.log("Trying to add new user")
            console.log("payload value " , action.payload)
            return ({
                ...state,
                users: [
                    ...state.users,
                    {...action.payload}
                ]
            })
        }

        case "LOGOUT": {
            return ({
                ...state,
                current: {
                    auth: false,
                    user: "",
                    role: ""
                }
            })
        }

        default: {
            return state
        }
    }
}

export default reducer;