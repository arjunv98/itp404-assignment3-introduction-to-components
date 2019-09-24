import React from 'react';
import './App.css';
import getPosts from './getPosts';
import Loading from './Loading';
import SearchForm from './SearchForm';
import PostList from './PostList';
import SubbredditInfo from './SubbredditInfo';
import ReadCount from './ReadCount';

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         posts: [],
         searchValue: '',
         prevSearches: [],
         readCount: 0,
         error: false,
         loading: false
      };
   }
   handleSearch = async (searchValue) => {
      this.setState({ loading: true });

      let posts = await getPosts(searchValue);
      let prevSearches = this.state.prevSearches.concat(searchValue);
      this.setState({ posts, prevSearches, loading: false });
      if (this.state.posts.error !== undefined) {
         this.state.error = true;
      }
      else {
         this.state.error = false;
      }
   }
   incrementCount = (event) => {
      this.setState({ readCount: this.state.readCount + 1 });
   }
   render() {
      return (
         <div>
            <h1>A4: Components and User Events</h1>
            <ReadCount onClick={this.incrementCount} />
            <div id="read-count">
               <h5>Read Count</h5>
               <p>{this.state.readCount}</p>
            </div>
            <SearchForm onSearch={this.handleSearch} />
            {this.state.loading && !this.state.error && <Loading />}
            {!this.state.loading && !this.state.error && <SubbredditInfo posts={this.state.posts} />}
            <div id="posts">
               {!this.state.loading && !this.state.error && <PostList posts={this.state.posts} onClick={this.incrementCount} />}
            </div>
         </div>
      );
   }
}

export default App;
