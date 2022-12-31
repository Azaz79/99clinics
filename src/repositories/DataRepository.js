import axios from "axios";
import accountRepository from "./AccountRepository";

const addData = async (sp, name, description) => {
  return axios.post(
    "http://localhost:5001/api/data/adddata",
    {
      sp,
      name,
      description,
    },
    {
      headers: {
        "auth-token": accountRepository.getLocalToken(),
      },
    }
  );
};
const updateData = async (id, sp, name, description) => {
  return axios.put(
    `http://localhost:5000/api/data/updatedata/${id}`,
    {
      sp,
      name,
      description,
    },
    {
      headers: {
        "auth-token": accountRepository.getLocalToken(),
      },
    }
  );
};
const deleteData = async (id) => {
  return axios.delete(
    `http://localhost:5000/api/data/deletedata/${id}`,
    
    {
      headers: {
        "auth-token": accountRepository.getLocalToken(),
      },
    }
  );
};
const fetchAllData = async () => {
  return axios.get(
    "http://localhost:5000/api/data/fetchalldata",
    {
      headers: {
        "Content-Type": 'application/json',
        "auth-token": accountRepository.getLocalToken(),
      },
    }
  );
};

export default {
  addData,
  updateData,
  deleteData,
  fetchAllData,
};
