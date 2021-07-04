import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function NavBar() {

  const history = useHistory();

  const handleLogout = () => {
    history.push('/');
  };

  return (
    <nav className="navbar container">
      <Link className="navbar-item" to="/">Home</Link>
      <Link className="navbar-item" to="/vouchers/create">Create Voucher</Link>
      <div className="navbar-item buttons">
        <button className="button" onClick={handleLogout}>
          Logout
        </button>
      </div>

    </nav>
  );
}
