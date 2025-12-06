import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AnimeDetails.css';
function AnimeDetails() {
    const{id}=useParams();
    const navigate = useNavigate();
    const [anime,setAnime]=useState(null);
    const [expandSynopsis, setExpandSynopsis]=useState(false);

    const truncateSynopsis = (text) => {
        if (!text) return '';
        const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
        if (sentences.length > 4) {
            return sentences.slice(0, 4).join('').trim();
        }
        return text;
    };

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
                <div>
                    <strong>Synopsis:</strong>
                    <p>{expandSynopsis ? anime.synopsis : truncateSynopsis(anime.synopsis)}</p>
                    {anime.synopsis && anime.synopsis.match(/[^.!?]+[.!?]+/g)?.length > 4 && (
                        <button 
                            className="read-more-btn" 
                            onClick={() => setExpandSynopsis(!expandSynopsis)}
                        >
                            {expandSynopsis ? 'Read Less' : 'Read More'}
                        </button>
                    )}
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default AnimeDetails