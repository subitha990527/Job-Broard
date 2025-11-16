import React from "react";

export default function Header({ onPostClick }) {
  return (
    <header className="header">
      <h2>JobBoard</h2>
      <nav>
        <a href="#">Home</a>
        <a href="#">Jobs</a>
        <a href="#">Contact</a>
      </nav>
      <button onClick={onPostClick}>Post a Job</button>
    </header>
  );
}
