import React, { Fragment, Component}  from 'react'; //destructured para no tener que incluir React.Component en la extension de class.
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.js';
import Alert from './components/layout/Alert.js';
import Users from './components/users/Users.js';
import User from './components/users/User.js';
import Search from './components/users/Search.js';
import About from './components/pages/About.js';
import Axios from 'axios';
import './App.css';


class App extends Component { 
  
  state = {
    users : [],
    user : {}, //Specific user fetched to display
    loading: false, // To control the flow of the data
    alert: null
  }
  
  

  
  // //// USER FETCHING --- AL PEDO IN A WAY PORQUE SON CALLEADOS DESDE LA SEARCH. 
  // async componentDidMount() {
   

  //   this.setState({loading: true}) // IMPORTANT. Con class based components no se puede cambiar directo el state, se usa setState. 
 
  //   const res = await Axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   //Todo after el ? es para incorporar la key y secret  de la API que estan en .env.local,
   
  //  this.setState({
  //                   users: res.data, //.data, porque si  no tiraría TODA la respuesta, incluyendo headers, status, etcetera
  //                   loading: false 
  //                   })
  // console.log(this.state.users);
  // }



        // Manages the search of users ↓ Search
        searchUsers = async (text) => { //receives submissions from the searchbox ↑ Async porque calleamos a la API 
          this.setState({loading: true})

        const res = await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({                                           
          users: res.data.items, //how do I know? well, fijandote la respuesta al mandar solo con data. 
          loading: false 


            //Por qué esto funciona? por como está configurada la search API de github: https://developer.github.com/v3/search/
          })

        }

  
        //Gets a single user from gitHub.
        getUser = async (userName) => {
          this.setState({loading: true})

        const res = await Axios.get(`https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({                                           
          user: res.data, 
          loading: false 
        })
        } 



  //Manages the clearing of users ↓ Search
   clearUsers = () => {

    this.setState({ users: [], loading: false })

   }

   // Alert system
   setAlert = (alertEvent, alertType) => {
     this.setState({ alert : {
       message : alertEvent, type: alertType  // new bracket cause alert is truthfully an object with those elements.
      }})

      setTimeout (() => this.setState({alert: null}), 3000

      )
      
   }




  render() { //lifecycle method
    const {clearUsers, searchUsers, } = this;
    const {users, loading, alert, user} = this.state;

    return (
      <Router> {/* ROuter must wrap everything inside the return */}


      <div className="App"> {/*React.Fragment is used en caso de que no queramos un DIV parent que encompasea todo lo rendereado y que nuclee todo. Tambien podrian dejarse solo las brackets, pero no es as good. */}
       
       {/*Navbar */}
       <Navbar title="Github Finder" icon="fab fa-github"/> {/*Prop passed*/}
      
      <Alert alert={alert} />


      <Switch>

              <Route exact path='/' render={props => 
              
                <Fragment>
                                                                                    {/*----SEARCH RENDER---------*/}
                  <div className="container"> 
                      <Search searchUsers={searchUsers}  clearUsers={clearUsers}                                   /*PropS ↑ */
                      displayClear= { users.length > 0 ? true : false}                                 // Prop ↓ controls wheter to display the clear button
                          setAlert={this.setAlert}            
                  /> 
                                                                                    {/*----USERS RENDER---------*/}
                  <Users loading={loading} users={users}   /> {/*Prop↓*/}
                    </div> 
                </Fragment>} />
          
          
                <Route exact path='/about' component={About}/>  { /* Como es un solo component, basta con ponerlo así. */ }
              
                <Route exact path='/user/:login' render={props => (
                  <User { ...props } getUser={this.getUser} user={user} loading={loading} /> 
                ) } />

      </Switch>
      
      </div>
      </Router>
    );
  }
 
}

export default App;



