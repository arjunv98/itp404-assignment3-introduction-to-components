import React from 'react';
import './App.css';
import getPosts from './getPosts';
import Loading from './Loading';
import Header from './Header';
import PostList from './PostList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      loading: true
    };
  }
  async componentDidMount() {
    let posts = await getPosts('soccer');
    this.setState({ posts, loading: false });
  }
  render() {
    return(
      <div>
        <h1>A3: Introduction to Components</h1>
        <div id="header">
          {this.state.loading ? <Loading /> : <Header posts={this.state.posts} />}
        </div>
        <div id="posts">
        {this.state.loading ? <Loading /> : <PostList posts={this.state.posts} />}
        </div>
      </div>
    );
  }
}

export default App;
