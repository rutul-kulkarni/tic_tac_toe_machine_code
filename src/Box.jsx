import { Box } from "@mui/material";
import { useEffect } from "react";

const PlayerBox = ({
  value,
  setPositions,
  counter,
  player1,
  positions,
  currentPosition,
  setCounter,
}) => {
  const handleClick = () => {
    let newPositions = positions;
    if (!newPositions[currentPosition - 1].clicked) {
      if (counter % 2 !== 0) {
        newPositions[currentPosition - 1] = {
          pos: currentPosition,
          val: player1,
          clicked: true,
        };
      } else {
        newPositions[currentPosition - 1] = {
          pos: currentPosition,
          val: player1 === "x" ? "0" : "x",
          clicked: true,
        };
      }

      setPositions(newPositions);
      setCounter(counter + 1);
    }
  };
  return (
    <Box
      border="2px white solid"
      minWidth="70px"
      minHeight="70px"
      onClick={handleClick}
    >
      {value.val}
    </Box>
  );
};

export default PlayerBox;
