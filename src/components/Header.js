// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <h1>AiBlender</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
