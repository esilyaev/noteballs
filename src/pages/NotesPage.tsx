import { NoteCard } from "@/components/Card/NoteCard";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

export const NotesPage = () => {
  const text =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias eius, repellendus qui obcaecati nesciunt dolorum sint, facilis quidem modi pariatur, possimus mollitia a magnam voluptates eveniet. Ex sapiente aut quos dolorem. Nihil asperiores iste delectus quidem magnam temporibus voluptate repellat corporis sequi officia, nobis laborum incidunt obcaecati quod, atque saepe quisquam a dicta suscipit. Maxime, perspiciatis aut eum temporibus veritatis fugit molestiae, exercitationem soluta et quam deleniti veniam ad quos odit consectetur dolore! Minima, consectetur officiis itaque modi eligendi esse laudantium reiciendis repellat corporis nihil quam enim sed? Voluptate soluta ducimus consequatur aut esse ipsam ad perferendis ab accusamus laborum!";

  return (
    <>
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
      {[...Array(3)].map((item) => (
        <NoteCard title="Card title" content={text} key={item} />
      ))}
    </>
  );
};
