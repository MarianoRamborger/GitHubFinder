import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        displayClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    onChange = (EventPasadoPorOnChangereeeeeeee) => {
        this.setState({
             [EventPasadoPorOnChangereeeeeeee.target.name] : EventPasadoPorOnChangereeeeeeee.target.value //when onChange cambia, name becomes el cambio.
         })   
    }

    onSubmit = (submitEvent) => {
        submitEvent.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert("Please, enter something", 'light')
        } else {
        
        this.props.searchUsers(this.state.text); //Este prop es pasado UP, hacia su parent (App)
        this.setState({text: ''})
    }

    }

    render() {
        const {displayClear, clearUsers} = this.props //Destructuring


        return (
            <div>

            {/* SearchBAR////////////////////////////////////////////////////////////////////////////////////////////////////// */ }
            
            <form className="form" onSubmit={this.onSubmit}> {/*Passes event to onSubmit al apretar el boton de submit*/}
            <input type="text" name="text" placeholder="Search Users..."
            
             value={this.state.text}  
             
             onChange={this.onChange}  // Calls function to change text-state
             />

            <input type="submit" value="search" className="btn- btn-dark btn-block" /> {/* Notese que el botton itself es parte de la form, por eso puede submittear por todo*/ }
            
            
            </form> 




             {/* CLEAR BUTTON ----------------------------------------------------------------- */}
            {  displayClear && ( // && es una short way de testear si algo es true.. porque === true aca no lo toma y tira un weird mistake.
                console.log(displayClear),
                <button className="btn btn-light btn-block" 
                onClick={clearUsers}> Clear</button>) 
             }                        {/* Prop ↑ App */}


            

            </div>
        )
    }
}

export default Search


