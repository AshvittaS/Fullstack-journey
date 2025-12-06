import React from 'react'
import './AnimeCard.css'
import { useNavigate } from 'react-router-dom'

function AnimeCard({ anime }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/anime/${anime.mal_id}`);
  };

  return (
    <div className="anime-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={anime.images.jpg.image_url} alt={anime.title} />
      <h3>{anime.title}</h3>
      <p>Score: {anime.score ?? anime.rating}</p>
    </div>
  )
}

export default AnimeCard