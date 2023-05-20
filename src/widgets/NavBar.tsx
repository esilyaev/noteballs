import { mainRoutes } from "@/app/AppRoutes";
import { Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navItems = mainRoutes.map((el) => ({ label: el.label, path: el.path }));
  const navigateTo = useNavigate();
  return (
    <Toolbar variant="dense">
      <Container maxWidth="xl" sx={{ display: "flex" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: "block" }}
        >
          Noteballs
        </Typography>
        <Box sx={{ display: "block" }}>
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
      </Container>
    </Toolbar>
  );
};
