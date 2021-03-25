module.exports = {
  shipdate: "2021-03-25",
  status: "arrived",

  scheduled: {
    shipfromlocation: {
      name: "West Barn",
      premiseid: "1939842",
      address: "Address",
    },
  },

  enroute: {
    head: { value: 200, units: "count" },
    weight: { value: 49000, units: "lbs" },
    locations: {
      "208eifojfe": { time: 123984934.43, lat: 50.1984, lon: -81.83495 },
    },
    departuretime: 9023029431.0394,
    arrivaltime: 1893083093.439,
  },

  arrived: {
    arrivaltime: 190849103423.934,
    head: { value: 199, units: "count" },
    weight: { value: 48500, units: "lbs" },
  },

  farmer: {
    name: "Ault Farms, Inc.",
    certifications: {
      "02jkfjf0i2ofk": {
        certtype: "PQA-PLUS",
        expiration: "2022-04-20",
        certificationid: "9381923834",
      },
    },
    processorid: "internal_farmerid_for_processor",
    haulerid: "internal_farmrerid_for_hauler",
  },
  hauler: {
    name: "Hauler, Inc.",
    address: "the address",

    certifications: {
      "902u390r2j3iof": {
        certtype: "TQA",
        expiration: "2022-04-25",
        certificationid: "2890183410942",
        pac: {
          pacid: "ijd20fijedlkfj",
          result: "valid",
        },
      },
      "902u390r2j3io3": {
        certtype: "TQA",
        expiration: "2022-04-25",
        certificationid: "2890183410942",
        pac: {
          pacid: "ijd20fijedlkfj",
          result: "valid",
        },
      },
    },
    processorid: "internal_hauler_id_1",
    farmerid: "internal_hauler_id_2",
  },
  processor: {
    name: "Processor, Inc.",
    farmerid: "internal_processor_id_1",
    haulerid: "internal_processor_id_2",
  },
};
