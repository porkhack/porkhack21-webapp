export function onAdd({ state, actions }) {
  const myState = state.view.TopBar.OperationDropdown;
  myState.open = false;
  return actions.view.Modals.NewOperation.open();
}
export function onChange({ state }, { id }) {
  const myState = state.view.TopBar.OperationDropdown;
  myState.selected = id;
  myState.open = false;
}
export function onOpenChange({ state }, { open }) {
  const myState = state.view.TopBar.OperationDropdown;
  myState.open = open;
}
export function onSearch({ state }, { search }) {
  const myState = state.view.TopBar.OperationDropdown;
  myState.search = search;
}
