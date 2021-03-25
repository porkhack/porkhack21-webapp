/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from "@emotion/react";

import { Dropdown } from "semantic-ui-react";
import { useOvermind } from "../../overmind";

function TopBar() {
  const { actions, state } = useOvermind();
  //  const skin = state.app.skin;
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        height: "100px",
        borderBottom: "1px solid #979797",
      }}
    >
      <svg
        css={{
          height: "50px",
          paddingLeft: "20px",
        }}
        src={"skins/farmer.svg"}
        alt="logo"
      />
      <div css={{ marginRight: 50 }}>
        <Dropdown text={state.view.Login.me}>
          <Dropdown.Menu>
            <Dropdown.Item
              icon="power"
              text="Logout"
              value="logout"
              onClick={actions.view.TopBar.logout}
            />
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default TopBar;
