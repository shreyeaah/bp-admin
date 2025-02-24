import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

const OrderDetailsModal = ({ order, onClose }) => {
  return (
    <Dialog open={!!order} onClose={onClose}>
      <DialogTitle>Order Details</DialogTitle>
      <DialogContent>
        <p><strong>Customer:</strong> {order.customer_name}</p>
        <p><strong>Status:</strong> {order.status}</p>
        <p><strong>Payment:</strong> {order.payment_status ? "Paid" : "Unpaid"}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderDetailsModal;
