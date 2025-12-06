import React, { useState } from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (q) navigate(`/?q=${encodeURIComponent(q)}`);
    else navigate('/');
  };

  return (
    <nav className='navbar'>
      <h1>AnimeExplorer</h1>
      <ul className='options'>
        <li><Link to="/" style={{textDecoration:'none', color:'#ffffff', fontWeight:'500'}}>Home</Link></li>
        <li><Link to="/" style={{textDecoration:'none', color:'#ffffff', fontWeight:'500'}}>Trend</Link></li>
        <li>
          <form onSubmit={onSubmit}>
            <input
              type='search'
              placeholder='Search anime...'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className='search-bar'
            />
          </form>
        </li>
        <li><Link to="/latest" style={{textDecoration:'none', color:'#ffffff', fontWeight:'500'}}>Latest</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;