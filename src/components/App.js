import React from 'react';
import { connect } from 'react-redux';
import SongList from './SongList';

const App = (props) => {
  console.log(props);
  return (
    <div>
      <SongList />
    </div>
  )
};

export default connect()(App);