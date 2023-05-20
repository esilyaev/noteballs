import { NotesPage } from "@/pages/NotesPage";
import { StatsPage } from "@/pages/StatsPage";
import { WelcomePage } from "@/pages/WelcomePage";

export const mainRoutes = [
  { path: "/", label: "Welcome", element: <WelcomePage /> },
  { path: "/notes", label: "Notes", element: <NotesPage /> },
  { path: "/stats", label: "Statistics", element: <StatsPage /> },
];
