import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/navbar'
import Home from './pages/home';
import Latest from './pages/Latest';
import AnimeDetails from "./pages/AnimeDetails";

export default function App() {
    const [query,SetQuery]=useState("");
    const [results,SetResults]=useState([]);
    const handleSearch=async ()=>{
        if(!query) return;
        try{
            const response=await axios.get(`https://api.jikan.moe/v4/anime?q=${query}&limit=20`);
            SetResults(response.data.data);
        }catch(error){
            console.log(`Fetching Error {error}`)
        }
    }
  return (
    <Router>
      <Navbar
        query={query}
        setQuery={SetQuery}
        handleSearch={handleSearch}
 />
      <Routes>
        <Route path="/" element={<Home results={results}/>} />
        <Route path="/latest" element={<Latest/>} />
        <Route path="/anime/:id" element={<AnimeDetails/>}/>
      </Routes>
    </Router>
  );
}
