import { NewNoteForm } from "@/components/Forms/NewNoteForm";
import { NotesList } from "@/components/Lists/NotesList";

export const NotesPage = () => {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. A corporis fugiat ut soluta enim odit, dolorem debitis doloribus repellendus eius perspiciatis veniam. Exercitationem natus fugit facere repudiandae ex asperiores ipsam.";

  const notes = [
    { id: 1, title: "Title 1", content: text },
    { id: 2, title: "Title 2", content: text },
    { id: 3, title: "Title 3", content: text },
    { id: 4, title: "Title 4", content: text },
  ];

  return (
    <>
      <NewNoteForm />

      <NotesList notes={notes} />
    </>
  );
};
