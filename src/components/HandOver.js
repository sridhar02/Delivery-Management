import React from "react";

import { FlatBlocks, FlatNumbersComponent } from "./Entry";

import { makeStyles, Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
}));

function HandOver() {
  const classes = useHandOverStyles();
  const [flatBlock, setFlatBlock] = React.useState("");
  const [flatNumber, setFlatNumber] = React.useState("");
  const [orders, setOrders] = React.useState("");
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

  return (
    <div>
      <h1>Please Select Flat Block and Number</h1>
      <h1>{flatBlock + flatNumber}</h1>
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
              <TableCell>S.No</TableCell>
              <TableCell>Order</TableCell>
              <TableCell>Agent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell  >1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>Amazon</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
      <Button
        color="primary"
        variant="contained"
        className={classes.ordersButton}
        onClick={showOrders}
      >
        Show Orders
      </Button>
    </div>
  );
}

export default HandOver;
