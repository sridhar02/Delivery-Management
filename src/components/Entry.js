import React from "react";
import { useHistory } from "react-router-dom";

import { Button, makeStyles } from "@material-ui/core";

const Blocks = [
  ["A", "B", "C"],
  ["D", "E", "F"],
];
const FlatNumbers = [
  [101, 102, 103, 104],
  [105, 106, 107, 108],
  [201, 202, 203, 204],
  [205, 206, 207, 208],
  [301, 302, 303, 304],
  [305, 306, 307, 308],
  [401, 402, 403, 404],
  [405, 406, 407, 408],
  [501, 502, 503, 504],
  [505, 506, 507, 508],
  [601, 602, 603, 604],
  [605, 606, 607, 608],
  [701, 702, 703, 704],
  [705, 706, 707, 708],
  [801, 802, 803, 804],
  [805, 806, 807, 808],
];

const Agents = ["Amazon", "Flipkat", "express bees", "others"];

const useEnteryStyles = makeStyles((theme) => ({
  submitButton: {
    margin: theme.spacing(5),
  },
  selectedFlat: {
    display: "flex",
    justifyContent: "space-around",
  },
  clear: {},
  flatBlock: {
    margin: theme.spacing(1),
    fontSize: "20px",
  },
  flatNumbers: {
    margin: theme.spacing(0.6),
  },
  agent: {
    margin: theme.spacing(1.5),
  },
}));

export function FlatBlocks({ handleChange, classes }) {
  return (
    <>
      <h1>FLAT BLOCK </h1>
      {Blocks.map((blocks, index) => (
        <div key={index}>
          {blocks.map((block, index) => (
            <Button
              key={index}
              onClick={() => handleChange(block)}
              color="primary"
              variant="contained"
              className={classes.flatBlock}
            >
              {block}
            </Button>
          ))}
        </div>
      ))}
    </>
  );
}

export function FlatNumbersComponent({ handleFlatNumber, classes }) {
  return (
    <>
      <h1>FLAT NUMBER</h1>
      {FlatNumbers.map((flatNumbers, index) => (
        <div key={index}>
          {flatNumbers.map((flatNumber, index) => (
            <Button
              key={index}
              className={classes.flatNumbers}
              color="primary"
              onClick={() => handleFlatNumber(flatNumber)}
              variant="contained"
            >
              {flatNumber}
            </Button>
          ))}
        </div>
      ))}
    </>
  );
}

export default function Entry() {
  const classes = useEnteryStyles();
  const history = useHistory();
  const [flatBlock, setFlatBlock] = React.useState("");
  const [flatNumber, setFlatNumber] = React.useState("");
  const [agent, setAgent] = React.useState("");
  const [selectedBlock, setSelectedBlock] = React.useState(false);
  const [selectedFlat, setSelectedFlat] = React.useState(false);
  const [selectedAgent, setSelectedAgent] = React.useState(false);

  const handleChange = (block) => {
    setFlatBlock(block);
    setSelectedBlock(true);
  };

  const handleFlatNumber = (event) => {
    setFlatNumber(event);
    setSelectedFlat(true);
  };

  const handleAgent = (event) => {
    setAgent(event);
    setSelectedAgent(true);
  };

  const handleClearAll = () => {
    setFlatBlock("");
    setFlatNumber("");
    setSelectedAgent("");
    setSelectedBlock(true);
    setSelectedFlat(true);
    setSelectedAgent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let payload = {
      block: flatBlock,
      flat: flatNumber,
      agent: agent,
    };
    console.log(payload);
    localStorage.setItem("deliveries", payload);
    history.push("/");
  };

  return (
    <div>
      <h2>Entry </h2>
      <div className={classes.selectedFlat}>
        <h2> {flatBlock + flatNumber}</h2>
        <Button
          onClick={handleClearAll}
          color="primary"
          variant="contained"
          className={classes.clear}
        >
          Clear
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        {!selectedBlock && (
          <FlatBlocks handleChange={handleChange} classes={classes} />
        )}
        {!selectedFlat && (
          <FlatNumbersComponent
            classes={classes}
            handleFlatNumber={handleFlatNumber}
          />
        )}
        <h1>Delivery Agent</h1>
        {selectedAgent ? (
          <Button color="primary" variant="contained">
            {agent}
          </Button>
        ) : (
          Agents.map((agent, index) => (
            <Button
              key={index}
              className={classes.agent}
              onClick={() => handleAgent(agent)}
              color="primary"
              variant="contained"
            >
              {agent}
            </Button>
          ))
        )}
        <div className={classes.submitButton}>
          <Button color="primary" type="submit" variant="contained">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
