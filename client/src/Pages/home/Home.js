import React, {Component} from 'react';
import './App.css';
import {
  Route,
  Link,
}from 'react-router-dom'
import '../../fonts/Fonts.css'
import {Helmet} from 'react-helmet'

function Main(){
  return(
			    <div className ="main-container">
      				<div className ="main-item">
      				<span className ="past-text"><Link to="/art/singular-island" >Past</Link></span>
      				<span className="header-text-and"> and </span>
      				<span className ="past-text"><Link to="/engineering" >Future</Link></span>
      				<span className="header-text">.</span>
      			</div>

   				 </div>
  )
}



class Home extends Component{
  constructor(props){
      console.log('home props', props);
      super(props);

      this.state ={
        isAuth: false,
        criticName: '',
      }


      if(this.props.isAuthed!==undefined && this.props.isAuthed===true){
        this.state={
          isAuth: true,
          criticName: this.props.criticName
        }

        this.props.parent.setState({
          isAuth: true,
          criticName: this.props.criticName
        })

      
    }

      console.log('home state', this.state);


  }


  componentWillMount(){

  }

  componentDidUpdate(){
  }

  render(){
      return (
    <div className="home-container">
    <Helmet htmlAttributes={{ class : "with-bg" }}/>
          <div className="header-text">In Present,<br/>felix is making things for the</div>

      <Main />
    </div>

    );
  }

}


export default Home;