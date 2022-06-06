import React, { Component } from "react";
// import PropTypes from "prop-types";
import firebase from "../firebase";
import { Link } from "react-router-dom";

class create extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("articles");
    this.state = {
      title: "",
      body: "",
      author: "",
    };
  }

  onChange = (e) => {
    const state1 = this.state;
    state1[e.target.name] = e.target.value;
    this.setState(state1);
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { title, body, author } = this.state;
    this.ref
      .add({
        title,
        body,
        author,
      })
      .then((docRef) => {
        this.setState({
          title: "",
          body: "",
          author: "",
        });
        this.props.history.push("/");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    const { title, body, author } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Add Article</h3>
          </div>
          <div class="panel-body">
            <h4>
              <Link to="/" class="btn btn-primary">
                Article List
              </Link>
            </h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Title:</label>
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  value={title}
                  onChange={this.onChange}
                  placeholder="Title"
                />
              </div>
              <div class="form-group">
                <label for="body">Body:</label>
                <textarea
                  class="form-control"
                  name="body"
                  onChange={this.onChange}
                  placeholder="Body"
                  cols="80"
                  rows="3"
                >
                  {body}
                </textarea>
              </div>
              <div class="form-group">
                <label for="author">Author:</label>
                <input
                  type="text"
                  class="form-control"
                  name="author"
                  value={author}
                  onChange={this.onChange}
                  placeholder="Author"
                />
              </div>
              <button type="submit" class="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default create;
