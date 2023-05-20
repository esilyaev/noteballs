import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const NoteCreateForm: React.FC = () => {
  const [title, setTitle] = useState("");

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const [content, setContent] = useState("");

  const handleChangeContent = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const reset = () => {
    setContent("");
    setTitle("");
  };

  const handleReset = () => {
    reset();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ title, content });
    reset();
  };

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <CardContent>
          <Typography variant="h5">New note</Typography>

          <TextField
            sx={{ mt: 2 }}
            id="card-title"
            label="Title"
            variant="outlined"
            placeholder="Type here title for note"
            fullWidth
            size="small"
            value={title}
            onChange={handleChangeTitle}
          />
          <TextField
            sx={{ mt: 2 }}
            id="card-content"
            label="Content"
            variant="outlined"
            multiline
            rows={4}
            placeholder="Type here some for memorize..."
            fullWidth
            size="small"
            value={content}
            onChange={handleChangeContent}
          />
        </CardContent>
        <CardActions>
          <Button type="submit">Save</Button>
          <Button type="reset" color="error">
            Clear form
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};
