import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  function LoginAD() {

  }
  
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a onClick={LoginAD}>Login</a>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
