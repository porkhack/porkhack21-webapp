import _state from './state'
import _actions from './actions'

import * as Login from './Login'

export const state = {
  Login: Login.state,
  ..._state
};
export const actions = {
  Login: Login.actions,
  ..._actions
}
export const onInitialize = async ({actions}) => {
  await actions.app.onInitialize();
  await actions.view.Login.onInitialize();
}
