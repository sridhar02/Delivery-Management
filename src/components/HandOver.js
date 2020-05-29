import React from "react";
import { formatISO,format } from "date-fns";

import { FlatBlocks, FlatNumbersComponent } from "./Entry";

import Table from "@material-ui/core/Table";
import HomeIcon from "@material-ui/icons/Home";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import {
  makeStyles,
  Button,
  Typography,
  Link,
  ButtonGroup,
} from "@material-ui/core";

const useHandOverStyles = makeStyles((theme) => ({
  flatBlock: {
    margin: theme.spacing(1),
    fontSize: "20px",
  },
  flatNumbers: {
    margin: theme.spacing(0.6),
  },
  ordersButton: {
    marginTop: theme.spacing(5),
  },
  flat: {
    display: "flex",
    justifyContent: "space-around",
    margin: theme.spacing(2),
  },
}));

function HandOver() {
  const classes = useHandOverStyles();
  const [flatBlock, setFlatBlock] = React.useState("");
  const [flatNumber, setFlatNumber] = React.useState("");
  const [orderGiven, setOrder] = React.useState(false);
  const [selectedBlock, setSelectedBlock] = React.useState(false);
  const [selectedFlat, setSelectedFlat] = React.useState(false);
  const [showOrder, setShowOrder] = React.useState(false);

  const handleChange = (block) => {
    setFlatBlock(block);
    setSelectedBlock(true);
  };

  const handleFlatNumber = (event) => {
    setFlatNumber(event);
    setSelectedFlat(true);
  };

  const showOrders = () => {
    setShowOrder(true);
  };

  const handleClearAll = () => {
    setFlatBlock("");
    setFlatNumber("");
    setSelectedBlock(false);
    setSelectedFlat(false);
    setShowOrder(false);
  };

  const checkOrder = () => {
    setOrder(true);
  };

  return (
    <div>
      <div>
        <Link href="/">
          <HomeIcon />{" "}
        </Link>
      </div>
      {!showOrder && (
        <Typography variant="h5">
          Please Select Flat Block and Number
        </Typography>
      )}
      <div className={classes.flat}>
        <Typography variant="h5">{flatBlock + flatNumber}</Typography>
        <Button color="primary" variant="contained" onClick={handleClearAll}>
          Clear
        </Button>
      </div>

      {!selectedBlock && (
        <FlatBlocks classes={classes} handleChange={handleChange} />
      )}

      {!selectedFlat && (
        <FlatNumbersComponent
          classes={classes}
          handleFlatNumber={handleFlatNumber}
        />
      )}
      {showOrder && (
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Agent</TableCell>
              <TableCell>Time</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Amazon</TableCell>
              <TableCell>{format(Date.now(),"M/LLL/Y H:mm a	")}</TableCell>
              <TableCell>
                {orderGiven ? (
                  <duv>Given</duv>
                ) : (
                  <Button onClick={checkOrder}>
                    <CheckIcon />
                  </Button>
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
      {!showOrder && (
        <Button
          color="primary"
          variant="contained"
          className={classes.ordersButton}
          onClick={showOrders}
        >
          Show Orders
        </Button>
      )}
    </div>
  );
}

export default HandOver;
