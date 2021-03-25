import _state from "./state";
import * as _actions from "./actions";
import * as OperationDropdown from "./OperationDropdown";

export const state = {
  OperationDropdown: OperationDropdown.state,
  ..._state,
};
export const actions = {
  OperationDropdown: OperationDropdown.actions,
  ..._actions,
};
