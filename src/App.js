import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';

function App() {
  const movies = [
    { title: 'yunbo1', year: 1996 },
    { title: 'yunbo2', year: 1997 },
    { title: 'yunbo3', year: 1998 },
    { title: 'yunbo4', year: 1999 },
  ];
  const renderMovies = movies.map((movie) => {
    return <Movie movie={movie} key={movie.title} />;
  });
  return (
    <div className="App">
      <h1>Movie list</h1>
      {renderMovies}
    </div>
  );
}

export default App;
