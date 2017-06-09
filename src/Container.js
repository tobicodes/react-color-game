import React, { Component} from 'react';
import Square from './Square';
// import './container.css';

class Container extends Component{
  constructor(props){
    super(props);
    // var randomSquare = arr[Math.floor(Math.random()*arr.length)];
  // set state of all 12 squares on Parent 
    this.state = {
      colors: ['peachpuff', 'chocolate', 'ivory', 'red', 'purple', 'moccasin','grey', 'blue', 'orange', 'black', 'pink', 'salmon']
  };

  function changeColor(){
    // make copy of all array holding colors
    var allColors = this.state.colors.slice();
    var randomSquareId = Math.floor(Math.random()*allColors.length);
    var newColor = allColors[Math.floor(Math.random()*allColors.length)];
    allColors[randomSquareId] = newColor;
    this.setState({colors: allColors});
    };

  setInterval(changeColor.bind(this), 300);
  // setInterval(changeColor,300);

  }
  // how do I get parent to set state of child element
  render(){
    var squares = this.state.colors.map(function(color){
      return <Square key= {squares.indexOf(color)} style={{backgroundColor:color}}/>;
    })
    return(
      <div> 
        <h3> all the sauce </h3>
        {squares}
      </div>
      )
    }
  }

export default Container;

 // style={{float:'right'}}
// function getRandomColor() {
    //       var letters = '0123456789ABCDEF';
    //       var color = '#';
    //       for (var i = 0; i < 6; i++ ) {
    //           color += letters[Math.floor(Math.random() * 16)];
    //       }
    //       return color;
    //   }
    // var randomColor = getRandomColor()

  // var numColors = 12;
  // create arr that holds all colors
