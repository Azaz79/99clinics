import React, { useState } from "react";
import accountRepository from "../repositories/AccountRepository";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")
  const handleSignup = async () => {
    try {
      const response = await accountRepository.signup(name, email, password);
      console.log(response.data);
      accountRepository.setLocalToken(response.data.authtoken);
      console.log(accountRepository.getLocalToken());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* <form> */}
      <div className="mb-3 mx-2">
          <label htmlFor="exampleName" className="form-label">
            Full Name
          </label>
          <input
            type="name"
            className="form-control "
            value={name}
            id="exampleName"
            onChange={(e) => setName(e.target.value)}
            aria-describedby="nameHelp"
          />
          <div id="nameHelp" className="form-text">
            We'll never share your Personal info. with anyone else.
          </div>
        </div>
        <div className="mb-3 mx-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control "
            value={email}
            id="exampleInputEmail1"
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 mx-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 mx-2">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input
            type="text"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="exampleInputPassword2"
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input mx-2" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSignup}>
          Sign Up
        </button>
      {/* </form> */}
    </div>
  );
}

export default SignUp;
