import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Book from './Book';
import {search} from '../BooksAPI';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {books: []};
    this.searchBook = this.searchBook.bind(this);
  }
  searchBook = (e) => {
    if(!e.target.value) return null;
    
    search(e.target.value).then(data => {
      data = this.assignShelf(data);
      this.setState({books: data})
      console.log(data)
    }).catch(err => 
      this.setState({books: []})
      )

  }

  // This function to assign shelf value for exist book in shelf
  assignShelf = (data) => {
    data.map(d => 
      this.props.books.filter(book => book.title === d.title).map(obj => 
        d.shelf = obj.shelf
      )
    )
    return data;
  }
  render() {
    return (
      <div className="search-books">
      <div className="search-books-bar">
        <Link to='/' className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input type="text" onChange={this.searchBook} placeholder="Search by title or author"/>

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
        {
          (this.state.books) &&
          this.state.books.map(book =>
          <Book moveBook={this.props.moveBook} key={book.id} book={book}></Book>
        )}
        </ol>
      </div>
    </div>
    )
  }
}

export default Search;