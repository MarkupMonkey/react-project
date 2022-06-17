import React from 'react';
import { useState } from 'react';
import { Container } from './Container';
import GithubUser from './GithubUser';

export function App() {

    const [username, setUsername] = useState();
    const handleUsername = (event) => {
        event.preventDefault();
        setUsername(event.target.elements.username.value);
    }
    return (
        <Container title='My App'>
            <form onSubmit={handleUsername}>
                <input name='username' />
                <button type='submit'>Submit</button>
            </form>
            <GithubUser username={username} />
        </Container>
    )
}