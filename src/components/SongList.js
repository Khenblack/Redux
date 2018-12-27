import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSong } from '../actions';

class SongList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>SongList</div>
    )
  }
}

const mapStateToProps = ({ songs }) => {
  return { songs };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectSong }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList);