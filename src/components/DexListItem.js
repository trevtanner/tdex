import { ListItem, Avatar, ListItemButton, ListItemText, Divider } from '@mui/material'
import { Fragment } from 'react';

function DexListItem(props) {
    return (
    <Fragment>
        <ListItem>
        <ListItemButton>
        <Avatar src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' sx= {{ paddingRight: '20px', width: 56, height: 56 }} />
        <ListItemText primary={props.name} secondary={props.id} sx={{ textAlign: 'start' }} />
        <ListItemText secondary={`${props.firstType}/${props.secondType}`} sx={{ textAlign: 'end' }} />
        </ListItemButton>
      </ListItem>
      <Divider />
    </Fragment>
    )
}

export default DexListItem;