import React from 'react';
import { Container } from './Container';
import GithubUser from './GithubUser';

export function App() {

    return (
        <Container title='My App'>
            <GithubUser username='markupmonkey' />
        </Container>
    )
}