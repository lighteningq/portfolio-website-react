import React, {Component} from 'react'
import './App.css'
import {
  Route,
  Link,
  Switch,
  Redirect
}from 'react-router-dom'

class Critique extends Component{

constructor(props){
		super(props)
		this.state = {
			value: 'You are Not in Critique Mode Now. ',
			post:'',
			isAuth:false,
			criticName:'',
    		critiqueCode:'',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
}

// componentDidUpdate(){
// 	if(this.state.isAuth){
// 		setTimeout('Now Redirect you back to HomePage', 3000)
// 	}
// }



handleChange(e){
	console.log(e.target.name)
	this.setState({
		[e.target.name]:e.target.value,
	})
}

handleSubmit = async e => {
    e.preventDefault();
    if(this.state.critiqueCode==='critiquemehard'){
    	this.setState((currentState)=>{
    		return {
    			value:'Success Gain the Access to Critique Mode, '+currentState.criticName+'!',
    			isAuth: true,

    		}
    	})
    }else {

    }
};



render(){
	if(this.state.isAuth){
		console.log('redirect to home, data passed in is: \n', this.state.isAuth, this.state.criticName)
		return(
			<Route
      			render={() =><Redirect to={{pathname: "/",state: { isAuth: true, criticName: this.state.criticName }
            }}
          />
        
      }
    />

			)
	}else{
	   return (

		 <form onSubmit={this.handleSubmit}>
		 
		  <p></p>
        <label>
          The Critics Access Code Is:   <p></p>
           <input
            type="text"
            name="critiqueCode" 
            placeholder="I know I send it to you!"
            value={this.state.critiqueCode}
            onChange={this.handleChange}
          />
           <p></p>
 		</label>
           <label>
         Your Name is:  <p></p>
          <input
            type="text"
            name="criticName" 
            placeholder="It's OK if you want to stay anonymous!"
            value={this.state.criticName}
            onChange={this.handleChange}
          />
          </label>
          <p></p>
      
        <input type="submit" value="Submit" />
      </form>
	
					
	)
	}

	}
				  

}

export default Critique;