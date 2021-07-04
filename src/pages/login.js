import React from 'react';
import { Form, Text } from 'informed';

import useToken from "../hooks/useToken";
import { login } from "../apiRequest/auth";
import { useHistory } from 'react-router-dom';

export default function Login() {

  const history = useHistory();
  const { setToken } = useToken();

  const handleSubmit = ({ username, password }) => {
    const data = {
      username,
      password
    };

    login({ data }).then(({ data }) => {
      setToken(data.accessToken);
      history.push('/');
    }).catch(({ response }) => {
      const errorMessage = response.status === 401 ? response.statusText : "Something was wrong!";
      alert(errorMessage);
    });
  };

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="columns is-centered">
          <Form onSubmit={handleSubmit} className="box" autoComplete="off">
            <h1 className="title">Login</h1>
            <div className="field">
              <label><span className="label">Phone Number</span>
                <div className="control">
                  <Text field="username" type="text" placeholder="e.g. johndoe" className="input" required />
                </div>
              </label>
            </div>
            <div className="field">
              <label><span className="label">Password</span>
                <div className="control">
                  <Text field="password" type="password" placeholder="*******" className="input" required />
                </div>
              </label>
            </div>

            <div className="field">
              <div className="control">
                <button type="submit" className="button is-black is-fullwidth">
                  Login
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}
