import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    title: "I broke it",
    books: ["East of Eden", "North of Whatever", "West of Somewhere Else"]
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const newBookArray = this.state.books;
    const input = document.querySelector("#book-input").value;
    newBookArray.push(input);
    this.setState({books: newBookArray })
  }

  handleClick = () => {
    this.setState({title: "I fixed it!!"})
  }
  render() {
    return (
      <article>
        <h1>{this.state.title}</h1>
        <form onSubmit={this.handleSubmit}>
          <input id="book-input"></input>
        </form>
        <button onClick={this.handleClick}>Fix it</button>
       <section>{this.state.books.map((singleBook) => {
         return <p key={singleBook}>{singleBook}</p>
       })}</section>
      </article>
    );
  }
}

export default App;
