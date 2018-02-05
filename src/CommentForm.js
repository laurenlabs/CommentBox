import React, { Component } from 'react';
import axios from 'axios';
import style from './style';

//CommentForm is form to add new comment

class CommentForm extends Component {
 constructor(props) {
   super(props);
   this.state = { author: '', text: '' };
   this.handleAuthorChange = this.handleAuthorChange.bind(this);
   this.handleTextChange = this.handleTextChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleAuthorChange(e) {
   this.setState({ author: e.target.value });
   console.log('CommentForm Author Changed');
 }

 handleTextChange(e) {
   this.setState({ text: e.target.value });
   console.log('CommentForm Text Changed');
 }

 handleSubmit(e) {
   let comments = this.state.data;
   console.log(`${this.state.author} said ${this.state.text}`)

   axios.post("http://localhost:3001/api/comments", {author: this.state.author, text: this.state.text})
   .then(res => {
     this.setState({author: '', text: ''});
     console.log(res.data);
     console.log('CommentForm Submit - Posted!');
   })
   .catch(err => {
     console.error(err);
     this.setState({ data: comments })
   });
 }

 render() {
   return (
     <form style={ style.commentForm } onSubmit={ this.handleSubmit }>
       <input
         type='text'
         placeholder='Your name…'
         style={ style.commentFormAuthor}
         value={ this.state.author }
         onChange={ this.handleAuthorChange } />
       <input
         type='text'
         placeholder='Say something…'
         style={ style.commentFormText}
         value={ this.state.text }
         onChange={ this.handleTextChange } />
       <input
         type='submit'
         style={ style.commentFormPost }
         value='Post' />
     </form>
   )
 }
}
export default CommentForm;
