import {
  ListItem,
  Avatar,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function DexListItem(props) {
  function fixNames(name) {
    if (name === "nidoran-f") {
      return (name = "Nidoran");
    }
    if (name === "nidoran-m") {
      return (name = "Nidoran");
    } else {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  }
  

  return (
    <Fragment>
      <Link to={`/${props.name}`}>
      <ListItem>
        <ListItemButton>
          <Avatar
            src={`https://img.pokemondb.net/sprites/home/normal/${props.name}.png`}
            sx={{ paddingRight: "20px", width: 56, height: 56 }}
          />
          <ListItemText
            primary={fixNames(props.name)}
          />
          {/* <ListItemText secondary={`${props.firstType}/${props.secondType}`} sx={{ textAlign: 'end' }} /> */}
        </ListItemButton>
      </ListItem>
      <Divider />
      </Link>
    </Fragment>
  );
}

export default DexListItem;
