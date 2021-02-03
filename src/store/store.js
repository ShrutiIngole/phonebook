import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
    current: {
        auth: false,
        user: "",
        role: "",
    },
    users: [{
        id: "1",
        user: "abc",
        name: "Abc",
        password: "12345",
        phone: "1234567890",
        addr: "IN",
        role: "admin"
    },
    {
        id: "2",
        user: "xyz",
        name: "Xyz",
        password: "54321",
        phone: "9090909090",
        addr: "IN",
        role: "normal"
    }
    ]
}
const store = createStore(reducer, initialState)

export default store;