import React, {Component} from 'react';
import { connect } from 'react-redux';
import { nextSlide, previousSlide, gotoSlide, debug } from '../../reducers/actions.js';
import './style.css';

class UserInteraction extends Component{
  componentDidMount(){
    document.addEventListener("keydown", (e) => {
      var keyCode = e.keyCode;
      switch (keyCode) {
        case 39:
          this.props.dispatch(nextSlide());
          break;
        case 37:
          this.props.dispatch(previousSlide());
          break;
        default:
          break;
      }
    }, false);
  }
  componentDidUpdate(){
    debugger;
    console.log("UPDATED")
  }
  render(){
    const {dispatch} = this.props;
    return (
      <div className="interactions">
        <p>:D</p>
      </div>
    )
  }
};


function select(state){
  return{
    nextSlide : state.nextSlide,
    previousSlide : state.previousSlide,
    gotoSlide : state.gotoSlide,
    debug : state.debug
  }
}
export default connect(select)(UserInteraction);
