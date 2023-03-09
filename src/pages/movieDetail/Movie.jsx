import React, {useEffect, useState} from "react"
import "./movie.css"
import { Link,useParams } from "react-router-dom"

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const [actors,setActors]=useState()
    const [recommendations,setRecommendations] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        getActors()
        getRecommendations()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7b53acebe78916de0ee5905de952d3c4&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    const getActors=()=>{
        fetch(`http://api.themoviedb.org/3/movie/${id}/casts?api_key=7b53acebe78916de0ee5905de952d3c4`).then(res => res.json()).then(data => setActors(data))
    }

    const getRecommendations=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=7b53acebe78916de0ee5905de952d3c4&language=en-US&page=1`).then(res => res.json()).then(data => setRecommendations(data))
    }

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Links Related Movie: </div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Website <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__heading">Actors</div>
            <div className="movie__actors">
                {
                    actors && actors.cast && actors.cast.map(actor=>(
                        <>
                        {
                            actor.profile_path &&
                            <span className="actorImage">
                                <img className="movie__actor" src={"https://image.tmdb.org/t/p/original"+actor.profile_path} alt="" />
                                <span>{actor.name}</span>
                            </span>
                        }
                        </>
                    ))
                }
            </div>
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
            <div className="movie__heading">Recommendations</div>
            <div className="movie__recommendations">
                {
                     recommendations && recommendations.results && recommendations.results.length > 0 && recommendations.results.map(movie=>(
                        <>
                        {
                            movie.poster_path && 
                            <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}} className="recommendationImage">
                                <img className="movie__recommendation" src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt="" />
                                <span>{movie.title}</span>
                            </Link>
                        }
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Movie