import React from "react";
import "../../css/form.css";

export default class Form extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

      return (
        <div className="form-container">
          <form className="align-item">
            <div className="form-group">
              <label className="labels" for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control  place" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label className="labels" for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control place" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-group form-check">
              {/* <input type="checkbox" className="form-check-input " id="exampleCheck1"/> */}
              {/* <label className="form-check-label" for="exampleCheck1">Check me out</label> */}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      )
  }
}
