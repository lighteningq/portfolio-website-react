import React from 'react';
import '../../fonts/Fonts.css'
// import '../home/App.css';
import './Future.css'


function Future(){
	return (
		<div className="future-container">


		<p className="future-title">ThrowBack to 2000's : </p>
		<br/><h3 className="future-title">Search Engine in the Cloud</h3>
		<p className="future-intro">
			A cloud-based highly scalable search engine implemented in Java. It has a similar architecture of early 2000's Google but with better performance.
			<br/><br/>Engineering Details: <a className="normal-link" href={process.env.PUBLIC_URL+'/search-engine-report.pdf'}>Report</a>   <a className="normal-link" href={process.env.PUBLIC_URL+'/search-engine-report.pdf'}>Code</a>
		<br/><br/>
			More Engineering Projects: <a className="normal-link" href={'https://github.com/lighteningq'}>GitHub</a>
		</p>
		<img  id="computer" src={process.env.PUBLIC_URL+'/pc.png'}/>
		

		</div>

		);
}

export default Future;