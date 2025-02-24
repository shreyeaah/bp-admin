import React from "react";
import { TableRow, TableCell, Select, MenuItem, Switch, Button } from "@mui/material";
import { supabase } from "../supabaseClient";

const OrderRow = ({ order, onView }) => {
  const updateOrderStatus = async (status) => {
    await supabase.from("orders").update({ status }).eq("id", order.id);
  };

  const togglePayment = async () => {
    await supabase.from("orders").update({ payment_status: !order.payment_status }).eq("id", order.id);
  };

  return (
    <TableRow>
      <TableCell>{order.id}</TableCell>
      <TableCell>{order.customer_name}</TableCell>
      <TableCell>
        <Select value={order.status} onChange={(e) => updateOrderStatus(e.target.value)}>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Baking">Baking</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
      </TableCell>
      <TableCell>
        <Switch checked={order.payment_status} onChange={togglePayment} />
      </TableCell>
      <TableCell>
        <Button onClick={() => onView(order)}>View</Button>
      </TableCell>
    </TableRow>
  );
};

export default OrderRow;
