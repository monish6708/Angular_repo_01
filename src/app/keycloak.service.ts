import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'angular-realm',
  clientId: 'angular-client'
});

export function initializeKeycloak(): Promise<boolean> {
  return keycloak.init({
    onLoad: 'login-required',   // forces login
    checkLoginIframe: false,
    pkceMethod: 'S256'
  });
}

export { keycloak };
