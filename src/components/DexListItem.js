import { ListItem, Avatar, ListItemButton, ListItemText, Divider } from '@mui/material'
import { Fragment } from 'react';

function DexListItem(props) {

  function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  
    return (
    <Fragment>
        <ListItem>
        <ListItemButton>
        <Avatar src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' sx= {{ paddingRight: '20px', width: 56, height: 56 }} />
        <ListItemText primary={props.name.charAt(0).toUpperCase() + props.name.slice(1)} /*secondary={props.id}*/ sx={{ textAlign: 'start' }} />
        {/* <ListItemText secondary={`${props.firstType}/${props.secondType}`} sx={{ textAlign: 'end' }} /> */}
        </ListItemButton>
      </ListItem>
      <Divider />
    </Fragment>
    )
}

export default DexListItem;