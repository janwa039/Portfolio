import React from "react";
import 'normalize.css'
import "../../css/about.css";
import Media from "react-media";


function socialMedia(url){
  window.open(url)
  return false;
}

function MiddleTextArea(){
  return (
    <div className="middle-second-area">
      {/* <div id = "textWrite"></div> */}
      <div className="icon-container">
        <a className="icon-btn" onClick={()=>socialMedia("https://www.facebook.com/bassey.a.jennifer?ref=bookmarks")}>
          <i className="fab fa-facebook-f" />
        </a>
        <a className="icon-btn"  onClick={()=>socialMedia("https://twitter.com/jai_bom")}>
          <i className="fab fa-twitter" />
        </a>
        <a className="icon-btn"  onClick={()=>socialMedia("https://www.linkedin.com/in/jennifer-affiong-bassey-8ba407139/")}>
          <i className="fab fa-linkedin-in" />
        </a>
        <a className="icon-btn"  onClick={()=>socialMedia("https://github.com/janwa039")}>
          <i className="fab fa-github" />
        </a>
        <a className="icon-btn" onClick={()=>socialMedia("#")}>
          <i className="fas fa-envelope" />
        </a>
      </div>
    </div>
  );
}

export default class SecondPage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className ="about-me-main">
        {/* <div className = 'thewrapper'> */}
        <div className = "aboutme">
          <div className="indivual-container-main">
            <div className="indivual-container1">
            <div className= "individual-boxes"></div>
            <div className= "individual-boxes"></div>
            <div className= "individual-boxes"></div>
            <div className= "individual-boxes"></div>
            </div>
            <div className="indivual-container2">
            <div className= "individual-boxes2"></div>
            <div className= "individual-boxes2"></div>
            <div className= "individual-boxes2"></div>
            <div className= "individual-boxes2"></div>
            </div>
          </div>
          <div className="about-me-content">
          <div className="my-image">
            <img src={require('../../images/WhatsApp Image 2018-10-19 at 7.03.58 AM.jpeg')}  alt ='my-profile-image'/>
            </div >

              <div className="textfield"> 
                  <p>I' am a Software Engineer who is very passionate about growing, 
                    learning something new. Also want to be in a position where i can also help others grow years 
                    from now following this career path. I love building websites and Designing.
                    Skills:Javascript, HTML, CSS, reactJS, Adobe photoshop/sketch.
                    Graduated from university of Ottawa with a Bachelor's Degree in Computer Engineering 
                      (minor in Engineering management and Entrepreneurship) 
                  </p>
                  {/* <MiddleTextArea/> */}
              </div>
          </div>   
        </div>
        {/* </div> */}
      </div>
    )
  }
}


