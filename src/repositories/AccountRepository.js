import axios from "axios";

const login = async (email, password) => {
  return axios.post("http://localhost:5000/api/auth/login", { 
    email,
    password,
  });
};
const signup = async (fname,lname, email, password) => {
 return axios.post("http://localhost:5000/api/auth/createuser", {
    fname,  
    lname,  
    email,
    password,
    });
  };
const setLocalToken = (token) => {
    localStorage.removeItem('token');
    localStorage.setItem('token', token);
}

const getLocalToken = () => {
  return localStorage.getItem("token");
};

export default {
  login,
  signup,
  setLocalToken,
  getLocalToken,
};
