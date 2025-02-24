import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      let { data, error } = await supabase.from("users").select("*");
      if (error) console.error("Error fetching users:", error);
      else setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Orders</TableCell>
            <TableCell>Account Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.total_orders}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>
                <Button variant="contained" color={user.status === "Active" ? "error" : "success"}>
                  {user.status === "Active" ? "Ban" : "Unban"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
