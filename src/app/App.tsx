import { store } from "@/store";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { Router } from "./Router";

function App() {
  return (
    <>
      <CssBaseline />
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
