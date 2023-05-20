import { INote } from "@/entities/Note/Note";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { RootState } from ".";

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. A corporis fugiat ut soluta enim odit, dolorem debitis doloribus repellendus eius perspiciatis veniam. Exercitationem natus fugit facere repudiandae ex asperiores ipsam.";

const initialState = {
  notes: [
    { id: 1, title: "Title 1", content: text },
    { id: 2, title: "Title 2", content: text },
    // { id: 3, title: "Title 3", content: text },
    // { id: 4, title: "Title 4", content: text },
  ],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNewNote: (state, action: PayloadAction<INote>) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      state.notes = state.notes.filter((n) => n.id !== action.payload);
    },
  },
});

export const { addNewNote, deleteNote } = notesSlice.actions;

// export const selectNotes = (state: RootState) => state.notes;

export default notesSlice.reducer;
