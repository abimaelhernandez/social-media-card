import React, { Component } from 'react';
import exampleData from './exampleData'

import '../dist/styles.scss'

export default class App extends Component {
  constructor (){
    super();
    this.state = {
      data : exampleData
    }
  }
  // <img src="../imageFile/cuteHat.jpeg"  alt="" height="200" width="350"/><br/>
  // {this.state.columnOrder.map(columnId => {
  //   const {column} = this.state.columns[columnId]
  //
  //   return column;
  // })}

  render() {
    console.log('hello', this.state.data);
    return (
      <main className="App">
        <header> <img className="logo" src="" alt="aternate tex" / ></header>
           <nav>| the logo  Many, Many, Many, Many, Many, Elements |</nav>
      </main>
    )
  }
}
