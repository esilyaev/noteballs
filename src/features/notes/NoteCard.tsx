import { INote } from "@/entities/notes/Note";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  note: INote;
  deleteNote: (id: number) => void;
}

export const NoteCard: React.FC<Props> = ({ note, deleteNote }) => {
  const navigate = useNavigate();
  const lettersCount = useMemo(() => note.content.length, [note.content]);

  const handleDelete = () => {
    deleteNote(note.id);
  };

  const handleEdit = () => {
    navigate(`edit/${note.id}`);
  };

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
        <Button size="small" onClick={handleEdit}>
          Edit
        </Button>
        <Button size="small" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
