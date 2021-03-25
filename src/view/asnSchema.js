//import { JSONSchema8 as Schema } from 'jsonschema8';

module.exports = {
  $id: "https://formats.openag.io/trellisfw/asn/porkhack/v1.schema.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  description: "Proposed ASN structure for Pork Hack 21",
  additionalProperties: true,
  definitions: {
    //--------------------------------
    // Time:
    day: {
      type: "string",
      pattern: "^[0-9]{4}-[0-9]{2}-[0-9]{2}$", // YYYY-MM-DD
    },
    timestamp: {
      type: "number", // unix timestamp, always GMT
    },

    //--------------------------------
    // Locations:
    address: {
      type: "string",
      // Todo: better definition
    },
    latlon: {
      type: "object",
      properties: {
        lat: { type: "number" },
        lon: { type: "number" },
      },
    },
    premiseid: {
      type: "string",
    },

    location: {
      anyOf: [
        { $ref: "#/definitions/address" },
        { $ref: "#/definitions/latlon" },
        { $ref: "#/definitions/premiseid" },
        {
          type: "object",
          properties: {
            name: {
              type: "string",
            },
          },
        },
      ],
    },

    //--------------------------------
    // Stats:
    head: {
      type: "object",
      properties: {
        value: { type: "number" },
        units: { type: "string", enum: ["count"] },
      },
    },
    weight: {
      type: "object",
      properties: {
        value: { type: "number" },
        units: { type: "string", enum: ["lbs", "kg"] },
      },
    },

    //--------------------------------
    // Certifications:
    pac: {
      // private automated certification (AGAPECert)
      type: "object",
      properties: {
        pacid: { type: "string" },
        result: {
          type: "string",
          enum: ["valid", "invalid"],
        },
        signatures: {
          type: "array",
          items: {
            type: "string", // each signature is a JWT
          },
        },
      },
    },
    certification: {
      type: "object",
      properties: {
        certtype: {
          type: "string",
          enum: ["TQA", "PQA-PLUS"],
        },
        certificationid: { type: "string" },
        expiration: { $ref: "#/definitions/day" },
      },
    },
    certifications: {
      type: "object",
      additionalProperties: { $ref: "#/definitions/certification" },
    },
  },
  properties: {
    status: {
      type: "string",
      // If you need to reschedule a load, cancel this ASN and make a new one.  That is why there is no "delayed" status.
      enum: ["scheduled", "canceled", "enroute", "arrived", "received"],
    },
    shipdate: { $ref: "#/definitions/day" },
    scheduled: {
      type: "object",
      properties: {
        shipfromlocation: { $ref: "#/definitions/location" },
      },
    },
    enroute: {
      type: "object",
      properties: {
        head: { $ref: "#/definitions/head" },
        weight: { $ref: "#/definitions/weight" },
        departuretime: { $ref: "#/definitions/timestamp" },
        arrivaltime: { $ref: "#/definitions/timestamp" },
        locations: {
          type: "object",
          // objects w/ lat, lon, time:
          additionalProperties: {
            allOf: [
              { $ref: "#/definitions/latlon" },
              {
                type: "object",
                properties: {
                  time: { $ref: "#/definitions/timestamp" },
                },
              },
            ],
          },
        },
      },
    },
    arrived: {
      type: "object",
      properties: {
        arrivaltime: { $ref: "#/definitions/timestamp" },
        head: { $ref: "#/definitions/head" },
        weight: { $ref: "#/definitions/weight" },
      },
    },
    farmer: {
      type: "object",
      properties: {
        name: { type: "string" },
        certifications: {
          type: "object",
          additionalProperties: { $ref: "#/definitions/certification" },
        },
        // Any internal ID's the farmer's system uses to identify processor or farmer:
        processorid: { type: "string" },
        haulerid: { type: "string" },
      },
    },
    hauler: {
      type: "object",
      properties: {
        name: { type: "string" },
        certifications: {
          type: "object",
          additionalProperties: { $ref: "#/definitions/certification" },
        },
        // Any internal ID's the farmer's system uses to identify processor or hauler:
        farmerid: { type: "string" },
        haulerid: { type: "string" },
      },
    },
    processor: {
      type: "object",
      properties: {
        name: { type: "string" },
        certifications: {
          type: "object",
          additionalProperties: { $ref: "#/definitions/certification" },
        },
        // Any internal ID's the farmer's system uses to identify farmer or hauler:
        farmerid: { type: "string" },
        haulerid: { type: "string" },
      },
    },
  },
  required: ["shipdate", "status"],
};
