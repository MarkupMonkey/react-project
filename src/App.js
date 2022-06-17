import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import { Container } from './Container';
import { ClickCounter } from './ClickCounter';
import ShowGithubUser from './ShowGithubUser';

export function App() {

    return (
        <Container title='My Awesome App'>
            <ul>
                <li>
                    <Link to='/'>Welcome</Link>
                </li>
                <li>
                    <Link to='/counter'>Counter on click</Link>
                </li>
                <li>
                    <Link to='/users'>Users</Link>
                </li>
            </ul>
            <Routes>
                <Route path='/' element={<Welcome name='Monkey'/>}/>
                <Route path='/counter' element={<ClickCounter />}/>
                <Route path='/users/:username' element={<ShowGithubUser/>}/>
            </Routes>
        </Container>
    )
}