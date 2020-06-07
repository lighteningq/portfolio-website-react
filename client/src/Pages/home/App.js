import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect,
  useHistory,
  useLocation
}from 'react-router-dom'
import {Helmet} from 'react-helmet'

import './App.css';
import '../../fonts/Fonts.css'
import Home from '../home/Home'
import About from '../about/About'
import Info from '../info/Info'
import Future from '../future/Future'
import Past from '../past/Past'
import Critique from './Critique'
import ShowComment from './ShowComment'

class NavBarItem{
  lang='en'
  english_name = ''
  chinese_name = ''
  path=''

  constructor(english_name, chinese, path){
    this.english_name = english_name;
    this.chinese_name = chinese;
    this.path = path;
  }

  getName(){
    if(this.lang==='cn') return this.chinese_name;
    else return this.english_name;
  }

}


const nav = [new NavBarItem('HOME','家','/'), new NavBarItem('INFO','我','/info')]

function Nav(){
   // <div className="nav-bar-item" ><Link to="/about" >ABOUT</Link></div>
  return (
    <div className="nav-container" id ="nav-bar-list">
      <div className="nav-bar-item"><Link to="/">HOME</Link></div>
     
      <div className="nav-bar-item"><Link to="/info">INFO</Link></div>


    </div>


    );
}



class App extends Component {

  constructor(props){
    super(props);

    this.state ={
      lang: 'en',
      isAuth: false,
      criticName:'',
      response: '',
      post: '',
      responseToPost: '',
    }


  }

  componentWillMount(){

  }
  componentDidMount() {

    this.callApi()
      .then(res => this.setState({ clientIp: res.express }))
      .catch(err => console.log(err));


  }

  componentDidUpdate(){
    console.log('-----App--didupdate', this.state.isAuth)

  }
  
  callApi = async () => {
    const response = await fetch('/add-visitor-info');
    const ip = await response.body
    if (response.status !== 200) throw Error(ip.message);
    
    return ip;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };



      // <p>{this.state.response}</p>
      //   <form onSubmit={this.handleSubmit}>
      //     <p>
      //       <strong>Post to Server:</strong>
      //     </p>
      //     <input
      //       type="text"
      //       value={this.state.post}
      //       onChange={e => this.setState({ post: e.target.value })}
      //     />
      //     <button type="submit">Submit</button>
      //   </form>
      //   <p>{this.state.responseToPost}</p>

  // <div className="copyright">©felixqiang 2020</div>
  render(){

    console.log('props in state ', this.props.match)
  return (
   <BrowserRouter>
     <Nav/>
    <div className="App">
      
      <div className="content">
       
      <Switch>
        <Route exact path='/' render={
        (props) => {return (<Home parent={this} lang={this.state.lang} criticName={this.state.isAuth===true ? this.state.criticName : props.location.state!==undefined ? props.location.state.criticName : ''} isAuthed={this.state.isAuth===true ? true : props.location.state!==undefined ? props.location.state.isAuth : false} />)}} />
        <Route exact path='/about' render={(props) => <About lang={this.state.lang} criticName={this.state.criticName} isAuthed={this.state.isAuth} />} />
        <Route exact path='/info' render={(props) => <Info lang={this.state.lang} criticName={this.state.criticName} isAuthed={this.state.isAuth} />} />
        <Route exact path='/critique-login' render={(props) => <Critique lang={this.state.lang} criticName={this.state.criticName} isAuthed={this.state.isAuth} />} />
        <Route exact path='/art' render={(props) => <Past lang={this.state.lang} match={props.match} criticName={this.state.criticName} isAuthed={this.state.isAuth} />} />
        <Route exact path='/engineering' render={(props) => <Future lang={this.state.lang} criticName={this.state.criticName} isAuthed={this.state.isAuth} />} />
        <Route path='/art/:projectId' render={(props) => <Past lang={this.state.lang} criticName={this.state.criticName} match={props.match} isAuthed={this.state.isAuth} />} />
        <Route path='/show-comment' component={ShowComment}/>
       
      </Switch>

      
      </div>

     
     
    </div>
    </BrowserRouter>


    
  );
}
}
export default App;
