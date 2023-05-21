import { useAppSelector } from "@/app/hooks";
import React from "react";
import { NoteCard } from "../../features/Note/NoteCard";

export const NoteListWidget: React.FC = () => {
  const notes = useAppSelector((state) => state.notes.notes);
  return (
    <>
      {notes.map((note) => (
        <NoteCard note={note} key={note.id} />
      ))}
    </>
  );
};
