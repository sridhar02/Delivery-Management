import React from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Button, makeStyles } from "@material-ui/core";

const useEnteryStyles = makeStyles((theme) => ({
  button: {
    marginTop: "10px",
  },
}));

function Entery() {
  const classes = useEnteryStyles();
  const [flatBlock, setFlatBlock] = React.useState("");
  const [flatNumber, setFlatNumber] = React.useState("");
  const [agent, setAgent] = React.useState("");

  const handleChange = (event) => {
    setFlatBlock(event.target.value);
  };

  const Blocks = ["A", "B", "C", "D", "E", "F"];
  const FlatNumbers = [
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    201,
    202,
    203,
    204,
    205,
    206,
    207,
    208,
    301,
    302,
    303,
    304,
    305,
    306,
    307,
    308,
    401,
    402,
    403,
    404,
    405,
    406,
    407,
    408,
    501,
    502,
    503,
    504,
    505,
    506,
    507,
    508,
    601,
    602,
    603,
    604,
    605,
    606,
    607,
    608,
    701,
    702,
    703,
    704,
    705,
    706,
    707,
    708,
    801,
    802,
    803,
    804,
    805,
    806,
    807,
    808,
  ];
  const Agents = ["Amazon", "Flipkat", "express bees", "others"];

  return (
    <div>
      <h1>Enter Delivery Flat Details</h1>
      <FormControl component="fieldset">
        <h1>FLAT BLOCK</h1>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={flatBlock}
          onChange={handleChange}
        >
          {Blocks.map((block, index) => (
            <FormControlLabel
              key={index}
              value={block}
              control={<Radio />}
              label={block}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <h1>FLAT NUMBER</h1>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={flatNumber}
          onChange={handleChange}
        >
          {FlatNumbers.map((flat, index) => (
            <FormControlLabel
              key={index}
              value={flat}
              control={<Radio />}
              label={flat}
            />
          ))}{" "}
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <h1>Delivery Agent</h1>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={agent}
          onChange={handleChange}
        >
          {Agents.map((flat, index) => (
            <FormControlLabel
              key={index}
              value={flat}
              control={<Radio />}
              label={flat}
            />
          ))}{" "}
        </RadioGroup>
      </FormControl>
      <div className={classes.button}>
        <Button color="primary" variant="contained">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Entery;
