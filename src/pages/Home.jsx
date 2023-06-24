import { TrendMovies } from "components/API/API";
import { useEffect, useState } from "react";
import MovieList from "components/MovieList/MovieList";
export default function Home() {
    const [trendingMoviesArr, setTrendingMoviesArr] = useState([]);

    useEffect( () => {
    TrendMovies().then(resp => {
     setTrendingMoviesArr([...resp.data.results]);
    })
    }, []);

    return (
    <>
    <h2 style={{fontSize: '40px', color: 'white', textAlign:'center',fontFamily: 'monospace', letterSpacing: '0.1em'}}>The most popular movies today</h2>
    <MovieList moviesArr={trendingMoviesArr}/>
    </>
    );
}