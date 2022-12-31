import axios from "axios";
import accountRepository from "./AccountRepository";

const addNote = async (tag, title, description) => {
  return axios.post(
    "http://localhost:5000/api/notes/addnotes",
    {
      tag,
      title,
      description,
    },
    {
      headers: {
        "auth-token": accountRepository.getLocalToken(),
      },
    }
  );
};
const updateNote = async (id, tag, title, description) => {
  return axios.put(
    `http://localhost:5000/api/notes/updatenotes/${id}`,
    {
      tag,
      title,
      description,
    },
    {
      headers: {
        "auth-token": accountRepository.getLocalToken(),
      },
    }
  );
};
const deleteNotes = async (id) => {
  return axios.delete(
    `http://localhost:5000/api/notes/deletenote/${id}`,
    
    {
      headers: {
        "auth-token": accountRepository.getLocalToken(),
      },
    }
  );
};
const fetchAllNotes = async () => {
  return axios.get(
    "http://localhost:5000/api/notes/fetchallnotes",
    {
      headers: {
        "Content-Type": 'application/json',
        "auth-token": accountRepository.getLocalToken(),
      },
    }
  );
};

export default {
  addNote,
  updateNote,
  deleteNotes,
  fetchAllNotes,
};
