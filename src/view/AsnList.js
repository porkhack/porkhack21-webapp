/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from "@emotion/react";

import { useOvermind } from "../overmind";
import { Asn } from "./Asn";

function AsnList() {
  const { state } = useOvermind();
  const asns = state.pork.asns;

  return (
    <div
      css={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {Object.keys(asns || {}).sort().map((key) => (
        <Asn id={key} key={key} />
      ))}
    </div>
  );
}

export default AsnList;
