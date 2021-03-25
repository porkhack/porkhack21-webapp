/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";

import { useOvermind } from "../overmind";
import { Button, Icon, Input } from "semantic-ui-react";
//import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
//import Typography from "@material-ui/core/Typography";
import Login from "./Login";
import AsnList from "./AsnList";
import TopBar from "./TopBar";
import EditAsnModal from "./EditAsnModal";
/*
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
  })
);
*/

const App = () => {
  const { state, actions } = useOvermind();
  //  const classes = useStyles();

  if (!state.view.Login.loggedIn) {
    return <Login />;
  }

  return (
    <div>
      <TopBar />

      <div
        css={css`
          display: grid;
          margin: 2rem 10%;
        `}
      >
        <div
          css={css`
            display: grid;
            grid-template-columns: 5fr 1fr;
            grid-gap: 5rem;

            div {
              width: 100%;
            }
          `}
        >
          <div>
            <Input
              icon="search"
              action="Search"
              iconPosition="left"
              placeholder="Search ASNs..."
            />
          </div>
          <Button icon onClick={actions.pork.addAsn}>
            <Icon name="add" />
            Add New ASN
          </Button>
        </div>
        <AsnList />
      </div>
      <EditAsnModal />
    </div>
  );
};

export default App;
