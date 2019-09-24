import React from 'react';
import './App.css';
import getPosts from './getPosts';
import Loading from './Loading';
import SearchForm from './SearchForm';
import PostList from './PostList';
import SubbredditInfo from './SubbredditInfo';
import ReadCount from './ReadCount';
import PreviousSearches from './PreviousSearches';

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         posts: [],
         searchValue: '',
         previousSearches: [],
         readCount: 0,
         error: false,
         loading: false
      };
   }
   handleSearch = async (searchValue) => {
      this.setState({ loading: true });

      let posts = await getPosts(searchValue);

      let previousSearches = this.state.previousSearches;
      if (!previousSearches.includes(searchValue)) {
         previousSearches = previousSearches.concat(searchValue);
         this.setState({ previousSearches });
      }

      this.setState({ posts, loading: false });
      if (this.state.posts.error !== undefined) {
         this.state.error = true;
      }
      else {
         this.state.error = false;
      }
   }
   incrementCount = () => {
      this.setState({ readCount: this.state.readCount + 1 });
   }
   render() {
      return (
         <div>
            <h1>A4: Components and User Events</h1>
            <ReadCount readCount={this.state.readCount} />
            <SearchForm onSearch={this.handleSearch} />
            <PreviousSearches previousSearches={this.state.previousSearches} handleClick={this.handleSearch} />
            {this.state.loading && !this.state.error && <Loading />}
            {!this.state.loading && !this.state.error && <SubbredditInfo posts={this.state.posts} />}
            <div id="posts">
               {!this.state.loading && !this.state.error && <PostList posts={this.state.posts} incrementCount={this.incrementCount} />}
            </div>
         </div>
      );
   }
}

export default App;
