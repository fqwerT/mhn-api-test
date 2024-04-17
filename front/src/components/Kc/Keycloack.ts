import Keycloak from "keycloak-js";
import jwt from "jwt-decode";
import { jwtDecode } from "jwt-decode";
import config from '../../config.json'
//@ts-ignore
const _kc = new Keycloak({
//   url: process.env.KEYCLOAK_BASE_URL,
//   realm: process.env.KEYCLOAK_REALM,
//   clientId: process.env.KEYCLOAK_CLIENT_ID,

  url: config.KEYCLOAK_BASE_URL,
  realm: config.KEYCLOAK_REALM,
  clientId: config.KEYCLOAK_CLIENT_ID,
});

const initKeycloak = (onAuthenticatedCallback) => {

  _kc
    .init({
      onLoad: "login-required",
      // для check sso в hidden iframe
      // onLoad: 'check-sso',
      // silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
      // checkLoginIframe: true
      pkceMethod: "S256",
      messageReceiveTimeout: 60000,
      checkLoginIframe: false,
    })
    .then((authenticated) => {
      if (!authenticated) {
        console.log("user is not authenticated..!");
      }
      onAuthenticatedCallback();
    })
    .catch(console.error);
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;
//@ts-ignore
const getUserData = () => jwtDecode(_kc.token);

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
  _kc.updateToken(5).then(successCallback).catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));

const KeyCloakService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
  getUserData,
};

export default KeyCloakService;
