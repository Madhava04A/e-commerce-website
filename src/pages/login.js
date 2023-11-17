import React from "react";
import { useState } from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [person, setPerson] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    if (person.length > 0) {
      auth.login(person);
      navigate("/e-commerce-website/profile");
    } else {
      alert("You did not enter any word");
    }
  }
  return (
    <div
      style={{
        width: "100%",
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}>
      <label
        style={{
          fontFamily: "Verdana",
          fontSize: "1.5rem",
          fontWeight: "500",
        }}>
        UserName{" "}
      </label>
      <input
        type="text"
        onChange={(e) => setPerson(e.target.value)}
        value={person}
        style={{
          border: "2px solid grey",
          padding: "0.5rem",
          marginTop: "1rem",
          fontSize: "1.5rem",
          fontFamily: "Verdana",
          borderRadius: "10px",
        }}
      />

      <button
        type="submit"
        onClick={handleLogin}
        style={{
          padding: "1rem",
          marginTop: "1rem",
          backgroundColor: "#252525",
          color: "azure",
          boxShadow: "3px 3px 3px 3px grey",
          fontFamily: "Verdana",
          fontWeight: "600",
          fontSize: "1.2rem",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}>
        Login
      </button>
    </div>
  );
};

export default Login;
