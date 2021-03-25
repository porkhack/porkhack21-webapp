import _ from "lodash";
import { v1 as uuid } from "uuid";

export function onMyLocationClick({ actions }, coords) {
  if (!coords) return;
  const { latitude, longitude } = coords;
  actions.view.Map.zoomTo({ latitude, longitude, zoom: 15 });
}

export function onLocationChange({ state }, coords) {
  if (!coords) return;
  const { latitude, longitude } = coords;
  console.log("onLocationChange", coords);
  if (latitude == null || longitude == null) return;
  state.view.Map.location = { latitude, longitude };
}

export function onAddField({ actions }) {
  actions.view.Map.BoundaryDrawing.onStartDrawing();
}
export function onSaveField({ actions }) {
  actions.view.Modals.SaveField.open();
}
export function onCancelField({ state, actions }) {
  state.view.Map.editingField = null; //Stop editing if we were
  actions.view.Map.BoundaryDrawing.onStopDrawing();
}
export function onEditField({ actions, state }) {
  const currentField = state.view.FieldDetails.field;
  //Hide the current boundary
  state.view.Map.editingField = state.view.FieldDetails.fieldId;
  //Convert to drawing boundary: {<rand-id>: [lat, lng], ...}
  let boundary = {};
  let coors = _.get(currentField, "boundary.coordinates.0");
  if (coors.length > 0) coors.pop();
  _.forEach(coors || [], (coors) => {
    //TODO will not work with holes in fields etc
    boundary[uuid()] = [coors[1], coors[0]];
  });
  //Start drawing
  actions.view.Map.BoundaryDrawing.onStartDrawing({ boundary });
  //Close the details drawer
  actions.view.Map.unselectField();
}
export async function onResetCache({ actions }) {
  await actions.oada.resetCache();
  //Refresh the page
  //location.reload();
}
export async function onLogout({ actions }) {
  await actions.view.Login.logout();
}
