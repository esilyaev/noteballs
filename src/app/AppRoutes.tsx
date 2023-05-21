import { NoteEdit } from "@/pages/NoteEdit";
import { NoteIndex } from "@/pages/NoteIndex";
import { StatsPage } from "@/pages/StatsPage";
import { WelcomePage } from "@/pages/WelcomePage";

export const mainRoutes = [
  { path: "/", label: "Welcome", element: <WelcomePage /> },
  {
    path: "notes",
    label: "Notes",
    element: <NoteIndex />,
  },
  //   children: [
  //     {
  //       path: "edit/:id",
  //       label: "Notes - Edit",
  //       element: <NoteEdit />,
  //       children: [],
  //     },
  //   ],
  // },
  { path: "stats", label: "Statistics", element: <StatsPage /> },
];

export const additionalRoutes = [
  { path: "/notes/edit/:id", label: "Notes - Edit", element: <NoteEdit /> },
];
