import React from "react"

export function Trending(props) {
    return (

        <div className="trending-section">
            <h1 className="trending-header">Trending</h1>
            {props.trendingData.map((data, idx) => <div className="trending-item" key={idx} style={{ backgroundImage: `url(${data.thumbnail.trending.small})` }}>

                <div className="bookmark" key={idx} onClick={(e) => props.handleBookmark(e, idx, data)}>
                    <img src={data.isBookmarked === true ? "./assets/icon-bookmark-full.svg" : "./assets/icon-bookmark-empty.svg"} alt="bookmark" />
                </div>

                <div className="play">
                    <button className="play-button"><img src="./navbarIcons/icon-play.svg" alt="play-button" /></button>
                    <p>Play</p>
                </div>
                <div className="trending-detail">
                    <div className="trending-detail-info">
                        <ul>
                            <li>{data.year}</li>

                            <li><img src={data.category === "Movie" ? "./navbarIcons/icon-nav-movies.svg" : "./navbarIcons/icon-nav-tv-series.svg"} alt="movies-nav-icon" /><span>{data.category}</span></li>

                            <li>{data.rating}</li>

                        </ul>
                    </div>
                    <h2>{data.title}</h2>
                </div>
            </div>)
            }
        </div >


    )
}