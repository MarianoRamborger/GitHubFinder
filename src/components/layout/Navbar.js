import React, {  } from 'react'
import PropTypes from 'prop-types' //Se usa para aclarar el datatype del prop, y si se pasa un prop del wrong type tira error.

 const Navbar = ({icon, title}) =>

 
 { 
  

    
        return (
            
            <nav className="navbar bg-primary">
                <h1>
                <i className={icon} />  {title /*Prop used*/}
                </h1>  
            </nav>
        )
    }

    Navbar.defaultProps= { //Default props (must be named asi), even si no recibe los demás de app. Los que recibe de app overridean estos though.
        title: 'Github Finder',
        icon: 'fab fa-github'
    }


    Navbar.propTypes = {
        title: PropTypes.string.isRequired, //both be strings. Si pasamos un nonstring tira error.
        icon : PropTypes.string.isRequired //Ojo que sin default props lo puede tirar igual, por mas que se pasen good props.
    }


export default Navbar
