import { useGithubUser } from './useGithubUser';

export const GithubUser = ({ username }) => {
  const { userData } = useGithubUser(username);


  return (
    userData && (
      <div>
        <h1>{userData.login}</h1>
        <h2>{userData.url}</h2>
      </div>
    )
  );
};