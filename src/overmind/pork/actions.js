import pointer from "json-pointer";
import _ from "lodash";
import trees from "@pork/trees";
import ksuid from 'ksuid';

export async function initialize({ state, actions }, props) {
  await actions.oada.get({
    path: "/bookmarks/trellisfw/asns",
    tree: trees.asn,
    watch: { actions: [actions.pork.mapAsns] },
  });
  actions.pork.mapAsns();

  await actions.oada.get({
    path: "/bookmarks/trellisfw/trading-partners",
    tree: trees["trading-partner"],
  });
  actions.pork.sortTradingPartners();

  await actions.oada.get({
    path: "/bookmarks/trellisfw/locations",
    tree: trees["location"],
  });

  state.pork.locations = _.pickBy(
    state.oada[state.oada.defaultConn].bookmarks.trellisfw["locations"],
    (_, k) => k[0] !== "_"
  );
}

export function mapAsns({ state, actions }) {
  console.log("calling mapasns");
  let conn = state.oada.defaultConn;
  let asns = state.oada[conn].bookmarks.trellisfw["asns"];

  Object.keys(asns["day-index"]).forEach((date) => {
    if (date.charAt(0) === "_") return;
    Object.keys(asns["day-index"][date]).forEach((key) => {
      if (key.charAt(0) === "_") return;
      if (Object.keys(asns["day-index"][date][key]).length < 3) return;
      state.pork.asns[key] = _.cloneDeep(asns["day-index"][date][key]);
    });
  });
}

export function sortTradingPartners({ state, actions }) {
  let conn = state.oada.defaultConn;

  let tps =
    !state.oada[conn] || !state.oada[conn].bookmarks
      ? []
      : state.oada[conn].bookmarks.trellisfw["trading-partners"];

  state.pork.haulers = _.pickBy(tps, (v) => v.partnertype === "hauler");
  state.pork.processors = _.pickBy(tps, (v) => v.partnertype === "processor");
  state.pork.farmers = _.pickBy(tps, (v) => v.partnertype === "farmer");
}

export async function editAsn({ state, actions }, props) {
  if (state.pork.asns[props.id]) {
    state.view.editAsn = true;
    state.pork.selectedAsn = props.id;
    state.pork.newAsn = _.cloneDeep(state.pork.asns[props.id]);
  }
}

export async function addAsn({ state, actions }) {
  state.pork.newAsn = {};
  state.pork.selectedAsn = "new";
  state.view.editAsn = true;

  // TODO: Add the ASN
}

export async function doneClicked({ state, actions }) {
  state.view.editAsn = false;

  const asn = state.pork.newAsn;
  if (!asn.id) {
    asn.id = ksuid.randomSync().string;
  }

  const day = asn.shipdate;
  if (!day || !day.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)) {
    console.log('ERROR: Your day (${day}) does not look like YYYY-MM-DD');
    return;
  }
  const path = `/bookmarks/trellisfw/asn/day-index/${day}/${asn.id}`;
  await actions.oada.put({
    path,
    tree,
    data: asn,
  });

  // TODO: Add ASN?

  delete state.pork.selectedAsn;
  state.pork.newAsn = {};
}

export async function editAsnClosed({ state, actions }) {
  // TODO: Update ASN

  state.view.editAsn = false;
  delete state.pork.selectedAsn;
  state.pork.newAsn = {};
}

export async function inputHaulerChanged({ state }, value) {
  state.pork.newAsn.farmer.haulerid = value;
  state.pork.newAsn.hauler.name = state.pork.haulers[value].name;
}

export async function inputProcessorChanged({ state }, value) {
  state.pork.newAsn.farmer.processorid = value;
  state.pork.newAsn.processor.name = state.pork.processors[value].name;
}

export async function inputLocationChanged({ state }, value) {
  let location = state.pork.locations[value];
  Object.assign(state.pork.newAsn.scheduled.shipfromlocation, {
    id: value,
    name: location.name,
    premiseid: location.premiseid,
  });
}

export async function inputChanged({ state, actions }, { type, value }) {
  // Tell it how to transform the result
  let transforms = {
    count: (val) => ({ value: val, units: "count" }),
    weight: (val) => ({ value: val, units: "lbs" }),
    departuretime: (val) => val,
    etatime: (val) => val,

    acount: (val) => ({ value: val, units: "count" }),
    aweight: (val) => ({ value: val, units: "lbs" }),
    arrivaltime: (val) => val,
  };

  // Compute the transform or just take the value;
  let result = transforms[type] ? transforms[type](value) : value;

  // Tell it where to put the result
  let mappings = {
    count: "/enroute/head",
    weight: "/enroute/weight",
    departuretime: "/enroute/departuretime",
    etatime: "/enroute/arrivaltime",
    acount: "/arrived/head",
    aweight: "/arrived/weight",
    arrivaltime: "/arrived/arrivaltime",
  };

  let asn = _.cloneDeep(state.pork.newAsn);
  pointer.set(asn, mappings[type], result);
  state.pork.newAsn = asn;
}

export async function selectAsn({ state, actions }, { id }) {
  if (!state.view.selectedASNs) {
    state.view.selectedASNs = {};
  }
  state.view.selectedASNs[id] = true;
}
export async function unSelectAsn({ state, actions }, { id }) {
  if (!state.view.selectedASNs) {
    state.view.selectedASNs = {};
  }
  state.view.selectedASNs[id] = false;
}
