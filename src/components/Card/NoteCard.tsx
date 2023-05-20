import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { FC } from "react";

interface Props {
  title: string;
  content: string;
}

export const NoteCard: FC<Props> = ({ title, content }) => {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography
          variant="h5"
          sx={{ fontSize: 24 }}
          color="text.primary"
          gutterBottom
        >
          {title}
        </Typography>

        <Typography variant="body2">{content}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
