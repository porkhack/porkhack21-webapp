import {v1 as uuid} from 'uuid'
import _ from 'lodash';
import Promise from 'bluebird'
import tree from './tree'
import dummy from './dummy'

export default {
  async initialize({state, actions}, props) {
    await actions.oada.get({
      path: '/bookmarks/trellisfw/asns',
      tree,
    })
    await actions.oada.get({
      path: '/bookmarks/trellisfw/trading-partners',
      tree,
    })
    actions.pork.sortTradingPartners()
  },

  sortTradingPartners({state, actions}) {
    let conn = state.oada.defaultConnection;
    let tps = state.oada[conn].bookmarks.trellisfw['trading-partners'];

    state.haulers = _.filter(tps, {type: 'hauler'})
    state.processors = _.filter(tps, {type: 'processors'})
    state.farmers = _.filter(tps, {type: 'farmers'})

  },
  async editAsn({state, actions}) {
    state.view.editAsn = true;
  },

  async addAsn({state, actions}) {
    state.view.editAsn = true;
    await actions.oada.post({
      path:'/bookmarks/trellisfw/asns',
      data: dummy
    })

  },

  async doneClicked({state, actions}) {
    state.view.editAsn = false;
    await actions.oada.post({
      path:'/bookmarks/trellisfw/asns',
      data: dummy
    })

  },

  async editAsnClosed({state, actions}) {
    state.view.editAsn = false;
    await actions.oada.post({
      path:'/bookmarks/trellisfw/asns',
      data: dummy
    })

  }
}
