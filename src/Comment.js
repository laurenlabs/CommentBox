import React, { Component } from 'react';
import axios from 'axios';
import style from './style';

class Comment extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      toBeUpdated: false,
      author: '',
      text: ''
    };
    //binding all our functions to this class
    this.deleteComment = this.deleteComment.bind(this);

    // this.updateComment = this.updateComment.bind(this);
    // this.handleAuthorChange = this.handleAuthorChange.bind(this);
    // this.handleTextChange = this.handleTextChange.bind(this);
    // this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
  }

  //brings up the update field when we click on the update link
  // updateComment(e) {
  //   e.preventDefault();
  //   this.setState({ toBeUpdated: !this.state.toBeUpdated });
  // }
  //
  // handleTextChange(e) {
  //   this.setState({ text: e.target.value });
  //   console.log(this.state.text);
  // }
  //
  // handleAuthorChange(e) {
  //   this.setState({ author: e.target.value });
  //   console.log(this.state.author);
  // }

  // handleCommentUpdate(e) {
  //   e.preventDefault();
  //   // let id = this.props.uniqueID;
  //   //if author or text changed, set it. if not, leave null and our PUT request
  //   //will ignore it.
  //   let comments = this.state.data;
  //   let id = this.props.uniqueID;
  //   // console.log(`${this.state.author} said ${this.state.text}`)
  //   // let author = (this.state.author) ? this.state.author : null;
  //   // let text = (this.state.text) ? this.state.text : null;
  //   let comment = {author: this.state.author, text: this.state.text};
  //   // this.props.onCommentUpdate(id, comment);
  //
  //   axios.put(`http://localhost:3001/api/comments/${id}`, comment)
  //
  //   .catch(err => {
  //     console.error(err);
  //     this.setState({ data: comments })
  //   });
  // }

  deleteComment(e) {
    e.preventDefault();
    let comments = this.state.data;
    let id = this.props.uniqueID;
    let comment = {author: this.state.author, text: this.state.text};

    axios.delete(`http://localhost:3001/api/comments/${id}`, comment)
    .then(res => {
      this.setState({author: '', text: ''});
      // console.log(res.data);
      // console.log('Comment Delete - Deleted!');
    })
    .catch(err => {
      console.error(err);
      this.setState({ data: comments })
    });
  }



  render() {
    return (
      <div style={ style.comment }>
        <h3>{this.props.author}</h3>
        <p>{this.props.text}</p>
        {/* <a style={ style.updateLink } href='#' onClick={ this.updateComment }>update</a> */}
        <a style={ style.deleteLink } href='#' onClick={ this.deleteComment }>delete</a>
        {/* { (this.state.toBeUpdated)
          ? (<form onSubmit={ this.handleCommentUpdate }>
              <input
                type='text'
                placeholder='Update name...'
                style={ style.commentFormAuthor }
                value={ this.state.author }
                onChange={ this.handleAuthorChange } />
              <input
                type='text'
                placeholder='Update your comment...'
                style={ style.commentFormText }
                value={ this.state.text }
                onChange={ this.handleTextChange } />
              <input
                type='submit'
                style={ style.commentFormPost }
                value='Update' />
            </form>)
          : null} */}
      </div>
    )
  }
}

export default Comment;
