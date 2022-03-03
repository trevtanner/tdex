import { Box, List, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import DexListItem from "./DexListItem";
import axios from 'axios';

function PokedexList() {
  // const data = [
  //   {
  //     id: 1,
  //     number: "001",
  //     name: "Bulbasaur",
  //     types: [{ first: "Grass", second: "poison" }],
  //   },
  //   {
  //     id: 2,
  //     number: "002",
  //     name: "Ivysaur",
  //     types: [{ first: "Grass", second: "poison" }],
  //   },
  //   {
  //     id: 3,
  //     number: "003",
  //     name: "Venusaur",
  //     types: [{ first: "Grass", second: "poison" }],
  //   },
  //   {
  //     id: 4,
  //     number: "004",
  //     name: "Charmander",
  //     types: [{ first: "Grass", second: "poison" }],
  //   },
  //   {
  //     id: 5,
  //     number: "005",
  //     name: "Charmeleon",
  //     types: [{ first: "Grass", second: "poison" }],
  //   },
  //   {
  //     id: 6,
  //     number: "006",
  //     name: "Charizard",
  //     types: [{ first: "Grass", second: "poison" }],
  //   },
  //   {
  //     id: 7,
  //     number: "007",
  //     name: "Squirtle",
  //     types: [{ first: "Grass", second: "poison" }],
  //   },
  //   {
  //     id: 8,
  //     number: "008",
  //     name: "Wartortle",
  //     types: [{ first: "Grass", second: "poison" }],
  //   },
  //   {
  //     id: 9,
  //     number: "009",
  //     name: "Blastoise",
  //     types: [{ first: "Grass", second: "poison" }],
  //   },
  //   {
  //     id: 10,
  //     number: "010",
  //     name: "Caterpie",
  //     types: [{ first: "Grass", second: "poison" }],
  //   },
  //   {
  //     id: 11,
  //     number: "011",
  //     name: "Metapod",
  //     types: [{ first: "Grass", second: "poison" }],
  //   },
  //   {
  //     id: 12,
  //     number: "012",
  //     name: "Butterfree",
  //     types: [{ first: "Grass", second: "poison" }],
  //   },
  //   {
  //     id: 13,
  //     number: "013",
  //     name: "Weedle",
  //     types: [{ first: "Grass", second: "poison" }],
  //   },
  //   {
  //     id: 14,
  //     number: "014",
  //     name: "Kakuna",
  //     types: [{ first: "Grass", second: "poison" }],
  //   },
  //   {
  //     id: 15,
  //     number: "015",
  //     name: "Beedrill",
  //     types: [{ first: "Grass", second: "poison" }],
  //   },
  //   {
  //     id: 16,
  //     number: "016",
  //     name: "Pidgey",
  //     types: [{ first: "Grass", second: "poison" }],
  //   },
  //   {
  //     id: 17,
  //     number: "017",
  //     name: "Pigeotto",
  //     types: [{ first: "Grass", second: "poison" }],
  //   },
  //   {
  //     id: 18,
  //     number: "018",
  //     name: "Pidgeot",
  //     types: [{ first: "Grass", second: "poison" }],
  //   },
  //   {
  //     id: 19,
  //     number: "019",
  //     name: "Rattata",
  //     types: [{ first: "Grass", second: "poison" }],
  //   },
  //   {
  //     id: 20,
  //     number: "020",
  //     name: "Raticate",
  //     types: [{ first: "Grass", second: "poison" }],
  //   },
  // ];

  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true)

      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151/");

      setEntries(response.data)

      setLoading(false)
    }
    loadPokemon();
  }, []);


  return (
    <Box sx={{ width: "100%", maxWidth: "500px", margin: "auto" }}>
      <nav aria-label="">
        <List>
          {entries.map((item) => (
            <DexListItem
              id={`# ${item.number}`}
              name={item.name}
              firstType={item.types.map((type) => (
                type.first
              ))}
              secondType={item.types.map((type) => (
                type.second
              ))}
            />
          ))}
        </List>
      </nav>
    </Box>
  );
}

export default PokedexList;
