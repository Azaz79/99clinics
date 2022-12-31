import React, { useState } from "react";
import accountRepository from "../repositories/AccountRepository";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await accountRepository.login(email, password);
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
        <div className="mb-3 mx-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            id="exampleInputEmail1"
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 mx-3">
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
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary mx-3" onClick={handleSubmit}>
          Login
        </button>
      {/* </form> */}
    </div>
  );
}

export default Login;
