import React, {Component}  from 'react'; //destructured para no tener que incluir React.Component en la extension de class.
import './App.css';
import Navbar from './components/layout/Navbar.js'
import Users from './components/users/Users.js'

class App extends Component { 
  render() { //lifecycle method
    return (
      <React.Fragment className="App"> {/*React.Fragment is used en caso de que no queramos un DIV parent que encompasea todo lo rendereado y que nuclee todo. Tambien podrian dejarse solo las brackets, pero no es as good. */}
       <Navbar title="Github Finder" icon="fab fa-github"/> {/*Prop passed*/}
      
      
      <div className="container"> 
      <Users />
      </div>
      
      
 
      </React.Fragment>
    );
  }
 
}

export default App;



