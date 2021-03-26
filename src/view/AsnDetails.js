/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { useOvermind } from "../overmind";
import moment from "moment";

export function AsnDetails({ id }) {
  const { state } = useOvermind();
  const asn = state.pork.asns[id];

  const displayScheduled = (asn) => {
    const loc = asn.scheduled.shipfromlocation;
    if (!loc) return "";
    const premise = loc.premiseid ? `(Premise: ${loc.premiseid})` : "";
    return (
      <div>
        <h3>Scheduled:</h3>
        {`Scheduled Ship From: ${asn.scheduled.shipfromlocation.name} ${premise}`}
        <hr />
      </div>
    );
  };

  const displayEnroute = (asn) => {
    const e = asn.enroute;
    const departure = e.departuretime
      ? "Departed: " + moment(e.departuretime, "X").fromNow()
      : "Not Departed";
    const arrival = e.arrivaltime
      ? "Expected Arrival: " + moment(e.departuretime, "X").fromNow()
      : "";
    return (
      <div>
        <h3>Enroute:</h3>
        {departure}
        <br />
        {arrival}
        <hr />
      </div>
    );
  };

  const displayArrived = (asn) => {
    const e = asn.arrived;
    const arrival = e.arrivaltime
      ? "Arrived: " + moment(e.arrivaltime, "X").fromNow()
      : "";
    return (
      <div>
        <h3>Arrived:</h3>
        {arrival}
        <hr />
      </div>
    );
  };

  const redhead =
    asn?.enroute?.head &&
    asn?.arrived?.head &&
    asn.enroute.head !== asn.arrived.head
      ? "color: red;"
      : "";

  return (
    <div
      css={css`
        flex-grow: 1;
        display: flex;
        flex-direction: row;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          min-width: 30%;
          margin: 20px;
        `}
      >
        <h3>Timeline:</h3>
        {asn.scheduled ? displayScheduled(asn) : ""}
        {asn.enroute ? displayEnroute(asn) : ""}
        {asn.arrived ? displayArrived(asn) : ""}
        <div
          css={css`
            font-size: 0.6em;
            color: #aaaaaa;
          `}
        >
          ID: {id}
        </div>
      </div>

      {!asn.enroute && !asn.arrived ? (
        ""
      ) : (
        <div
          css={css`
            min-width: 30%;
            margin: 20px;
          `}
        >
          <h3>Shipping Stats</h3>
          <div
            css={css`
              ${redhead}
            `}
          >
            {!(asn.enroute && asn.enroute.head)
              ? ""
              : `Head Shipped: ${asn.enroute.head.value}`}
            <br />
            {!(asn.arrived && asn.arrived.head)
              ? ""
              : `Head Received: ${asn.arrived.head.value}`}
          </div>
          <hr />
          <div>
            {!(asn.enroute && asn.enroute.weight)
              ? ""
              : `Weight Shipped: ${asn.enroute.weight.value} ${asn.enroute.weight.units}`}
            <br />
            {!(asn.arrived && asn.arrived.weight)
              ? ""
              : `Weight Received: ${asn.arrived.weight.value} ${asn.arrived.weight.units}`}
          </div>
        </div>
      )}
    </div>
  );
}
