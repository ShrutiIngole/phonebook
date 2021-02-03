import store from './store/store';
import { useHistory } from 'react-router-dom';

const Details = () => {
    let history = useHistory();
    const handleLogout = (e) => {
        e.preventDefault()
        store.dispatch({
            type: "LOGOUT"
        })
        history.push("/")
    }
    return (
        (store.getState().current.auth) 
        ?
        (
            <div className="details">
                <h3>{store.getState().current.user}'s phone book</h3>
                <table><tbody>
                    <tr>
                        <th>Name</th>
                        <th>Phone no</th>
                        <th>Address</th>
                    </tr>
                    {console.log(store.getState().users)}
                {store.getState().users.map(each=> {
                    console.log(each)
                    return(
                        <tr key={each.id}>
                            <td>{each.name}</td>
                            <td>{each.phone}</td>
                            <td>{each.addr}</td>
                        </tr>
                    )
                })}
                </tbody></table>
                <button onClick={e=>handleLogout(e)}>Log out</button>
            </div>
        )
        :
        (
            <h2>You are not authorized to access this page</h2>
        )
    )
}

export default Details;