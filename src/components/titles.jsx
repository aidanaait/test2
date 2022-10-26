import React, { Component } from "react";
import { getBooks } from "../ExternalServices/bookService";
import Review from "./review";
class Titles extends Component {
  state = {
    books: getBooks(),
  };

  handleDelete = ({ _id }) => {
    console.log("Handling Delete");
    const books = this.state.books.filter((book) => book._id !== _id);
    // this.setState({ books: books });
    this.setState({ books }); //shorthand if key and value are same
  };

  render() {
    const { length } = this.state.books;

    if (length === 0) return <p>There are no titles to display</p>;
    return (
      <>
        <h1>My Book Library</h1>
        <p>Showing {length} books</p>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Author</th>
              <th>Number in Stock</th>
              <th>Price</th>
              <th>Year</th>
              <th>Review</th>
              <th>Action(s)</th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map((book, index) => (
              <tr key={index}>
                <td>{book._id}</td>
                <td>{book.title}</td>
                <td>{book.category.name}</td>
                <td>{book.author}</td>
                <td>{book.numberInStock}</td>
                <td>{book.price}</td>
                <td>{book.publishYear}</td>
                <td>
                  <Review status={book.liked}></Review>
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(book)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Titles;
