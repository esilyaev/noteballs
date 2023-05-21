import { NoteCreateFormWidget } from "@/widgets/Note/NoteCreateFormWidget";
import { NoteListWidget } from "@/widgets/Note/NoteListWidget";

export const NotesPage = () => {
  return (
    <>
      <NoteCreateFormWidget />
      <NoteListWidget />
    </>
  );
};
