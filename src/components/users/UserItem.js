import React from 'react'
import PropTypes from 'prop-types'

//class UserItem extends Component {
    // constructor() {  Puede usarse un constructor para settear el state pero no es recomendable
    //     super()      El constructor es llamado antes que el objeto sea montado. 
    // Constructor suele ser usado para inicializar local states, asignando objetos a this.state.
    // Bindear métodos para handlear eventos a un objeto instanciado. 
    // Al asignar state dentro del constructo, es similar a abajo, pero usando this.state en vez de state.


    //     state = { //state is an object..
    //         id: 'id',
    //         login: 'Mojombo',
    //         avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    //         html_url: 'https://github.com/mojombo'
    //     }
    // // }
    // render() {
        // const {login, avatar_url, html_url} = this.state; // Destructuring. Los elementos listados son iguales a this.state 
        //So no hace falta incluir this.state dentro del render para referirse al estado de sus elementos.




    const UserItem = ({user: {login, avatar_url, html_url }}) => { /* Destructuring con elementos especificos de user */

    
        // const {} = props.user; // O se podría destructurar acá abajo.

        return (
            <div className="card text-center">
           
            <img src={avatar_url} alt="" className="round-img" style={{ width: '60px'}} /> {/*Gets avatar img */}

            <h3> {login} </h3>

            <div>
            <a href={html_url} className="btn btn-dark btn-sm my-1"> Profile </a>
            </div>

            </div>
        )
    }


    UserItem.propTypes = {
        user: PropTypes.object.isRequired 
    }

export default UserItem
