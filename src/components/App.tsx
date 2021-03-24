import React, { useCallback, useState } from "react";
import { useOvermind } from "../overmind";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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

  return (
    <div className={classes.root}>
      <Typography>Hello!</Typography>
    </div>
  );
};

export default App;
