	import React from 'react';
	import './Past.css';
	import '../home/App.css';
	import "slick-carousel/slick/slick.css";
	import "slick-carousel/slick/slick-theme.css"
	import Slider from "react-slick"
	import Projects from '../../config'
	import CritiqueForm from '../home/CritiqueForm'
	import ShowComment from '../home/ShowComment'


	const settings = [{
		className: "image-box",
	      		fade: true,
	      		infinite: true,
	      speed: 300,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      adaptiveHeight: false,
	      nextArrow: <NextArrow />,
	      prevArrow: <PrevArrow />,
	      responsive: [
	        {
	          breakpoint: 1024,
	          settings: {
	            slidesToShow: 3,
	            slidesToScroll: 3,
	            infinite: true,
	           
	          }
	        },
	        {
	          breakpoint: 600,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2,
	            initialSlide: 2
	          }
	        },
	        {
	          breakpoint: 480,
	          settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	          }
	        }
	      ]
	    }, 
	    {
	      		fade: true,
	      		infinite: true,
	      speed: 300,
	      lazyLoad:true,
	      className: "center",
      		centerMode: true,
      		centerPadding: "0px",
      slidesToShow: 2,
      slidesToScroll: 2,
	      nextArrow: <NextArrow />,
	      prevArrow: <PrevArrow />,
	      responsive: [
	        {
	          breakpoint: 1024,
	          settings: {
	            slidesToShow: 3,
	            slidesToScroll: 3,
	            infinite: true,
	           
	          }
	        },
	        {
	          breakpoint: 600,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2,
	            initialSlide: 2
	          }
	        },
	        {
	          breakpoint: 480,
	          settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	          }
	        }
	      ]
	    },]
	function NextArrow(props) {
	 const { className, style, onClick } = props;
	// console.log("next arrow",className)

	  return (
	    <div
	      className={className}
	      onClick={onClick}
	      style={{ ...style, display: "block", left:"155%"}}
	    />
	  );
	}

	function PrevArrow(props) {
	  const { className, style, onClick } = props;

	  return (
	    <div
	      className={className}
	      onClick={onClick}
	      style={{ ...style, display: "block", left:"-65%"}}
	      
	    />
	  );
	}


	function VideoImport(props){

		return (<div>
				<iframe src="https://player.vimeo.com/video/168999434" width="640" height="360" className="video-box" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>



			</div>);
	}

	class FourImageGallery extends React.Component{
		constructor(props){
			console.log("inside slidshow",props);
			console.log("config: ", Projects);
			super(props);
			this.state={
				settings: props.settings,
				currentIndex: 0,
				currentImg:this.props.imgList.fileNames[0]

			}
			this.critForm = React.createRef();
			this.showComments = React.createRef();
			this.afterChangeHandler = this.afterChangeHandler.bind(this);
		}



	afterChangeHandler(e){
		console.log('after change in slick e: ',e)
		this.setState({
			currentIndex: e,

		})

		// update private section
		if(this.props.isAuth===true){
			if(this.props.criticName==='seeComment'){
				this.showComments.current.updateName(e)
			}
			this.critForm.current.updateName(e)
		
			
		}

	}
		// style={{
  //           padding: 0, background: '#000', width: '100%', maxHeight: '500px',
  //       
  //  }}

  render(){
  			var p = this.props.param
  					var criticName = this.props.criticName
		var projectId = this.props.param
		var isAuth = this.props.isAuth
		return (<div id='turn-off-001'>
			<Slider   {...this.props.settings} id='slider-turn-off-002' className="two-box" afterChange={this.afterChangeHandler}>
				{this.props.imgList.fileNames.map((name)=>(
				<img key={name} src={process.env.PUBLIC_URL+'/content/'+p+'/'+name} style={{objectFit:'cover'}} id="two_item"/>

				))}

			</Slider>
		    {(isAuth===true && criticName!=='seeComments')? <CritiqueForm ref={this.critForm} param={projectId} list={this.props.imgList.fileNames} criticName={criticName} /> :''}
			{criticName==='seeComment' ? <ShowComment ref={this.showComments} list={this.props.imgList.fileNames}/> :''}
		 </div>);
  }

	}





	class SlideShow extends React.Component{
		constructor(props){
			console.log("inside slidshow",props);
			console.log("config: ", Projects);
			super(props);
			this.state={
				settings: props.settings,
				currentIndex: 0,
				currentImg:this.props.imgList.fileNames[0]

			}
			this.critForm = React.createRef();
			this.showComments = React.createRef();
			this.afterChangeHandler = this.afterChangeHandler.bind(this);
		}




		componentDidMount(){
			console.log('----componentDidMount------')
		}

		componentDidUpdate(){
			console.log('----componentDidUpdate------')


		}



    

	afterChangeHandler(e){
		console.log('after change in slick e: ',e)
		this.setState({
			currentIndex: e,

		})

		// update private section
		if(this.props.isAuth===true){
			if(this.props.criticName==='seeComment'){
				this.showComments.current.updateName(e)
			}
			this.critForm.current.updateName(e)
		
			
		}

	}

	render(){
		var p = this.props.param
		var criticName = this.props.criticName
		var projectId = this.props.param
		var isAuth = this.props.isAuth
		console.log('content: is Auth', isAuth)
			return(
			<div id='turn-off-001' className="image-container">	
			<Slider {...this.state.settings} id='slider-turn-off-002' className="image-box" afterChange={this.afterChangeHandler}>
			{this.props.imgList.fileNames.map((name)=>{
				return (<img key={name} src={process.env.PUBLIC_URL+'/content/'+p+'/'+name} id="gallery_item"/>
				)
				})}
			</Slider>
			{(isAuth===true && criticName!=='seeComments')? <CritiqueForm ref={this.critForm} param={projectId} list={this.props.imgList.fileNames} criticName={criticName} /> :''}
			{criticName==='seeComment' ? <ShowComment ref={this.showComments} list={this.props.imgList.fileNames}/> :''}
			</div>		

		)
	}




	}



	function Content(props){
		console.log("inside content ",props);
		const projectId = props.match.params.projectId
		    const set = {

     fade:true,
     infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    };

		switch(projectId){
			case "exhibition":

				return <VideoImport />;
			case "dancing-on-their-own":
				return <FourImageGallery settings={set} isAuth={props.isAuthed} param = {projectId} imgList = {Projects.find((project)=>project.param===projectId)}/>;

			default:
				
				return <SlideShow settings={settings[0]} param = {projectId} isAuth={props.isAuthed} criticName={props.criticName} imgList = {Projects.find((project)=>project.param===projectId)}/>;
		}







		
	}


	export default Content;