import React from "react";
import { Link } from "react-router-dom";

import "./App.css";
import { Button, makeStyles } from "@material-ui/core";

const useAppStyles = makeStyles((theme) => ({
  button: {
    marginTop: "10px",
  },
}));

function App() {
  const classes = useAppStyles();
  return (
    <div className="App">
      <h1>Adithya SunShine Delivery Management</h1>
      <div>
        <Link to="/entry">
          <Button color="primary" variant="contained">
            Entery
          </Button>
        </Link>
      </div>
      <div className={classes.button}>
        <Link to="/handOver">
          <Button color="primary" variant="contained">
            Hand Over
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default App;
