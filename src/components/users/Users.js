import React, { Component } from 'react'
import UserItem from './UserItem.js'


export class Users extends Component {
    state = {
        users: [
            {
                login:	"mojombo",
                id:	1,
                avatar_url:	"https://avatars0.githubusercontent.com/u/1?v=4",
                html_url:"https://github.com/mojombo"
            },
            {
                login:	"defunkt",
                id:	2,
                avatar_url:	"https://avatars0.githubusercontent.com/u/2?v=4",
                html_url:	"https://github.com/defunkt"
            },
            {
                login:	"pjhyett",
                id:	3,
                avatar_url:	"https://avatars0.githubusercontent.com/u/3?v=4",
                html_url:	"https://github.com/pjhyett"
            }          
        ]
    }

    render() {
  
        return (
            <div style={userStyle} > {/* Como crear estilo dentro de una variable en jsx */}
            {
                this.state.users.map(user => (
                    <UserItem key={user.id} user={user} /> //Pasa el usuario entero.
                    //Toda lista necesita una key unique, para que react pueda acceder a ellas y actualizarlas after dom creation.
                ))

                
            }        
            </div>
        )
    }
}



const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
