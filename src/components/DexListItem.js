import {
  ListItem,
  Avatar,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { Fragment } from "react";

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
      <ListItem>
        <ListItemButton>
          <Avatar
            src={`https://img.pokemondb.net/sprites/home/normal/${props.name}.png`}
            sx={{ paddingRight: "20px", width: 56, height: 56 }}
          />
          <ListItemText
            primary={fixNames(props.name)}
            secondary={props.key} sx={{ textAlign: "start" }}
          />
          {/* <ListItemText secondary={`${props.firstType}/${props.secondType}`} sx={{ textAlign: 'end' }} /> */}
        </ListItemButton>
      </ListItem>
      <Divider />
    </Fragment>
  );
}

export default DexListItem;
