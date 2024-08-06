import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import './App.css';
import {
  PublicClientApplication,
  EventType,
  EventMessage,
  AuthenticationResult,
} from '@azure/msal-browser';
import { msalConfig } from './config/authConfig';
import { MsalProvider } from '@azure/msal-react';

// const msalInstance = new PublicClientApplication(msalConfig);

// msalInstance.initialize();

// const activeAccount = msalInstance.getActiveAccount();

// if (!activeAccount) {
//   //Account selection
//   const accounts = msalInstance.getAllAccounts();
//   if (accounts.length > 0) {
//     msalInstance.setActiveAccount(account[0]);
//   }
// }

// msalInstance.addEventCallback((e) => {
//   if (e.eventType === EventType.LOGIN_SUCCESS && e.payload) {
//     const authenticationResult = e.payload;
//     const account = authenticationResult.account;
//     msalInstance.setActiveAccount(account);
//   }
// });

// msalInstance.enableAccountStorageEvents();

function App() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   msalInstance.handleRedirectPromise().then((response) => {
  //     if (response && response.account) {
  //       //user is authenticated, you can proceed to the app
  //       navigate('/dashboard', { replace: true });
  //     }
  //   });
  //   // check if user is already signed in
  //   const account = msalInstance.getActiveAccount();
  //   if (account) {
  //     // User is already signed in, you can proceed to the app
  //     navigate('/dashboard', { replace: true });
  //   } else {
  //     msalInstance.initialize();
  //   }
  // }, []);

  return (
    <>
      <MsalProvider instance={msalInstance}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MsalProvider>
    </>
  );
}

export default App;
