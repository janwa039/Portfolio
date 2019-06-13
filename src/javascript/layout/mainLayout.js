import React from "react";
import Particles from 'react-particles-js'
import "../../css/main.css";
import Media from "react-media";
import SecondPage from "./SecondPage"
import Aboutme from "./aboutPage"


function SecondTextArea(){
  return (
    <div className="second-text-area">
    <div className="d-writing ">D</div>
    <div className="e-writing color-icon-btn">E</div>
    <div className="s-writing">S</div>
    <div className="i-writing color-icon-btn">I</div>
    <div className="g-writing">G</div>
    <div className="n-writing color-icon-btn">N</div>
  </div>
  )
}


function MiddleTextArea(){
  return (
    <div className="middle-second-text-area">
      {/* <div id = "textWrite"></div> */}
      <div className="icon-container">
        <a className="icon-btn" href="https://www.facebook.com/bassey.a.jennifer">
          <i className="fab fa-facebook-f" />
        </a>
        <a className="icon-btn" href="https://twitter.com/jai_bom">
          <i className="fab fa-twitter" />
        </a>
        <a className="icon-btn" href="https://www.linkedin.com/in/jennifer-affiong-bassey-8ba407139/">
          <i className="fab fa-linkedin-in" />
        </a>
        <a className="icon-btn" href="https://github.com/janwa039">
          <i className="fab fa-github" />
        </a>
      </div>
    </div>
  );
}


class MainLayout extends React.Component{

  constructor(props){
    super(props)
    this.state={
      x:0,
      enable:true
     }
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onMouseMove(event){
    document.getElementsByClassName('wrap')[0].style.display = 'block'
    var x = event.clientX * 60 / window.innerWidth + "%"
    var y = event.clientY * 60 / window.innerHeight + "%"
    document.getElementsByClassName('wrap')[0].style.top = y 
    document.getElementsByClassName('wrap')[0].style.left = x 

  }

  onMouseLeave(){

    document.getElementsByClassName('wrap')[0].style.display = 'none'
  }


render(){

  return (
      <div className="mainBody">
        <section className="small-view">
          <div className="mainArea"> 
            <img
              src={require("../../images/art-black-background-black-clothes-1546035-min.jpg")}
              className="img-fluid colorGirl"
            />
            <div className ='particles'>
            <Media query="(min-width: 1025px)">
              {matches =>{
                if(matches)
                {
                  return <Particles params = {{
                    polygon:{
                    enable: false
                  }
                  }}/>
              }
              else{
                return <Particles params = {{
                  polygon:{
                  enable: true
                }
                }}/> 
              }
            }}
          </Media>
          </div>
          </div>
          <div className="middle-main" onMouseMove={this.onMouseMove} onMouseLeave={this.onMouseLeave}>
            <div className="main-text-area" onMouseMove={this.onMouseMove} onMouseLeave={this.onMouseLeave}>
              <div className="j-writing color-icon-btn">J</div>
              <div className="e-writing">E</div>
              <div className="n-writing color-icon-btn">N</div>
              <div className="n2-writing">N</div>
              <div className="y-writing color-icon-btn">Y</div>
            </div>
            <Media query="(max-width: 500px)">
              {matches =>{
                if(matches)
                {
                  return <MiddleTextArea/>
                }
              else{
                return ''
                }
            }}
          </Media>
            <SecondTextArea />
          </div>
          <div className="wrap" onMouseMove={this.onMouseMove}>
            <div id="ball" />
          </div>
        </section>
        <section>
          <Aboutme />
        </section>
        <section className='second-section'>
          <SecondPage />
        </section>
      </div>
  );
}

}

export default MainLayout
