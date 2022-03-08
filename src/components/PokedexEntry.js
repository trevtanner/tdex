import { Alert, CircularProgress, Grid } from '@mui/material';
import { useState, useEffect } from 'react'

function PokedexEntry() {
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(true)
    const [entries, setEntries] = useState([])
    const [type, setType] = useState("")
    const [secondType, setSecondType] = useState("")
    const [dex, setDex] = useState("")
    
  
    //https://bigsondev.com/blog/how-to-fetch-data-in-react-using-pokeapi/
    useEffect(() => {
      const fetchData = async () => {
        try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon${window.location.pathname}`,
        )
        const data = await response.json()
        
        setEntries(data)
        setType(data.types[0].type.name);
        if (data.types[1] === undefined){
            setSecondType('')
        }
        else {
            setSecondType(data.types[1].type.name)
        }
  
        } catch (e) {
          setError(e.message || "Something went wrong")
        }
      }
      fetchData()

      const fetchDex = async () => {
        try {
            const response = await fetch(
              `https://pokeapi.co/api/v2/pokemon-species${window.location.pathname}`,
            )
            const data = await response.json()
            
            setDex(data.flavor_text_entries[1].flavor_text);
      
            } catch (e) {
              setError(e.message || "Something went wrong")
            }
      
            setLoading(false)
        }
        fetchDex()
    }, [])
    

    if(error) {
        return <Alert severity='error'>{error}</Alert>
    }

    if (loading) {
        return (
            <Grid container justify="center">
                <CircularProgress />
            </Grid>
        )
    }
    
    function fixNames(entries) {
        if (entries.name === "nidoran-f") {
          return (entries.name = "Nidoran");
        }
        if (entries.name === "nidoran-m") {
          return (entries.name = "Nidoran");
        } else {
          return entries.name.charAt(0).toUpperCase() + entries.name.slice(1);
        }
      }
      

    function fixHeight(entries) {
        var inches = (entries.height * 10 * 0.393700787).toFixed(0);
        var ft = Math.floor(inches / 12)
        inches %= 12;
        return (`${ft}' ${inches}"`);
    }
    function fixWeight(entries) {
        const weight = (entries.weight / 10 * 2.20462).toFixed(1);
        return weight;
    }

    function fixID(entries) {
        var id = ("00" + entries.id).slice(-3)
        return id;
    }

    function fixTypes(type, secondType) {
        if (!secondType) {
            const fixedType = type.charAt(0).toUpperCase() + type.slice(1)
            return fixedType
        } else {
           const fixedType = type.charAt(0).toUpperCase()+type.slice(1)+'/'+secondType.charAt(0).toUpperCase()+secondType.slice(1)
           return fixedType
        }
    }


    return (
        <>
        <img src={`https://img.pokemondb.net/sprites/home/normal/${entries.name}.png`} alt={entries.name} />
        <h1>{fixNames(entries)}</h1>
        <h1>#{fixID(entries)}</h1>
        <h1>{fixTypes(type, secondType)}</h1>
        <h1>Height: {fixHeight(entries)}</h1>
        <h1>Weight: {fixWeight(entries)} lbs.</h1>
        <h1>{dex.replace('', ' ').replace('POKéMON', 'pokémon')}</h1>

        </>
    )

}

export default PokedexEntry;