import { NavBar } from "@/widgets/NavBar";
import { AppBar, Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
      }}
    >
      <AppBar component="nav" position="static">
        <NavBar />
      </AppBar>

      <Box sx={{ flex: "1 1 auto" }}>
        <Container maxWidth="xl" sx={{ height: "100%", mt: 1 }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};
