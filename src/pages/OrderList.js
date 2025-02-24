import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import OrderDetailsModal from "../components/OrderDetailsModal";
import OrderRow from "../components/OrderRow";  // Import OrderRow

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const { data, error } = await supabase.from("orders").select("*");
    if (error) {
      console.error("Error fetching orders:", error);
    } else {
      setOrders(data);
    }
  };

  return (
    <div>
      <h2>Order Management</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Cake</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <OrderRow key={order.id} order={order} onView={setSelectedOrder} />
          ))}
        </TableBody>
      </Table>

      {selectedOrder && (
        <OrderDetailsModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />
      )}
    </div>
  );
};

export default OrderList;
