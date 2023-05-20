import { mainRoutes } from "@/app/AppRoutes";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navItems = mainRoutes.map((el) => ({ label: el.label, path: el.path }));
  const navigateTo = useNavigate();
  return (
    <Toolbar>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
        Noteballs
      </Typography>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        {navItems.map((item) => (
          <Button
            key={item.label}
            sx={{ color: "#fff" }}
            onClick={() => navigateTo(item.path)}
          >
            {item.label}
          </Button>
        ))}
      </Box>
    </Toolbar>
  );
};
