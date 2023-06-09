import { useAppDispatch } from "@/app/hooks";
import { INote } from "@/entities/notes/Note";
import { addNewNote } from "@/entities/notes/NotesSlice";
import { SBITextField } from "@/shared/ui/inputs/SBITextInput";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";

export const NoteCreateForm: React.FC = () => {
  const dispatch = useAppDispatch();

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
    dispatch(
      addNewNote({
        id: new Date().getTime(),
        title,
        content,
      } as INote)
    );
    reset();
  };

  const isFormHaveAllFieldContent = useMemo(
    () => title.length !== 0 && content.length !== 0,
    [title, content]
  );

  const isFormNotEmpty = useMemo(
    () => title.length !== 0 || content.length !== 0,
    [title, content]
  );

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <CardContent>
          <Typography variant="h5">Add a new note</Typography>

          <SBITextField
            sx={{ mt: 2 }}
            label={"Note title"}
            placeholder={"Type here title for a new note"}
            value={title}
            onChange={handleChangeTitle}
          />
          <SBITextField
            sx={{ mt: 2 }}
            label="Content"
            multiline
            rows={4}
            placeholder="Type here some for memorize..."
            value={content}
            onChange={handleChangeContent}
          />
        </CardContent>
        <CardActions>
          <Button type="submit" disabled={!isFormHaveAllFieldContent}>
            Save
          </Button>
          <Button type="reset" color="error" disabled={!isFormNotEmpty}>
            Clear form
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};
