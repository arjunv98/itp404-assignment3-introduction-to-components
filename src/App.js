import React from 'react';
import './App.css';
import getPosts from './getPosts';
import Loading from './Loading';
import SearchForm from './SearchForm';
import PostList from './PostList';
import SubbredditInfo from './SubbredditInfo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchValue: '',
      error: false,
      loading: false
    };
  }
  handleSearch = async (searchValue) => {
    this.setState({loading: true});

    let posts = await getPosts(searchValue);
    this.setState({ posts, loading: false });
    if (this.state.posts.error !== undefined) {
      this.state.error = true;
    }
    else {
      this.state.error = false;
    }
  }
  render() {
    return (
      <div>
        <h1>A4: Components and User Events</h1>
        <SearchForm onSearch={this.handleSearch} />
        {this.state.loading && !this.state.error && <Loading />}
        {!this.state.loading && !this.state.error && <SubbredditInfo posts={this.state.posts} />}
        <div id="posts">
          {!this.state.loading && !this.state.error && <PostList posts={this.state.posts} />}
        </div>
      </div>
    );
  }
}

export default App;
