import React, {Component} from 'react';
import './App.css';
import './CritiqueForm.css';

class ShowComment extends Component{
	constructor(props){
		super(props)

		this.state = {
			pictureKey: this.props.list[0].split('.')[0],
			comments:[],
		}

		this.updateComments = this.updateComments.bind(this)
		this.updateName = this.updateName.bind(this)
	}

	componentDidMount(){
		// API Call

		this.updateComments();
		//console.log('----showComment Component Did Mount------', this.state.comments)
	}

	componentDidUpdate(){
		console.log('----showComment Component Did Update------', this.state.pictureKey)

	}




updateComments(){
	this.callApi()
      .then(res => this.setState({ comments: res}))
      .catch(err => console.log(err));

      // this.setState({ comments: res})
}

callApi = async () => {

		var query=encodeURI('/show-comment?key='+this.state.pictureKey)
		console.log('show comments sending: ----', query, '------')
    	const response = await fetch(query);
    	const body = await response.json();
    	console.log('body is', body)
    	if (response.status !== 200) throw Error(body.message);
    	return body;
  	};

updateName = (e) => {
	console.log(e)
	this.setState({
		pictureKey: this.props.list[e]
	}, this.updateComments);



}

	render(){
		console.log('show comments log', this.state.comments)

		return (
			<div>
			<hr/>
			<strong>Show Comment</strong>  

			{this.state.comments.map((comment)=>{ return (
				<ul key={comment._id}>
					<li>Name: {comment.criticName}</li>
					<li>Star: {comment.star}</li>
					<li>Comment: {comment.comment}</li>
				</ul>)
			})}



			</div>
			
			)

	}


}

export default ShowComment;