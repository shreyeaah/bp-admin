import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText, Toolbar, CssBaseline, Box } from "@mui/material";

const AdminLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
        <Toolbar />
        <List>
          <ListItem button component={Link} to="/orders">
            <ListItemText primary="Orders" />
          </ListItem>
          <ListItem button component={Link} to="/users">
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button component={Link} to="/settings">
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;
