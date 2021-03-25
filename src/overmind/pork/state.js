import dummy from './dummy'

export default {

  processors: {
    '123': {
      name: 'Tyson Foods Inc.',
    },
    '456': {
      name: `Smithfield Packaged Meats`
    },
    '789': {
      name: `Hormel Foods Corp.`
    }

  }, 
  haulers: {
    '123': {
      name: 'Big Mac Trucking',
    },
    '456': {
      name: `Jim's Trucks`
    },
    '789': {
      name: `Susan's Hauling`
    }
  },
  locations: {
    '123': {
      name: 'West Barn',
    },
    '456': {
      name: `East Barn 1`
    },
    '789': {
      name: `East Barn 2`
    }
  },
  asns: {
    'aaaa': dummy,
    'bbbb': dummy,
    'cccc': dummy
  }

}
