import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import { Container } from './Container';
import { ClickCounter } from './ClickCounter';
import ShowGithubUser from './ShowGithubUser';

export function App() {

    return (
        <Container title='My Awesome App'>
            <Routes>
                <Route path='/' element={<Welcome name='Monkey' age={28} />} />
                <Route path='/counter' element={<ClickCounter />} />
                <Route path='/users/:username' element={<ShowGithubUser />}/>
            </Routes>
        </Container>
    )
}