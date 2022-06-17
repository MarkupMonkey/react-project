import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(username? `https://api.github.com/users/${username}`: null, fetcher);
  function handleRefetch(){
    mutate();
  };
  return { data, error, onFetch: handleRefetch };
}