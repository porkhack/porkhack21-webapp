import React from "react";
import { useOvermind } from "../overmind";
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
  const { state } = useOvermind();
  //  const classes = useStyles();

  if (!state.view.Login.loggedIn) {
    return <Login />;
  }

  return (
    <div>
      <TopBar />
      <AsnList />
      <EditAsnModal />
    </div>
  );
};

export default App;
