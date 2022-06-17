import { useState } from "react";
import {Link, Outlet} from 'react-router-dom';

export function GithubUsersList() {
    const [user, setUser] = useState('');
    const [users, setUsers] = useState([]);

    const handleInputChange = (event) => {
        setUser(event.target.value);
    };

    const handleAddUser = () => {
        setUsers((state) => [...state, user]);
    };

    return (
        <>
            <input name="user" onChange={handleInputChange} />
            <button onClick={handleAddUser}>Add user</button>
            {users.map((user, index) => (<Link key={index} to={user}>USER: {user}</Link>))}
            <Outlet/>
        </>
    )
}