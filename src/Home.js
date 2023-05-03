import React from "react"
import { Trending } from "./Trending";
import { Recomended } from "./Recomended";

export function Home(props) {
    let handleBookmark = props.handleBookmark
    const trendingData = props.contentData.filter(data =>
        data.isTrending === true
    );

    const recommendData = props.contentData.filter(data =>
        data.isTrending !== true
    );


    return (
        <div className="home-screen">
            <Trending trendingData={trendingData} handleBookmark={handleBookmark} />
            <Recomended recommendData={recommendData} handleBookmark={handleBookmark} />
        </div>
    )
}   