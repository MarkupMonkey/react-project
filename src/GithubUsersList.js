import GithubUser from "./GithubUser";
import { useState } from "react";

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
            {users.map((user, index) => (<GithubUser key={index} username={user}/>))}
        </>
    )
}