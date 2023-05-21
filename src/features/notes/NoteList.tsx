import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { deleteNote } from "@/entities/notes/notesSlice";
import React from "react";
import { NoteCard } from "./NoteCard";

export const NoteList: React.FC = () => {
  const notes = useAppSelector((state) => state.notes.notes);

  const dispatch = useAppDispatch();
  const deleteNoteDispatch = (id: number) => {
    dispatch(deleteNote(id));
  };

  return (
    <>
      {notes.map((note) => (
        <NoteCard note={note} key={note.id} deleteNote={deleteNoteDispatch} />
      ))}
    </>
  );
};
