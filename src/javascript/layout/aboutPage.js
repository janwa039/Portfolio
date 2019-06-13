import React from "react";
import "../../css/about.css";
import Media from "react-media";

export default class SecondPage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className ="about-me-main">
        <div className ="inner-page-1">
            AFFIONG BASSEY
        </div>

        <div className = "aboutme">
        <div class="my-image">
          <img src={require('../../images/WhatsApp Image 2018-10-19 at 7.03.58 AM.jpeg')}  alt ='my-image'/>
        </div>
        <p>I' am a Software Engineer who is very passionate about growing, 
        learning something new. Also want to be in a position where i can also help others grow years 
        from now following this career path. I love building websites and Designing.
        Skills:Javascript, HTML, CSS, reactJS, Adobe photoshop/sketch.
        Graduated from university of Ottawa with a Bachelor's Degree in Computer Engineering 
          (minor in Engineering management and Entrepreneurship) 
          </p>
        <div className="middle-second-text-area-second">
              <div className="icon-second-container ">
                <a className="icon-btn" href="#">
                    <i class="fas fa-envelope"></i>
                </a>
              </div>
        </div>
              
      </div>
      </div>
    )
  }
}
