import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import PlayerBox from "./Box";

const defaultPositions = [
  { pos: 1, val: "", clicked: false },
  { pos: 2, val: "", clicked: false },
  { pos: 3, val: "", clicked: false },
  { pos: 4, val: "", clicked: false },
  { pos: 5, val: "", clicked: false },
  { pos: 6, val: "", clicked: false },
  { pos: 7, val: "", clicked: false },
  { pos: 8, val: "", clicked: false },
  { pos: 9, val: "", clicked: false },
];

const winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [positions, setPositions] = useState(defaultPositions);
  const [playe1, setPlayer1] = useState("x");

  const [counter, setCounter] = useState(1);

  const [winnerStatment, setWinnerStatement] = useState("");

  useEffect(() => {
    for (let index = 0; index < winner.length; index++) {
      const [first, second, third] = winner[index];

      if (
        positions[first].clicked &&
        positions[second].clicked &&
        positions[third].clicked &&
        positions[first].val === positions[second].val &&
        positions[second].val === positions[third].val
      ) {
        setWinnerStatement(`Winner is ${positions[first].val}`);
      }
    }
  }, [counter]);

  return (
    <Grid container>
      <Grid item xs={12} direction={"row"}>
        <RadioGroup
          value={playe1}
          onClick={(e) => {
            setPlayer1(e.target.value);
          }}
        >
          <FormControlLabel value="x" control={<Radio />} label="X" />
          <FormControlLabel value="0" control={<Radio />} label="0" />
        </RadioGroup>
      </Grid>

      <Grid item xs={12} direction={"column"}>
        {winnerStatment}
      </Grid>
      {positions.map((pos, idx) => (
        <Grid item xs={4} md={4} lg={4} sm={4} key={pos.pos}>
          <PlayerBox
            value={pos}
            setPositions={setPositions}
            counter={counter}
            player1={playe1}
            positions={positions}
            currentPosition={idx + 1}
            setCounter={setCounter}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default App;
