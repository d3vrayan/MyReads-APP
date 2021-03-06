import React, {Component} from 'react'

class Book extends Component {

  selectedValue = (e) => {
    this.props.moveBook(this.props.book, e.target.value);
  }
  render() {
    return (
      <li>
                        <div className="book">
                          <div className="book-top">
                          
                          { // Check if the book had image link or not.
                            this.props.book.imageLinks ?
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
                          :
                          null
                          }  
                            <div className="book-shelf-changer">
                              <select onChange={this.selectedValue}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.props.book.title}</div>
                          <div className="book-authors">{this.props.book.authors}</div>
                        </div>
                      </li>
    )
  }
}

export default Book;