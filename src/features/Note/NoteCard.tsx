import { useAppDispatch } from "@/app/hooks";
import { INote } from "@/entities/Note/Note";
import { deleteNote } from "@/entities/Note/notesSlice";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useMemo } from "react";

interface Props {
  note: INote;
}

export const NoteCard: React.FC<Props> = ({ note }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  const lettersCount = useMemo(() => note.content.length, [note.content]);

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography
          variant="h5"
          sx={{ fontSize: 24 }}
          color="text.primary"
          gutterBottom
        >
          {note.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {lettersCount} symbols contain
        </Typography>

        <Typography variant="body2">{note.content}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
