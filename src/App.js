import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import HeaderComponent from './components/Header'
import Shelf from './components/Shelf'
import {getAll, update} from './BooksAPI'
import {Link, Route} from 'react-router-dom'
import Search from './components/Search'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.moveBook = this.moveBook.bind(this);
    this.state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      showSearchPage: false,
      books: []
    }
  }
  componentDidMount() {
    getAll().then(data => {
      this.setState({books: data})
    }  
      ).catch()
  }

  moveBook = (book, shelf) => {
    update(book, shelf).then(res => {
      getAll().then(data => {
        this.setState({books: data})

      }).catch()
    }).catch()
  }



  render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <div className="list-books">
        <HeaderComponent></HeaderComponent>
        <div className="list-books-content">
          <div>
            <Shelf moveBook={this.moveBook} books={this.state.books} title="Currently Reading" shelf="currentlyReading"></Shelf>
            <Shelf moveBook={this.moveBook} books={this.state.books} title="Want To Read" shelf="wantToRead"></Shelf>

            <Shelf moveBook={this.moveBook} books={this.state.books} title="Read" shelf="read"></Shelf>

          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
      )}></Route>

      <Route path='/search' render={() => (
        <Search moveBook={this.moveBook}></Search>
      )}></Route>
      </div>
    )
  }
}

export default BooksApp
