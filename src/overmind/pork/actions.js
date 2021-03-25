import {v1 as uuid} from 'uuid'
import _ from 'lodash';
import Promise from 'bluebird'
import tree from './tree'

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

  }
}
