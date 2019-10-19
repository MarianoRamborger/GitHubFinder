import React, { Component } from 'react'

class User extends Component {
    componentDidMount() {
        this.props.getUser
        (this.props.match.params.login) //Esta linea saca login de la url, como aparece en App en la route que lo pasa (Route exact path='/user/:login')
    }
    
    render() {
        const { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable } = this.props.user;
        const { loading } = this.props;


        return (
            <div>
               {name    }
            </div>
        )
    }
}

export default User
