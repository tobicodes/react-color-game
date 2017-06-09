import React, {Component} from 'react';
import {render} from 'react-dom';
import './Square.css';


class Square extends Component{
  constructor(props){
    super(props);
  } 
  render(){
    return(
      <div className = 'square'>
        <h3> My current state/prop is {this.props.color}</h3>
      </div>
      );
  }
}

export default Square;


// var colors = ['peachpuff', 'chocolate', 'ivory', 'red', 'purple', 'moccasin','grey' ]
    // this.state = {
    //     color: colors[Math.floor(Math.random()*colors.length)]
    // }

