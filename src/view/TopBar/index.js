/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";

import { Dropdown } from "semantic-ui-react";
import { useOvermind } from "../../overmind";

import { ReactComponent as Farmer } from "../../svg/farmer.svg";

function TopBar() {
  const { actions, state } = useOvermind();

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 0.25fr 1fr 0.25fr;
        justify-items: center;
        align-items: center;
        background: var(--header-background);
        color: var(--header-color);
      `}
    >
      <Farmer
        css={css`
          width: 3em;
          max-width: 50px;
          padding-left: 10px;
          justify-self: left;
        `}
      />
      <h1>ASN Manager</h1>
      <div
        css={css`
          margin-right: 50px;
          justify-self: right;
          min-width: 100px;
          min-height: 30px;
          font-size: 1.6em;
          text-decoration: underline;
        `}
        onClick={actions.view.TopBar.toggleUser}
      >
      {state.view.Login.me ? state.view.Login.me : 'Frank Farmer' }
    {/*
      <Dropdown text={state.view.Login.me} direction="left">
        <Dropdown text={state.view.Login.me} direction="left">
          <Dropdown.Menu>
            <Dropdown.Item
              icon="power"
              text={state.view.Login.me}
              value="logout"
              onClick={actions.view.TopBar.toggleUser}
            />
          </Dropdown.Menu>
        </Dropdown>
    */}
      </div>
    </div>
  );
}

export default TopBar;
