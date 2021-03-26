import dummy from "./dummy";

export const state = {
  newAsn: {},
  processors: {
    123: {
      name: 'Tyson Foods Inc.',
      id: '123',
    },
    456: {
      name: `Smithfield Packaged Meats`,
      id: '456'
    },
    789: {
      name: `Hormel Foods Corp.`,
      id: '789',
    },
    101: {
      name: "Processor, Inc.",
      id: '101',
    },
  }, 
  haulers: {
    123: {
      name: "Hauler, Inc.",
      id: '123',
    },
    456: {
      name: `Jim's Trucks`,
      id: '456',
    },
    789: {
      name: `Susan's Hauling`,
      id: '789',
    }
  },
  locations: {
    123: {
      name: 'West Barn',
      id: '123',
    },
    456: {
      name: `East Barn 1`,
      id: '456',
    },
    789: {
      name: `East Barn 2`,
      id: '789',
    }
  },
  asns: {
    aaaa: dummy,
    bbbb: dummy,
    cccc: dummy,
  },
};
