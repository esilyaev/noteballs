import { NoteCreateForm } from "@/components/Forms/NoteCreateForm";
import { NotesList } from "@/components/Lists/NotesList";
import { useAppSelector } from "@/store/hooks";

export const NotesPage = () => {
  const notes = useAppSelector((state) => state.notes.notes);

  return (
    <>
      <NoteCreateForm />

      <NotesList notes={notes} />
    </>
  );
};
