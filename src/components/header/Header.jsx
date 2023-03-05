import React, { useState } from "react"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [searchMovieName, setSearchMovieName] = useState("");
    const suggestMovie = async (e)=>{
        setSearchMovieName(e.target.value);
        if (e.target.value.length < 1) {
            setSearchedMovies([]);
        }
        const url = `https://api.themoviedb.org/3/search/movie?api_key=7b53acebe78916de0ee5905de952d3c4&language=en-US&query=${e.target.value}&page=1`
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results);
            setSearchedMovies(data.results);
        }catch(err){
            console.log(err);
        }
    }

    const searchReset = ()=>{
        setSearchMovieName("");
        setSearchedMovies([]);
    }
    return (
        // <div className="header">
        //     <div className="headerLeft">
        //         <Link to="/" style={{textDecoration: "none"}}>
        //             {/* <img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /> */}
        //             <span className="logoname">MOVIEFINDER</span>
        //         </Link>
        //         <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
        //         <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
        //         <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
        //     </div>
        // </div>

        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand logoname" to="/"><span className="logoname">MOVIEFINDER</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse headerLeft" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                        </li>
                    </ul>
                    <div className="searchArea">
                        <div className="headerSearch">
                            <div className="headerRight">
                                <input className="headerSearchInput" value={searchMovieName} type="text" placeholder="Search" onChange={(e)=>suggestMovie(e)}/>
                                <div className="headerSearchBtn">
                                    <button className="btn btn-outline-danger headerButton" type="submit">Search</button>
                                </div>
                            </div>
                        </div>
                        <ul className="searchedMoviesList">
                            {(searchedMovies.length > 0 && searchedMovies.map((movie) => {
                                return (
                                    <li className="searchedMoviesListOuter">
                                        <Link className="searchedMovies" to={`/movie/${movie.id}`} onClick={searchReset}>
                                            {/* <img className="searchedMovieImg" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt="qwerty" /> */}
                                            <span className="searchedMovieName">{movie.title}</span>
                                        </Link>
                                    </li>)
                            }))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header