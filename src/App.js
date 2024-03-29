import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieList/MovieList';
import Movie from './pages/movieDetail/Movie';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
          <Route index element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="profile" element={<Profile />}></Route>
                <Route path="movies-genre/:id" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;