import { NoteCreateFormWidget } from "@/widgets/notes/NoteCreateFormWidget";
import { NoteListWidget } from "@/widgets/notes/NoteListWidget";

export const NotesPage = () => {
  return (
    <>
      <NoteCreateFormWidget />
      <NoteListWidget />
    </>
  );
};
