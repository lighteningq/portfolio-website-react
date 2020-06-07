import React, {Component} from 'react';
import './App.css';
import './CritiqueForm.css';

var star = 0;

class DynamicStars extends Component {

constructor(props) {
    super(props);
    this.state = {
      starsArr: [0,0,0,0,0],
      oldArr: [0,0,0,0,0],
      rating: 0,
    };

    this.handleStarsHover = this.handleStarsHover.bind(this);
    this.handleStarsClick = this.handleStarsClick.bind(this);
    this.handleStarsLeave = this.handleStarsLeave.bind(this);
  }

  handleStarsHover(event) {
    event.preventDefault();
    let rating = parseInt(event.target.getAttribute("value"))+1;
    let newArr = [];
    while (newArr.length < 5) {
        if (rating > 0) {
            rating--;
            newArr.push(1);
        } else {
            newArr.push(0);
        }
    }
    this.setState({
        starsArr: newArr,
    });
  }

  handleStarsClick(event) {
      event.preventDefault();
      var rate= 0
      for(rate; rate<this.state.starsArr.length; rate++){
      	if(this.state.starsArr[rate]===0) break;
      }
      this.setState({
          oldArr: this.state.starsArr,
          rating: rate,
      });
      star = rate;

  }

  handleStarsLeave(event) {
      event.preventDefault();
      this.setState({
          starsArr: this.state.oldArr
      });
  }


  render() {
    return (
    <div className="stars-container">
      {this.state.starsArr.map((item, i) => {
          return (
              <div className="single-star-container" value={i} key={i} onMouseOver={this.handleStarsHover} onClick={this.handleStarsClick}
              	  onMouseLeave={this.handleStarsLeave}>
                  <div className="single-star-fill" style={{"width" : `${parseInt(item*31)}px`}}>
                      <img className="single-star-outline" src={process.env.PUBLIC_URL+"/star.png"} value={i} ></img>
                  </div>
              </div>
          );
        })}
    </div>
    );
  }
}


class CritiqueForm extends Component{

constructor(props){
		console.log('props in form', props)
		super(props)
		this.state = {
			value:'',
			post:'',
			criticName:this.props.criticName,
    		param:this.props.param,
    		pictureKey:this.props.list[0],
    		star: 0,
		};


		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.updateStar = this.updateStar.bind(this);
}

componentDidUpdate(){

}

componentWillMount(){

}


updateStar(value){
	this.setState((currentState)=>{
      	return {
      		star: value
      }
  });
}

updateName = (e) => {
	//console.log(e)
	this.setState({
		pictureKey: this.props.list[e]
	})
}


handleChange(e){
	this.setState({
		value:e.target.value,
	})
}


handleSubmit = async e => {
    e.preventDefault();
    console.log('before submit star is', this.state.star)
	 const response = await fetch('/critique-content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pictureKey: this.state.pictureKey,
      						 projectName: this.state.param,
      						 comment: this.state.value,
      						 star: 	star,
      						 criticName: this.state.criticName

      }),
    });
    const body = await response.text();

    //this.setState({value: '', star:0})
    console.log('client side server response on comment: ', body);


};





render(){

	   return (	
	   	<div>
	   	<DynamicStars update={this.updateStar} />
	   
		 <form onSubmit={this.handleSubmit}>
		
        	<label>
          		<strong>Comment</strong> <p></p>
          		<textarea value={this.state.value} onChange={this.handleChange} rows="20" name="comment[text]" id="comment_text" cols="40" className="ui-autocomplete-input" autoComplete="off" role="textbox" ariaAutocomplete="list" ariaHaspopup="true"/>
           		<p></p>
 			</label>
      
        <input type="submit" value="Submit" />
      	</form>
      	</div>
	
					
	)
	

	}
				  

}



function form(props){

}


export default CritiqueForm;






