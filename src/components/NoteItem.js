import React, { useContext } from "react";
import NoteContext from "../Context/noteContext";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const {deleteNote} = context;
  const { note } = props;
  return (
    <div className="col-md-4">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex ">
            <h3 className="card-title">{note.tag}  </h3><br/>
            <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>
            <i className="far fa-edit "></i>
          </div>
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
