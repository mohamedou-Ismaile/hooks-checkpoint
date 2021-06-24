import React,{Fragment, useState} from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/Filter';
import Footeer from './components/Footer';
import Header from './components/Header';
function App() {

  const [movies, setMovies] = useState([]);
  
  const addMovie = (title,description,postURL,rating) => {
    const newMovies = [...movies, { title ,description,postURL,rating}];
    setMovies(newMovies);
  };
  
  return (
    <Fragment>
    <div className="App justify-content-center mt-5  ">
      <div>
       <Header />
       </div>
     <div className="justify-content-center pt-4  ">
      <MovieCard addMovie={addMovie} />

     
      {
      movies.map((movie) => {
      return (
        <MovieList key={movie} movie={movie} />
      )
    }
      )}
      </div>
      <div className="App justify-content-center mt-5  ">
        <h3>High rated Movies</h3>
      {
      movies.filter(movies => movies.rating > 3 ).map((movie,index) => (
     <Filter
     movie= {movie}
     key ={index}
     index = {index}
      />
  ))}
  </div>
  <br></br>
  <div>
  <Footeer />
  </div>
    

    </div>
    </Fragment>
  );
}

export default App;
