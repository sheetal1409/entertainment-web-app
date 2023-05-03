import React from "react"
import { Link } from "react-router-dom"

export function NavBar() {
    return (<nav className='nav-bar'>
        <div className='nav-top-section'>
            <div className='nav-movie'><img className="movie-logo" src="./navbarIcons/logo.svg" alt="search-icon-nav" /></div>
            <div className="nav-link-group">
                <div className='nav-shape1'> <Link to="/"><img src="./navbarIcons/icon-nav-home.svg" alt="home-nav-icon" /></Link></div>
                <div className='nav-shape2'><Link to="/movies"><img src="./navbarIcons/icon-nav-movies.svg" alt="movies-nav-icon" /></Link></div>
                <div className='nav-tv'><Link to="/tv"><img src="./navbarIcons/icon-nav-tv-series.svg" alt="tv-nav-icon" /></Link></div>
                <div className='nav-bookmark'><Link to="/bookmark">
                    <img src="./navbarIcons/icon-nav-bookmark.svg" alt="bookmark-nav-icon" /></Link></div>
            </div>
        </div>
        <div className='nav-image'></div>
    </nav >
    )
}