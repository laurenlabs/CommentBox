import React, { Component } from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import style from './style';

class CommentBox extends Component {
 constructor(props) {
   super(props);
   this.state = { data: [] };
   this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
 }

 loadCommentsFromServer() {
   // console.log('CB - Load Called - is working');

   axios.get(`${this.props.url}`)
   .then(res => {
     this.setState({data: res.data});
   })
 }

 componentDidMount(){
   this.loadCommentsFromServer();
   setInterval(this.loadCommentsFromServer, this.props.pollInterval);
 }

 render() {
   return (
     <div style={style.commentBox}>
       <h2>Comments</h2>
       <CommentList data={this.state.data}/>
       <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
     </div>
   )
 }

}
export default CommentBox;
