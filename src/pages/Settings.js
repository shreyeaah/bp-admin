import { useState } from "react";
import { supabase } from "../supabaseClient";
import { TextField, Button, List, ListItem, ListItemText } from "@mui/material";

const CakeMenu = () => {
  const [cakeName, setCakeName] = useState("");
  const [cakeList, setCakeList] = useState([]);

  const addCake = async () => {
    const { data, error } = await supabase.from("cakes").insert([{ name: cakeName }]);
    if (error) console.error(error);
    else setCakeList([...cakeList, { name: cakeName }]);
    setCakeName("");
  };

  return (
    <div>
      <TextField label="Cake Name" value={cakeName} onChange={(e) => setCakeName(e.target.value)} />
      <Button variant="contained" onClick={addCake}>
        Add Cake
      </Button>
      <List>
        {cakeList.map((cake, index) => (
          <ListItem key={index}>
            <ListItemText primary={cake.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CakeMenu;
