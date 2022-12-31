import React, { useState } from "react";
import DataRepository from "../repositories/DataRepository";
import DataContext from "./dataContext";


const DataState = (props)=>{
     const allNote =[]
     const [notes, setnotes] = useState(allNote)

     //Get allnotes
     const getNotes = async () => {
      const allNotes = await DataRepository.fetchAllData();

      setnotes(allNotes.data);
      }
     //Add a Note
      const addNote = (title, description, tag) => {
         console.log("adding a new note");
         const note = {
         "title": title,
         "description": description,
         "tag": tag,
         "date": Date,
         "__v": 0
         }
       setnotes(notes.concat(note));
      }

    //Delete a Note
      const deleteNote = async (id) => {
        const json = await DataRepository.deleteData(id);
        console.log(json.data);

        const newNotes = notes.filter((note)=>{return note._id!==id})
        setnotes(newNotes)
      }

    //Edit a Note
      const editNote = () => {

      }

    return(
        <DataContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
        {props.children}
        </DataContext.Provider>

    )
}
export default DataState;