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

export async function editAsn({state, actions}) {
  state.view.editAsn = true;
}

export async function addANewAsn({state, actions}) {
  state.pork.newAsn = {};
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
}

export async function editAsnClosed({state, actions}) {
  delete state.pork.newAsn;
  state.view.editAsn = false;
  await actions.oada.post({
    path:'/bookmarks/trellisfw/asns',
    data: dummy
  })
}

export async function inputChanged({state, actions}, props) {
  console.log('props', props.evt.target);
  // Tell it how to transform the result
  let transforms = {
    count: (value) => ({value, units: 'count'}),
    weight: (value) => ({value, units: 'lbs'}),
    hauler: (value) => state.pork.haulers[value.id],
    processor: (value) => state.pork.processors[value.id],
    location: (value) => state.pork.locations[value.id],
  }

  // Compute the transform or just take the value;
  let result = transforms[props.type] ?
    transforms[props.type](props.evt.target.value)
  : props.evt.target.value;

  // Tell it where to put the result
  let mappings = {
    count: '/enroute/head',
    weight: '/enroute/weight/',
    haulers: '/hauler',
    processor: '/processor',
    status: '/status',
    shipdate: '/shipdate',
    location: '/scheduled/shipfromlocation',
  }

  pointer.set(state.pork, mappings[props.type], result);

}
