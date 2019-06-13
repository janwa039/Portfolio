import React from "react";
import Particles from 'react-particles-js';
import "../../css/secondPage.css";
import Media from "react-media";
// import Card from '@material-ui/core/Card';
// import CardComponent from '../../components/Card'

function MiddleTextArea(){
  return (
    <div className="middle-text-area">
      {/* <div id = "textWrite"></div> */}
      <div className="icon-container">
        <a className="icon-btn" href="https://www.facebook.com/bassey.a.jennifer">
          <i className="fab fa-facebook-f" />
        </a>
        <a className="icon-btn" href="#">
          <i className="fab fa-twitter" />
        </a>
        <a className="icon-btn" href="#">
          <i className="fab fa-linkedin-in" />
        </a>
        <a className="icon-btn" href="#">
          <i className="fab fa-github" />
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
      <div className = 'secondPageMain'>
        <div className='particle-second-page'>
          <Media query="(min-width: 1025px)">
              {matches =>{
                if(matches)
                {
                  return <Particles params = {{
                    polygon:{
                    enable: false
                  }
                  }}
                  style={{
                    color: 'yellow'
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
        <div className='page-with-content'>
        <div className='projects'> Projects </div>
        <div className ='card-wrapper'>
          <div className="card" style={{width: "18rem"}}>
           {/* <img src="..." class="card-img-top" alt="..."/> */}
            <div class="card-body">
              <h5 class="card-title">Memory Game</h5>
              <p class="card-text">
              Memory Game is a card matching game, where you get to test how well 
              you can remember or recall things last seen.
              </p>
            </div>
            <div class="card-body">
              <a href="https://github.com/janwa039/MemoryGame" class="card-link">Source code link</a>
            </div>
          </div>
          <div className="card" style={{width: "18rem"}}>
            <div class="card-body">
              <h5 class="card-title">Arcade Game</h5>
              <p class="card-text">
              A Frogger Arcade Game built with Vanilla JavaScript without any external libraries. 
              The idea of this game is to try and reach the Water without trying to touch a Bug! or you loose lives.
              </p>
            </div>
            <div class="card-body">
              <a href="https://github.com/janwa039/Classic-Arcade-Game" class="card-link">Source code link</a>
            </div>
          </div>
          <div className="card" style={{width: "18rem"}}>
            <div class="card-body">
              <h5 class="card-title">Restaurant Review App</h5>
              <p class="card-text">
              Static webpage is converted to a mobile-ready web application. 
              Also added a service worker to load the application offline experience for the user
              </p>
            </div>
            <div class="card-body">
              <a href="https://github.com/janwa039/restaurantReviewApp" class="card-link">Source code link</a>
            </div>
          </div>
          </div>
        <div className = "div-containing-icon">
          <Media query="(min-width: 501px)">
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
        </div>
        </div>
    </div>
    )
  }
}
