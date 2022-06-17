import { useGithubUser } from "./useGithubUser";

const GithubUser = ({ username }) => {
  const { data, error } = useGithubUser(username);

  return (
    <div>
      {error && <h2>Error!</h2>}
      {data && (
        <div>
          <h1>{data.login}</h1>
          <h2>{data.url}</h2>
        </div>
      )}
    </div>
  );
};

export default GithubUser; 