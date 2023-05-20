import { INote } from "@/entities/Note/Note";
import React from "react";
import { NoteCard } from "../Card/NoteCard";

interface Props {
  notes: INote[];
}

export const NotesList: React.FC<Props> = ({ notes }) => {
  return (
    <>
      {notes.map((note) => (
        <NoteCard note={note} key={note.id} />
      ))}
    </>
  );
};
