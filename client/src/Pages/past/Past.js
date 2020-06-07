import React from 'react';
import {
  Link, Route
}from 'react-router-dom'

import './Past.css';
import '../../fonts/Fonts.css'
import '../home/App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Content from './Content'
import Projects from '../../config'





function Past({lang, match,isAuthed, criticName}){

	console.log('Past component is Authed? ', isAuthed)
	console.log('Past Element match?', match)
	if(lang!==Projects[0].lang){
		Projects.map((item)=> {item.switchLang()} )
	}


	
	return (

	<div className="past-container">
 		<div className="past-nav-container" id ="past-nav-bar-list">
 			{Projects.map((project) => (
 				<div className="past-nav-bar-item" key={project.name}><Link to={`/art/${project.param}`}>{project.name}</Link></div>
 			))}
		</div>
		
		<Route path={`/art/:projectId`} render={(props) => <Content lang={lang} criticName={criticName} match={props.match} isAuthed={isAuthed} />}/>
	</div>

		);
}

export default Past;



