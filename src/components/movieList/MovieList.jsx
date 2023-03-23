import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/Card"
import '../../pages/genres'
import { genres } from "../../pages/genres"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type,id} = useParams()
    // let mainTitle = '';

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const mainTitle=()=>{
        let title;
            if(id) {
                genres.map(genre => {
                    if(id==genre.id) {
                        console.log("1");
                    title = genre.name; 
            }} )
            } else {
                console.log("2");
                title = type ? type : "POPULAR"
            }
            return title.toUpperCase();
        }
            // if(!window.location.href.includes("profile")){
            //     id ? genres.map(genre => {if(id==genre.id){
            //     <h2 className="list__title">{genre.name.toUpperCase()}</h2>
            //     }}) : <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            // }
    

    const getData = () => {
        let urlVariable;
        if(window.location.href.includes("movies-genre")){
            urlVariable=`discover/movie?api_key=7b53acebe78916de0ee5905de952d3c4&with_genres=${id}`
        }else{
            urlVariable=`movie/${type ? type : "popular"}?api_key=7b53acebe78916de0ee5905de952d3c4&language=en-US`
        }
         fetch(`https://api.themoviedb.org/3/${urlVariable}`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            
                {/* {(!window.location.href.includes("profile"))&&
                    id ? genres.map(genre => {if(id==genre.id){
                      <h2 className="list__title">{genre.name}</h2>
                    }}) : <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
                } */}

                {!window.location.href.includes("profile") && <h2 className="list__title">{mainTitle()}</h2>}
            
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList