import _state from './state'
import _actions from './actions'

import * as Login from './Login'
import * as TopBar from './TopBar'

export const state = {
  Login: Login.state,
  TopBar: TopBar.state,
  ..._state
};
export const actions = {
  Login: Login.actions,
  TopBar: TopBar.actions,
  ..._actions
}
export const onInitialize = async ({actions}) => {
  await actions.app.onInitialize();
  await actions.view.Login.onInitialize();
}
