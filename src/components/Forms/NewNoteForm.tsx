import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export const NewNoteForm: React.FC = () => {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
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
          />
        </CardContent>
        <CardActions>
          <Button type="submit">Save</Button>
          <Button type="submit" color="error">
            Clear form
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};
