import React from "react"

export function Bookmark(props) {


    let bookMarkedTvData = props.bookMarkedTvData
    let bookMarkedMovies = props.bookMarkedMovies

    // if (bookMarkedTvData.length === 0) {
    //     setBookmarkTV(false)
    // }

    return (
        <div className="bookmark-section">
            <div><h1 className="bookmark-header">Bookmarked Movies</h1>
                <div className="bookmark-details"> {bookMarkedMovies.map((data, idx) => <div className="movies-item bookmark-item" key={idx} style={{ backgroundImage: `url(${data.thumbnail.regular.small})` }}>
                    <div className="movies-bookmark" key={idx} onClick={(e) => props.handleBookmark(e, idx, data)}><img src="./assets/icon-bookmark-full.svg" alt="bookmark" /></div>
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
                    {bookMarkedMovies.length === 0 && <p style={{ color: "red", fontSize: "20px" }}>Bookmark your favourite movies!!</p>}
                </div>
            </div>
            <div><h1 className="bookmark-header">Bookmarked TV Series</h1>
                <div className="bookmark-details"> {bookMarkedTvData.map((data, idx) => <div className="movies-item bookmark-item" key={idx} style={{ backgroundImage: `url(${data.thumbnail.regular.small})` }}>
                    <div className="movies-bookmark" key={idx} onClick={(e) => props.handleBookmark(e, idx, data)}><img src="./assets/icon-bookmark-full.svg" alt="bookmark" /></div>
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
                    {bookMarkedTvData.length === 0 && <p style={{ color: "red", fontSize: "20px" }}>Bookmark your favourite TV series!!</p>}</div>
            </div>
        </div>
    )
}