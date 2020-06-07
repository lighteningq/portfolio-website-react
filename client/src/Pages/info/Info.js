import React from 'react';
import '../home/App.css';
import '../../fonts/Fonts.css'
import {Helmet} from "react-helmet"


	//	<Helmet htmlAttributes={{ class : "with-bg" }}/>
function Info(){
	return (

		<div className="Info-container">

		<div className="about-text">
<p>b. 1996 in Suzhou, China</p>
<p>Photography/Film/Computer Science</p>
<p>based in Philadelphia / Los Angeles / Bay Area</p>
<p>instagram: <span style={{textDecoration:'underline'}}>@felixseye</span></p>
<p>email: <span style={{textDecoration:'underline'}}>felixqiang.studio@gmail.com</span></p>

</div>
		</div>

		);
}

export default Info;