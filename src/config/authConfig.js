import { LogLevel } from '@azure/msal-browser';
/**
 * Configuration object to be passed to MSAL instance on creation.
 */
export const msalConfig = {
  auth: {
    clientId: '5080ed4e-0884-477e-961b-faff6e6d6b15',
    authority:
      'https://login.microsoftonline.com/b1d7c60c-5f96-4440-a243-b0f30cb0eb26      ',
    redirectUri: `${window.location.origin}/dashboard`, //eg: ${window.location.origin}/Dashboard
    postLogoutRedirectUri: '/',
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: 'sessionStorage', // "sessionStorage" or"localStorage"
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
    allowNativeBroker: false,
  },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 */
export const loginRequest = {
  scopes: ['Files.Read'],
};

/**
 * An optional silentRequest object can be used to achieve silent SSO
 * between applications by providing a "login_hint" property.
 */
export const silentRequest = {
  scopes: ['openid', 'profile'],
  loginHint: 'example@domain.net',
};
