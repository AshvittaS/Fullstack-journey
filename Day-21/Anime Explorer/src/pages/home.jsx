import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AnimeCard from '../components/AnimeCard';
import './home.css';
import { useLocation } from 'react-router-dom';

function Home() {
  const [trending, setTrending] = useState([]);
  const location = useLocation();
  const q = new URLSearchParams(location.search).get('q') || '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (q) {
          const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(q)}&limit=24`);
          setTrending(response.data.data || []);
        } else {
          const response = await axios.get('https://api.jikan.moe/v4/top/anime');
          setTrending(response.data.data || []);
        }
      } catch (error) {
        console.error('Error fetching anime:', error);
      }
    };
    fetchData();
  }, [q]);

  return (
    <div className="home">
      <h2>{q ? `Search Results for "${q}"` : `Trending Anime`}</h2>
      <div className="anime-grid">
        {trending.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  )
}

export default Home;