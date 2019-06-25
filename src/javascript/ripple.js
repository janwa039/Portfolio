import React from "react";
import Main from './Main'
import '../css/ripple.css'
import ReactDOM from 'react-dom';
import { Redirect} from 'react-router-dom';

function LandingPage(){
  return (
    <div>
      <div className="hello">Welcome</div>
      <div className="loading">
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
      </div>
    </div>
    )
}

class Ripple extends React.Component{

  constructor(props){
    super(props)
    this.state={
      redirect : false
    }
  }


  componentDidMount(){
    this.intervalTime = setTimeout(()=> this.setState({redirect:true}), 3000)
  }

  componentWillUnmount(){
    clearTimeout(this.intervalTime)
  }

  render(){
    // return this.state.redirect? <Main/>:<LandingPage/>
    return <Main/>
  }

}

export default Ripple
