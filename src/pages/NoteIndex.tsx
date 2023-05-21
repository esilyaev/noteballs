import { NoteCreateFormWidget } from "@/widgets/notes/NoteCreateFormWidget";
import { NoteListWidget } from "@/widgets/notes/NoteListWidget";

export const NoteIndex = () => {
  return (
    <>
      <NoteCreateFormWidget />
      <NoteListWidget />
    </>
  );
};
