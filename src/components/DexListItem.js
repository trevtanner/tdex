import {
  ListItem,
  Avatar,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from './DexListItem.module.css'

function DexListItem(props) {
  function fixNames(name) {
    if (name === "nidoran-f") {
      return (name = "Nidoran");
    }
    if (name === "nidoran-m") {
      return (name = "Nidoran");
    } 
    if (name === "mr-mime") {
      return (name = "Mr. Mime")
    }
    else {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  }

function fixNumber(number) {
  number = (number + 1);
  number = ('00' + number).slice(-3)
  return number
}

  return (
    <Fragment>
      <ListItem component={Link} to={`/${props.name}`}>
        <ListItemButton>
          <Avatar
            src={`https://img.pokemondb.net/sprites/home/normal/${props.name}.png`}
            sx={{ paddingRight: "20px", width: 56, height: 56 }}
          />
          <ListItemText
            primary={fixNames(props.name)}
            className={classes.name}
          />
          <ListItemText secondary={`# ${fixNumber(props.number)}`} sx={{ textAlign: 'end' }} />
        </ListItemButton>
      </ListItem>
      <Divider />
      </Fragment>
  );
}

export default DexListItem;
