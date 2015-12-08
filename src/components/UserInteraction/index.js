import React, {Component} from 'react';
import { connect } from 'react-redux';
import { nextSlide, previousSlide,setCurrentSlide } from '../../reducers/actions.js';
import './style.css';

class UserInteraction extends Component{
  componentDidMount(){
    document.addEventListener("keydown", (e) => {
      var keyCode = e.keyCode;
      switch (keyCode) {
        case 39:
          var a = this.props.dispatch(nextSlide());
          this.props.dispatch(setCurrentSlide())
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
    this.props.dispatch(setCurrentSlide());
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
  }
}
export default connect(select)(UserInteraction);
