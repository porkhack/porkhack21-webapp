/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from "@emotion/react";

import { Button, Icon } from "semantic-ui-react";
import { useOvermind } from "../overmind";
import moment from "moment";

function Asn(props) {
  const { state, actions } = useOvermind();
  const asn = state.pork.asns[props.id];
  let shipdate = moment(asn.shipdate).format("MM/DD/YYYY");
  let status = asn.status
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
  let haulerCerts = Object.values(
    (asn.hauler && asn.hauler.certifications) || {}
  ).map((c) => (
    <div style={{ color: "#00ff00" }}>
      <Icon color="green" name="certificate" />
      {c.certtype}
    </div>
  ));

  let processorCerts = Object.values(
    (asn.processor && asn.processor.certifications) || {}
  ).map((c) => (
    <div key={"proccert" + c.certificationid} style={{ color: "#00ff00" }}>
      <Icon color="green" name="certificate" />
      {c.certtype}
    </div>
  ));

  let farmerCerts = Object.values(
    (asn.farmer && asn.farmer.certifications) || {}
  ).map((c) => (
    <div key={"farmercert" + c.certificationid} style={{ color: "#00ff00" }}>
      <Icon color="green" name="certificate" />
      {c.certtype}
    </div>
  ));

  return (
    <div
      css={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
      }}
    >
      {`ASN ${props.id}`}
      <div>
        Hauler: {asn.hauler.name}
        {haulerCerts}
      </div>
      <div>
        Processor: {asn.processor.name}
        {processorCerts}
      </div>
      <div>
        Farmer: {asn.farmer.name}
        {farmerCerts}
      </div>

      <div>Ship Date: {shipdate}</div>
      <div>
        Status:
        <div style={{ color: status === "Arrived" ? "#00ff00" : "#ff0000" }}>
          {status}
        </div>
      </div>
      <Button icon onClick={actions.pork.editAsn}>
        <Icon name="edit" />
      </Button>
      <Button icon onClick={actions.pork.selectAsn}>
        <Icon name="down arrow" />
        More Details
      </Button>
    </div>
  );
}

function AsnList() {
  const { state, actions } = useOvermind();
  const asns = state.pork.asns;
  return (
    <div
      css={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Button icon onClick={actions.pork.addAsn}>
        <Icon name="add" />
        Add New ASN
      </Button>

      {Object.keys(asns || {}).map((key) => (
        <Asn id={key} key={key} />
      ))}
    </div>
  );
}

export default AsnList;
