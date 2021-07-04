import { useState } from 'react';

const TOKEN_KEY = 'auth_token'

export default function useToken() {
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY));

  return {
    setToken: userToken => {
      localStorage.setItem(TOKEN_KEY, userToken);
      setToken(userToken);
    },
    removeToken: () => {
      localStorage.removeItem(TOKEN_KEY);
      setToken();
    },
    token
  }
}
