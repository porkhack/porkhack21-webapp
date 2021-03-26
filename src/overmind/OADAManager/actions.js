import config from "../../config";

export async function connect({ actions, state, effects }, { domain, token }) {
  const myState = state.OADAManager;
  if (token) myState.token = token;
    //token = await myActions.getToken(domain);
  return actions.oada
    .connect({
      token,
      domain: domain,
      options: config.OPTIONS,
      cache: false,
      concurrency: 1,
    })
    .then((response) => {
      if (!response.error) {
        myState.currentConnection = response.connectionId;
        myState.token = response.token;
//        myState.token = config.TOKEN;
        myState.connected = true;
        //Unselect local opeation
      }
      return response;
    });
}

export async function logout({ actions, state }) {
  const myState = state.OADAManager;
  const { currentConnection: connection_id } = myState;
  delete myState.token;
  await actions.oada.disconnect({ connection_id });
}

export async function getUserInfo({ actions, state }) {
  const myState = state.OADAManager;
  const { currentConnection: connection_id } = myState;
  let requests = [
    {
      path: "/users/me",
    },
  ];
  let me = await actions.oada.get({ requests, connection_id });

  state.view.Login.me = me && me.data && me.data.username;
}

export async function login({ actions, state }, { domain, token }) {
  const myState = state.OADAManager;
  const myActions = actions.OADAManager;
  myState.domain = domain;
  const { error } = await myActions.connect({ domain, token });
  if (!error) {
    await myActions.getUserInfo();
    await actions.pork.initialize();
  }
}
