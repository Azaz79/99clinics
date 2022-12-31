import React, {useContext, useEffect} from 'react'
import NoteContext from "../Context/noteContext";
import AddNote from './AddNote';
import NoteItem from './NoteItem';
const Notes = () => {
    const context = useContext(NoteContext);
  const { notes, getNotes} = context;
  useEffect(() => {
    getNotes()
    // eslint-disable-next-line
  }, [])
    return (
        <>
        <AddNote/>
        <div className="row my-3"> 
             <h1>Your Notes</h1>
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note}/>
        })}
        </div>
       </>
    )
}

export default Notes
