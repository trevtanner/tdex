import { Container, Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import PokedexList from './PokedexList';

function Home() {
    return (
        <Container sx={{ textAlign: 'center' }}>
     <h1>PokeDex</h1>
     <Grid container>
     <Grid item xs={4} lg={3} sx={{ width: '100%' }}>
     <List>
      <ListItem>
      <ListItemButton>
        <ListItemText primary='Gen 1' />
        </ListItemButton>
      </ListItem>
      <ListItem>
      <ListItemButton>
        <ListItemText primary='Gen 2' />
        </ListItemButton>
      </ListItem>
      <ListItem>
      <ListItemButton>
        <ListItemText primary='Gen 3' />
        </ListItemButton>
      </ListItem>
     </List>
     </Grid>
     <Grid item xs={8} lg={9}>
     <PokedexList className='PokeList'/>
     </Grid>
     </Grid>
     </Container>
    )
}

export default Home;