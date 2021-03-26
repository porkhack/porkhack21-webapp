import pointer from 'json-pointer'
import _ from 'lodash';
import tree from './tree'
import dummy from './dummy'

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

export function sortTradingPartners({state, actions}) {
  let conn = state.oada.defaultConnection;
  let tps = state.oada[conn].bookmarks.trellisfw["trading-partners"];

  state.haulers = _.filter(tps, {type: "hauler"})
  state.processors = _.filter(tps, {type: "processors"})
  state.farmers = _.filter(tps, {type: "farmers"})
}

export async function editAsn({state, actions}, props) {
  state.view.editAsn = true;
  state.pork.selectedAsn = props.id;
}

export async function addAsn({state, actions}) {
  state.pork.newAsn = {};
  state.pork.selectedAsn = 'new';
  state.view.editAsn = true;
  await actions.oada.post({
    path:"/bookmarks/trellisfw/asns",
    data: dummy
  })
}

export async function doneClicked({state, actions}) {
  state.view.editAsn = false;
  await actions.oada.post({
    path:'/bookmarks/trellisfw/asns',
    data: dummy
  })

  delete state.pork.selectedAsn;
  state.pork.newAsn = {};
}

export async function editAsnClosed({state, actions}) {
  await actions.oada.post({
    path:'/bookmarks/trellisfw/asns',
    data: dummy
  })

  state.view.editAsn = false;
  delete state.pork.selectedAsn;
  state.pork.newAsn = {};
}

export async function inputChanged({state, actions}, {type, value}) {
  console.log('props', type, value);
  // Tell it how to transform the result
  let transforms = {
    count: (val) => ({value:val, units: 'count'}),
    weight: (val) => ({value:val, units: 'lbs'}),
    hauler: (val) => state.pork.haulers[val],
    processor: (val) => state.pork.processors[val],
    location: (val) => state.pork.locations[val],
  }

  // Compute the transform or just take the value;
  let result = transforms[type] ?
    transforms[type](value)
  : value;

  // Tell it where to put the result
  let mappings = {
    count: '/enroute/head',
    weight: '/enroute/weight',
    hauler: '/hauler',
    processor: '/processor',
    status: '/status',
    shipdate: '/shipdate',
    location: '/scheduled/shipfromlocation',
  }

  let asn = _.cloneDeep(state.pork.newAsn);
  console.log(state.pork.newAsn, type, mappings[type], result)
  pointer.set(asn, mappings[type], result);
  state.pork.newAsn = asn;
}
