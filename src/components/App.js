//import React from 'react';
// import '../styles/App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//MUESTRA DE FORMA LOCAL LA LISTA RENDERIZADA DE ENLACES QUERIES: lOADING LINKS
import React, {Component} from 'react'
import Linklist from './LinkList'
class  App extends Component {
  render() {
    return <Linklist />
  }
}


export default App;
