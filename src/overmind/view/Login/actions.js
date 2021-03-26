let config = require('../../../config').default;

export function onInitialize({ state, actions }) {
  let domain = window.localStorage["oada:domain"];
  let token = window.localStorage["oada:token"];
  domain = config.DOMAIN;
  token = config.TOKEN;
  if (domain) {
    state.view.Login.domain = domain;
  }
  if (domain && token) {
    //Auto login
    actions.view.Login.login({ token });
  }
}
export async function login({ state, actions }, { token }) {
  const myState = state.view.Login;
  let domain = myState.domain;
  myState.loading = true;
  domain = domain.match(/^http/) ? domain : "https://" + myState.domain;
  await actions.OADAManager.login({ domain, token });
  myState.loading = false;
  if (state.OADAManager.connected) {
    myState.loggedIn = true;
    //Save domain and token
    window.localStorage["oada:domain"] = myState.domain;
    window.localStorage["oada:token"] = state.OADAManager.token;
  }
}
export async function logout({ state, actions }) {
  const myState = state.view.Login;
  if (state.OADAManager.connected) {
    await actions.OADAManager.logout();
    delete window.localStorage["oada:domain"];
    delete window.localStorage["oada:token"];
  }
  myState.loggedIn = false;
}
export function domainChange({ state }, data) {
  const myState = state.view.Login;
  myState.domain = data.value;
}
export function viewDemo({ state }, data) {
  const myState = state.view.Login;
  myState.loggedIn = true;
}
