import React, {Component} from 'react'
import Book from './Book'


class Shelf extends Component {

  render() {
    if (!this.props.books) return null;
    return (
      
      <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    
                    {this.props.books.filter(book => book.shelf === this.props.shelf).map(book =>
                      <Book moveBook={this.props.moveBook} key={book.id} book={book}></Book>
                    )}
                    </ol>
                  </div>
                </div>
              )
  }
}

export default Shelf