import { INote } from "@/entities/Note/Note";
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
  deleteNote: (id: number) => void;
}

export const NoteCard: React.FC<Props> = ({ note, deleteNote }) => {
  const handleDelete = () => {
    deleteNote(note.id);
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
