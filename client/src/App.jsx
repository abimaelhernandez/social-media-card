import React, { Component } from 'react';

import '../dist/styles.scss'

export default class App extends Component {

  // <img src="../imageFile/cuteHat.jpeg"  alt="" height="200" width="350"/><br/>

  render() {
    return (
      <main className="App">
          <header> <img className="logo" src="" alt="aternate tex" / ></header>
           <nav>| the logo  Many, Many, Many, Many, Many, Elements |</nav> 
          <section className="boardContainer">
            <section className="board">
              <h3 className="title"> section 1 </h3>
              <li> tassk information </li>
              <li> tassk information </li>
              <li> tassk information </li>
              <li> tassk information </li>
          </section>
            <section className="board"> <h3 className="title">section 2 </h3></section>
          </section>

      </main>
    )
  }
}
