import './App.css';
import React from "react"
import { useState } from 'react';
import { NavBar } from './NavBar';
import { Home } from './Home';
import { Routes, Route } from "react-router-dom"
import { data } from "./data"
import { Movies } from './Movies';
import { produce } from "immer"
import { TV } from "./TV"
import { Bookmark } from './Bookmark';


function App() {
  const [contentData, setContentData] = useState(data)
  const [searchPage, setSearchPage] = useState(false)
  const [searchValue, setSearchValue] = useState("")


  let moviesData = contentData.filter(item => item.category === "Movie")
  let tvData = contentData.filter(item => item.category === "TV Series")
  let bookMarkedTvData = contentData.filter(item => item.isBookmarked === true && item.category === "TV Series")
  let bookMarkedMovies = contentData.filter(item => item.isBookmarked === true && item.category === "Movie")


  function handleBookmark(event, idx, data) {
    let index = contentData.indexOf(data)
    const nextState = produce(contentData, draft => {
      draft[index].isBookmarked = !draft[index].isBookmarked
    })
    setContentData(nextState)
  }


  React.useEffect(() => {
    let mounted = true;
    if (mounted) { setContentData(contentData); return () => mounted = false; }
  }, [contentData])




  function searchItem(e) {
    setSearchValue(e.target.value)
    setSearchPage(true)
  }

  React.useEffect(() => { if (searchValue.length === 0) setSearchPage(false) }, [searchValue.length])

  let searchedResult = contentData.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))



  return (
    <div className="App">
      <NavBar />
      <div className="search-box">
        <img src="./navbarIcons/icon-search.svg" alt="search-icon" />
        <input type="text" className="search-text" value={searchValue} onChange={(e) => searchItem(e)} placeholder="Search for movies or TV series" />
      </div>
      {!searchPage && <Routes>
        <Route exact path="/" element={<Home contentData={contentData} handleBookmark={handleBookmark} />} />
        <Route path="/movies" element={<Movies contentData={contentData} handleBookmark={handleBookmark} moviesData={moviesData} />} />
        <Route path="/tv" element={<TV contentData={contentData} handleBookmark={handleBookmark} tvData={tvData} />} />
        <Route path="/bookmark" element={<Bookmark contentData={contentData} handleBookmark={handleBookmark} bookMarkedMovies={bookMarkedMovies} bookMarkedTvData={bookMarkedTvData} />} />
      </Routes>
      }
      {searchPage && <div style={{ color: "white" }} className='movies-section'>
        <h1 className="movies-header">Found {searchedResult.length} {searchedResult.length > 1 ? "matches" : "match"}</h1>
        <div className="movie-details search-section">     {searchedResult.map((data, idx) => <div className="movies-item search-item" key={idx} style={{ backgroundImage: `url(${data.thumbnail.regular.small})` }}>
          <div className="movies-bookmark" key={idx} onClick={(e) => handleBookmark(e, idx, data)}>
            <img src={data.isBookmarked === true ? "./assets/icon-bookmark-full.svg" : "./assets/icon-bookmark-empty.svg"} alt="bookmark" /></div>
          <div className="play">
            <button className="play-button"><img src="./navbarIcons/icon-play.svg" alt="play-button" /></button>
            <p>Play</p>
          </div>
          <div className="trending-detail">
            <div className="trending-detail-info">
              <ul>
                <li>{data.year}</li>
                <li><img
                  src={data.category === "Movie" ? "./navbarIcons/icon-nav-movies.svg" : "./navbarIcons/icon-nav-tv-series.svg"} alt="movies-nav-icon" /><span>{data.category}</span></li>
                <li>{data.rating}</li>
              </ul>
            </div>
            <h2>{data.title}</h2>
          </div>
        </div>)
        }</div>
      </div>}
    </div >
  );
}

export default App;
