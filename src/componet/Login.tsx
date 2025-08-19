import React, { useRef, useState } from "react";
import useFormInput from "./hook/useFormInput";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  //   const usernameRef = useRef<HTMLInputElement>(null);
  //   const passwordRef = useRef<HTMLInputElement>(null);
//    const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

 const username = useFormInput("");
  const password = useFormInput("");
  const [message, setMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // const username = usernameRef.current?.value || "";
    // const password = passwordRef.current?.value || "";

    // if (formData.username === "admin" && formData.password === "xminds@123") {
    if (username.value === "admin" && password.value === "xminds@123") {
      setMessage("Login Successful");
      setIsSuccess(true);
      navigate('/dashboard');

    } else {
      setMessage("Login Failed");
      setIsSuccess(false);
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          {/* <input type="text" ref={usernameRef} style={{ width: 200 }} /> */}
          {/* <input
            type="text"
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            style={{ width: 200 }}
          /> */}
           <input type="text" {...username} style={{ width: 200 }} />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Password : </label>
          {/* <input type="password" ref={passwordRef} style={{ width: 200 }} /> */}
          {/* <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            style={{ width: 200 }}
          /> */}
          <input type="password" {...password} style={{ width: 200 }} />
        </div>
        <button
          type="submit"
          style={{
            marginTop: "15px",
            backgroundColor: "blue",
            color: "white",
            width: 200,
          }}
        >
          Login
        </button>
      </form>
      {message && (
        <p
          style={{
            color: isSuccess ? "green" : "red",
            fontWeight: "bold",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};
