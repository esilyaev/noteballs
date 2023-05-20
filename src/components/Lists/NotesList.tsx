import React from "react";
import { NoteCard } from "../Card/NoteCard";

interface Props {
  notes: { id: number; title: string; content: string }[];
}

export const NotesList: React.FC<Props> = ({ notes }) => {
  return (
    <>
      {notes.map((note) => (
        <NoteCard title={note.title} content={note.content} key={note.id} />
      ))}
    </>
  );
};
