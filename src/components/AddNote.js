import React, { useContext, useState } from "react";
import NoteContext from "../Context/noteContext";
import notesRepository from "../repositories/NotesRepository";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "General",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    pushNote();
  };
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  const pushNote = async () => {
    console.log('pushNote');
    try {
      const response = await notesRepository.addNote(
        note.tag,
        note.title,
        note.description
      );

      console.log(response.data);
      
      const allNotes = await notesRepository.fetchAllNotes();
      console.log("all notes");
      console.log(allNotes.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="container my-3">
        <h1>Add Notes</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="title"
              onChange={onChange}
            />
            <div id="title" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="desc"
              name="description"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default (AddNote);
