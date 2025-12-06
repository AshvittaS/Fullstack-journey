import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnimeCard from '../components/AnimeCard';
import '../pages/home.css';

function Latest() {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        // Jikan's seasons/now returns the current season anime
        const resp = await axios.get('https://api.jikan.moe/v4/seasons/now');
        setLatest(resp.data.data || []);
      } catch (err) {
        console.error('Error fetching latest anime:', err);
      }
    };
    fetchLatest();
  }, []);

  return (
    <div className="home">
      <h2>Latest / Current Season Anime</h2>
      <div className="anime-grid">
        {latest.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}

export default Latest;
