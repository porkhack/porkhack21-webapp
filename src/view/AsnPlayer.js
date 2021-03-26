/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";

import { Icon } from "semantic-ui-react";

function AsnCerts(cert) {
  let color;
  let certresult = cert?.pac?.result.toLowerCase()

  if(certresult == "valid"){
    color = "green"

  // If is it anything else besides valid (but still a string)
  }else if(typeof certresult == 'string' || certresult instanceof String){
    color = "red"

  // Basically if it does not exist
  }else{
    color = "grey"
  }

  return (
    <div
      css={css`
        color: ${color};
      `}
    >
      <Icon name="certificate"></Icon>
      {cert.certtype}
    </div>
  );
}

export function AsnPlayer({ type, player }) {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        background-color: #f5e1e1;
        justify-items: center;
        width: 100%;
        border-radius: 1rem;
        padding: 0.5rem;
      `}
    >
      <div
        css={css`
          > header {
            font-weight: bold;
            font-size: 1rem;
            font-variant: small-caps;
          }
        `}
      >
        <header>{type}</header>
        <div>{player.name}</div>
        <div>{player.address || ""}</div>
      </div>

      <div
        css={css`
          grid-template-rows: auto;
          align-self: center;
        `}
      >
        {Object.values(player.certifications || {}).map((c) => AsnCerts(c))}
      </div>
    </div>
  );
}
