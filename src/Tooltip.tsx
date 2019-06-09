import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { FixedSizeList } from "react-window";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  section1: {
    margin: theme.spacing(3, 2)
  }
}));

function Row() {
  return (
    <ListItem button>
      <ListItemText
        primary={"User: 234324    Requests: 1002"}
        secondary={"hey"}
      />
    </ListItem>
  );
}

function TooltipContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              London
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              GB
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary" variant="body2">
          Total Requests: 324534
        </Typography>
      </div>
      <Divider variant="middle" />
      <div>
        <FixedSizeList height={100} width={360} itemSize={46} itemCount={1}>
          {Row}
        </FixedSizeList>
      </div>
    </div>
  );
}

export default TooltipContent;
