import { NoteCreateForm } from "@/components/Forms/NoteCreateForm";
import { NotesList } from "@/components/Lists/NotesList";
import { INote } from "@/entities/Note/Note";
import { useState } from "react";

export const NotesPage = () => {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. A corporis fugiat ut soluta enim odit, dolorem debitis doloribus repellendus eius perspiciatis veniam. Exercitationem natus fugit facere repudiandae ex asperiores ipsam.";

  const initialNotes: INote[] = [
    { id: 1, title: "Title 1", content: text },
    { id: 2, title: "Title 2", content: text },
    // { id: 3, title: "Title 3", content: text },
    // { id: 4, title: "Title 4", content: text },
  ];

  const [notes, setNotes] = useState(initialNotes);

  const addNewNote = (note: INote) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <>
      <NoteCreateForm addNewNote={addNewNote} />

      <NotesList notes={notes} deleteNote={deleteNote} />
    </>
  );
};
