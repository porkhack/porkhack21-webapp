//Local Development Values
const devtoolsPort = 8787;
const oadaDomain = process.env.REACT_APP_OADA_DOMAIN || "https://localhost";
const websiteDomain = "https://localhost:" + parseInt(window.location.port, 10);
//const websiteDomain = 'http://vip3.ecn.purdue.edu:'+parseInt(window.location.port, 10);
const metadata = require("./dev_metadata.js");
const defaultNewConnectionURL = "https://farmer.porkhack2.openag.io";

export default {
  oadaDomain,
  devtoolsPort,
  websiteDomain,
  metadata,
  defaultNewConnectionURL,
};
