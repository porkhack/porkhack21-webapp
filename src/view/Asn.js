/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import moment from "moment";
import { useOvermind } from "../overmind";

import { Button, Icon, Label } from "semantic-ui-react";

import { AsnPlayer } from "./AsnPlayer";
import { AsnDetails } from "./AsnDetails";

export function Asn(props) {
  const { state, actions } = useOvermind();
  const asn = state.pork.asns[props.id] || {};
  let shipdate = moment(asn.shipdate).format("MM/DD/YYYY");
  let status = asn.status || ""
    .split(" ")
    .map((word) => word[0] ? word[0].toUpperCase() + word.substring(1) : '')
    .join(" ");
  let shipfrom = asn.scheduled?.shipfromlocation;

  return (
    <div
      css={css`
        display: grid;
        grid-template-rows: auto;

        background-color: var(--background);
        border-radius: 10px;
        margin-top: 1.5rem;
        padding: 1.5rem;
      `}
    >
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr auto auto;
          header {
            font-weight: bold;
            font-size: 2rem;
            padding-bottom: 0.5rem;
          }
        `}
      >
        <header>{`ASN ${props.id}`}</header>
        <Label color={status === "Arrived" ? "green" : "grey"} size={"huge"}>
          {status}
        </Label>
        <Button icon onClick={() => actions.pork.editAsn({id:props.id})} size="tiny">
          <Icon name="edit" />
        </Button>
      </div>

      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-gap: 0.5rem;
          margin: 1rem 0rem;
          justify-items: center;

          > div {
            margin-top: 0.25rem;
          }
        `}
      >
        <AsnPlayer type="farmer" player={asn.farmer} />
        <AsnPlayer type="hauler" player={asn.processor} />
        <AsnPlayer type="processor" player={asn.hauler} />

        <div
          css={css`
            display: grid;
            grid-template-rows: 0.2fr 0.8fr;
            width: 100%;
            header {
              font-weight: bold;
              font-size: 1rem;
              font-variant: small-caps;
              text-align: center;
            }
          `}
        >
          <header>Shipped</header>

          <div
            css={css`
              display: grid;
              grid-template-columns: 1fr 1fr;
              justify-items: center;
              label {
                font-size: 0.85rem;
                font-weight: bold;
              }
            `}
          >
            <div>
              <label>Date</label>
              <div>{shipdate}</div>
            </div>
            <div>
              <label>From</label>
              <div>{shipfrom?.name || "Unknown"}</div>
              <div>{shipfrom?.address || ""}</div>
            </div>
          </div>
        </div>
      </div>

      { state.view.selectedASNs && state.view.selectedASNs[props.id] ? 
          <div css={css`
            display: flex;
            flex-direction: column;
            width: 100%;
          `}>
            <AsnDetails id={props.id} />
            <Button icon onClick={() => actions.pork.unSelectAsn({id: props.id})}>
              <Icon name="up arrow" />
              Less Details
            </Button>
          </div>
        :
          <Button icon onClick={() => actions.pork.selectAsn({id: props.id})}>
            <Icon name="down arrow" />
            More Details
          </Button>
      }
    </div>
      
  );
}
