import { Box, List, Divider, Alert, Grid, CircularProgress, GridListTile, GridListTileBar } from '@mui/material'
import { useEffect, useState } from 'react'
import DexListItem from './DexListItem'

function PokedexList() {

  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(true)
  const [entries, setEntries] = useState([])

  //https://bigsondev.com/blog/how-to-fetch-data-in-react-using-pokeapi/
  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=151/',
      )
      const data = await response.json()

      setEntries(data.results)

      } catch (e) {
        setError(e.message || "Something went wrong")
      }

      setLoading(false)
    }
    fetchData()
  }, [])


  const pokemonList = entries.map((entry) => (
    <DexListItem key={entry.url} name={entry.name} />
  ))

  if (error) {
    return <Alert severity='error'>{error}</Alert>
  }

  if (loading) {
    return (
      <Grid container justify="center">
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <Box sx={{ width: '100%', maxWidth: '700px', margin: 'auto' }}>
      <nav aria-label="">
        <List>
          {/* {data.map((item) => (
            <DexListItem
              key={item.number}
              id={`# ${item.number}`}
              name={item.name}
              firstType={item.types.map((type) => (
                type.first
              ))}
              secondType={item.types.map((type) => (
                type.second
              ))}
            />
          ))} */}
          {pokemonList}
        </List>
      </nav>
    </Box>
  )
}
export default PokedexList;