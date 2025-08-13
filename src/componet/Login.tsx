import React, { useRef, useState } from "react";

export const Login = () => {
  //   const usernameRef = useRef<HTMLInputElement>(null);
  //   const passwordRef = useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // const username = usernameRef.current?.value || "";
    // const password = passwordRef.current?.value || "";

    if (username === "admin" && password === "xminds@123") {
      setMessage("Login Successful");
      setIsSuccess(true);
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
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: 200 }}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Password : </label>
          {/* <input type="password" ref={passwordRef} style={{ width: 200 }} /> */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: 200 }}
          />
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
