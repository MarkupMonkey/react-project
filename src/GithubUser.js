import { useEffect } from 'react';
import { useGithubUser } from './useGithubUser';

export function GithubUser({ username }) {

  const { userData, onFetchUser } = useGithubUser();
  useEffect(() => {
    onFetchUser(username)
  }, [username, onFetchUser])
  return (
    userData && (
      <div>
        <h1>{userData.login}</h1>
        <h2>{userData.url}</h2>
      </div>
    )
  );
};