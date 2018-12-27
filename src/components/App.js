import React from 'react';
import { connect } from 'react-redux';
import SongList from './SongList';

const App = (props) => {
  console.log(props);
  return (
    <div className='ui container grid'>
      <div className='ui row'>
        <div className='column eight wide'>
          <SongList />
        </div>
      </div>
    </div>
  )
};

export default connect()(App);