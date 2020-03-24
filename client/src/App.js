import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import { Route, Switch } from 'react-router-dom'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    if (!savedList.includes(movie)){
      setSavedList( [...savedList, movie] );
    }
    
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Switch>
          <Route path="/movies/:movieId">
            <Movie addToSavedList={addToSavedList}/>
          </Route>
          <Route path="/">
            <MovieList />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
