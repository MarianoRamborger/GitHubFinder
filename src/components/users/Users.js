import React, { } from 'react'
import UserItem from './UserItem.js'
import Spinner from '../layout/Spinner.js'
import PropTypes from 'prop-types'


const Users = (props, { loading }) => { //Solo destructureo loading para recordar que los functional components necesitan incluir props normally (mientras que los smart 
    // necesitan this.props. )
    
        if (props.loading === false) {

            return (
                <div style={userStyle} > {/* Como crear estilo dentro de una variable en jsx */}
                {
                    props.users.map(user => (
                        <UserItem key={user.id} user={user} /> //Pasa el usuario entero.
                        //Toda lista necesita una key unique, para que react pueda acceder a ellas y actualizarlas after dom creation.
                    )) 
                }        
                </div>
            )

        }

        else {
            return (
            
                <div style={userStyle}>
                <Spinner />
                <Spinner />
                <Spinner />
                <Spinner />
                <Spinner />
                <Spinner />
                <Spinner />
                <Spinner />
                <Spinner />
                </div>

            )
        }


       
}


Users.propTypes =  {
    users : PropTypes.array.isRequired,
    loading : PropTypes.bool.isRequired,
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}



export default Users
