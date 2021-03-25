import _ from "lodash";
import tree from "./tree";
import dummy from "./dummy";

export async function initialize({ state, actions }, props) {
  await actions.oada.get({
    path: "/bookmarks/trellisfw/asns",
    tree,
  });
  await actions.oada.get({
    path: "/bookmarks/trellisfw/trading-partners",
    tree,
  });
  actions.pork.sortTradingPartners();
}

export function sortTradingPartners({ state, actions }) {
  let conn = state.oada.defaultConnection;
  let tps = state.oada[conn].bookmarks.trellisfw["trading-partners"];

  state.haulers = _.filter(tps, { type: "hauler" });
  state.processors = _.filter(tps, { type: "processors" });
  state.farmers = _.filter(tps, { type: "farmers" });
}
export async function editAsn({ state, actions }) {
  state.view.editAsn = true;
}

export async function addAsn({ state, actions }) {
  state.view.editAsn = true;
  await actions.oada.post({
    path: "/bookmarks/trellisfw/asns",
    data: dummy,
  });
}

export async function doneClicked({ state, actions }) {
  state.view.editAsn = false;
  await actions.oada.post({
    path: "/bookmarks/trellisfw/asns",
    data: dummy,
  });
}

export async function editAsnClosed({ state, actions }) {
  state.view.editAsn = false;
  await actions.oada.post({
    path: "/bookmarks/trellisfw/asns",
    data: dummy,
  });
}
