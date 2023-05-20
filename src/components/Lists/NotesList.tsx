import { INote } from "@/entities/Note/Note";
import React from "react";
import { NoteCard } from "../Card/NoteCard";

interface Props {
  notes: INote[];
  deleteNote: (id: number) => void;
}

export const NotesList: React.FC<Props> = ({ notes, deleteNote }) => {
  return (
    <>
      {notes.map((note) => (
        <NoteCard note={note} key={note.id} deleteNote={deleteNote} />
      ))}
    </>
  );
};
