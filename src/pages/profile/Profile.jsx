import React, { useEffect, useState } from "react";
import MovieList from "../../components/movieList/MovieList";
import "./profile.css";

const Profile = () => {
  const [watchlistMovies, setWatchlistMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=7b53acebe78916de0ee5905de952d3c4&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setWatchlistMovies(data.results));
  }, []);

  return (
    <>
      <div className="userDetails">
        <div className="userimage">
          <i class="fa-solid fa-user userimage"></i>
        </div>
        <div className="userInfo">
          <table>
            <tr>
              <td className="tableLabel">Name:</td>
              <td className="uservalue">Parth Dedaniya</td>
            </tr>
            <tr>
                <td className="tableLabel">
                    Age:
                </td>
                <td className="uservalue">
                    21
                </td>
            </tr>
            <tr>
                <td className="tableLabel">
                    Email:
                </td>
                <td className="uservalue">
                    parthdedaniya45@gmail.com
                </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="watchlist">
        <div className="watchtitle">
        WATCHLIST
        </div>
        <MovieList />
      </div>
    </>
  );
};

export default Profile;
