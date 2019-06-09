import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

interface props {
  totalRequests: number;
  country: string;
  city: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: 400,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

function Row(props: any) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
}

function VirtualizedList(props: props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h5">
        {`Total Requests:  ${props.totalRequests}`}
      </Typography>
      <Typography gutterBottom variant="h6">
        {props.country}
      </Typography>
      <Typography gutterBottom variant="h6">
        {props.city}
      </Typography>
      <Divider />
      <FixedSizeList height={400} width={360} itemSize={46} itemCount={200}>
        {Row}
      </FixedSizeList>
    </div>
  );
}

export default VirtualizedList;
