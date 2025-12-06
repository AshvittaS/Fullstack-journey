import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AnimeDetails.css';
function AnimeDetails() {
    const{id}=useParams();
    const navigate = useNavigate();
    const [anime,setAnime]=useState(null);
    useEffect(()=>{
        const fetchAnime=async()=>{
            try{
                const response= await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
                setAnime(response.data.data);
            }catch(error){
                console.log(`Error in displaying the details of anime${error}`)
            }
        };
        fetchAnime();
    },[id]);
      if (!anime) return <p>Loading...</p>;

  return (
    <>
    <div className='anime-details'>
        <span className="back-btn" onClick={() => navigate(-1)}>← Back</span>
        <div className='details-container'>
            <img src={anime.images.jpg.image_url} alt={anime.title}/>
            <div className='details-info'>
                <h2>{anime.title}</h2>
                <p><strong>Episodes:</strong>{anime.episodes}</p>
                <p><strong>Score:</strong>{anime.score}</p>
                <p><strong>Rating:</strong>{anime.rating}</p>
                <p><strong>Geners:</strong>{anime.genres.map(g=>g.name).join(',')}</p>
                <p><strong>Synopuse:</strong>{anime.synopsis}</p>

            </div>
        </div>
    </div>
    </>
  )
}

export default AnimeDetails