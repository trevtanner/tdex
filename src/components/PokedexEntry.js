import {
  Alert,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
  Container,
  Button
} from '@mui/material'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import classes from './PokedexEntry.module.css'

function PokedexEntry() {
  const [error, setError] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const [entries, setEntries] = useState([])
  const [type, setType] = useState('')
  const [secondType, setSecondType] = useState('')
  const [dex, setDex] = useState('')

  //https://bigsondev.com/blog/how-to-fetch-data-in-react-using-pokeapi/
  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        //GET request for pokemon data
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon${window.location.pathname}`,
        )
        const data = await response.json()

        if (isMounted) {
          setEntries(data)
          setType(data.types[0].type.name)
        }
        if (data.types[1] === undefined) {
          setSecondType('')
        } else {
          setSecondType(data.types[1].type.name)
        }
      } catch (e) {
        setError(e.message || 'Something went wrong')
      }
    }

    const fetchDex = async () => {
      try {
        //GET request for Pokedex data
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species${window.location.pathname}`,
        )
        const data = await res.json()

        setDex(data.flavor_text_entries[2].flavor_text)
      } catch (e) {
        setError(e.message || 'Something went wrong')
      }

      setLoading(false)
    }
    fetchData()
    fetchDex()
    return () => {
      isMounted = false
    }
  }, [])

  if (error) {
    return <Alert severity="error">{error}</Alert>
  }

  if (loading) {
    return (
      <Grid container justify="center">
        <CircularProgress />
      </Grid>
    )
  }

  function fixNames(entries) {
    if (entries.name === 'nidoran-f') {
      return (entries.name = 'Nidoran')
    }
    if (entries.name === 'nidoran-m') {
      return (entries.name = 'Nidoran')
    } 
    if (entries.name === 'mr-mime') {
      return (entries.name = 'Mr. Mime')
    } 
    if (entries.name === 'farfetchd') {
      return (entries.name = 'Farfetch\'d')
    } 
    else {
      return entries.name.charAt(0).toUpperCase() + entries.name.slice(1)
    }
  }

  function fixHeight(entries) {
    var inches = (entries.height * 10 * 0.393700787).toFixed(0)
    var ft = Math.floor(inches / 12)
    inches %= 12
    return `${ft}' ${inches}"`
  }
  function fixWeight(entries) {
    const weight = ((entries.weight / 10) * 2.20462).toFixed(1)
    return weight
  }

  function fixID(entries) {
    var id = ('00' + entries.id).slice(-3)
    return id
  }

  function fixTypes(type, secondType) {
    if (!secondType) {
      const fixedType = type.charAt(0).toUpperCase() + type.slice(1)
      return fixedType
    } else {
      const fixedType =
        type.charAt(0).toUpperCase() +
        type.slice(1) +
        '/' +
        secondType.charAt(0).toUpperCase() +
        secondType.slice(1)
      return fixedType
    }
  }

  return (
    <Container fixed align="center" sx={{ pt: '1em' }}>
    <Card variant="outlined" sx={{ maxWidth: '500px', mb: '2em' }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{}} align="center">
            <img
              src={`https://img.pokemondb.net/sprites/home/normal/${entries.name}.png`}
              alt={entries.name}
              className={classes.image}
            />
          </Grid>
          <Grid item xs={6} align="center">
            <Typography variant="h3">{fixNames(entries)}</Typography>
            <Typography variant="h5">#{fixID(entries)}</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography variant="h6" sx={{ textDecoration: 'underline' }}>
              DATA
            </Typography>
            <Grid item xs={12} align="center">
            <Typography variant="p">
              Type: {fixTypes(type, secondType)}
            </Typography>
            </Grid>
            <Grid item xs={12} align="center">
            <Typography variant="p">
              Height: {fixHeight(entries)}
            </Typography>
            </Grid>
            <Grid item xs={12} align="center">
            <Typography variant="p">
              Weight: {fixWeight(entries)} lbs.
            </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} align="center">
            <Typography variant="p">
              <b>PokeDex Entry:</b> {dex.replace('', ' ').replace('POKéMON', 'pokémon')}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    <Button component={Link} to='/' variant="outlined" color='error' size="large">BACK</Button>
    </Container>
  )
}

export default PokedexEntry
