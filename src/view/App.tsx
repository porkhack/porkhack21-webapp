import React, { useCallback, useState } from "react";
import { useOvermind } from "../overmind";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
//import Typography from "@material-ui/core/Typography";
import Login from './Login'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
  })
);

const App = () => {
  const { state, actions } = useOvermind();
  const classes = useStyles();

  if (!state.view.Login.loggedIn) {
    return <Login />
  }

  return (
    <div className={classes.root}>
      Hello!
    </div>
  );
};

export default App;
