import React from "react";

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <header>
      <h1>Spotify</h1>
      <button className="btn btn-logout" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
};

export default Header;
