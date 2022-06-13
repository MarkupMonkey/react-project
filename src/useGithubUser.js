import { useState } from 'react';

export const useGithubUser = () => {
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(false);
    const [userData, setUserData] = useState();

    const fetchUser = async (username) => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`https://api.github.com/users/${username}`);
            const data = await res.json();
            setUserData(data);
        } catch (err) {
            setError(error);
            setUserData(null);
        } finally {
            setLoading(false);
        }
    };

    return {
        userData,
        error,
        loading,
        onFetchUser: fetchUser
    };
}