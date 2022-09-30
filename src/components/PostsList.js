import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

export class PostsList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return <div>PostsList</div>;
  }
}

export default connect(null, { fetchPosts })(PostsList);
