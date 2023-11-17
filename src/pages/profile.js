import React from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const person = auth.user;
  const signOut = auth.logout;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}>
      <div>
        {auth.user ? (
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "500",
              marginTop: "2rem",
            }}>
            Welcome {auth.user}, happy shopping! {" : )"}
          </p>
        ) : (
          navigate("/e-commerce-website/login")
        )}
      </div>
      <button
        type="submit"
        onClick={() => signOut(person)}
        style={{
          padding: "0.75rem",
          margin: "2rem 0 0 0",
          backgroundColor: "red",
          color: "azure",
          boxShadow: "3px 3px 3px 3px grey",
          fontFamily: "Verdana",
          fontWeight: "600",
          fontSize: "1rem",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
