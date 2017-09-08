import React, {Component} from 'react'
import {createFragmentContainer, graphql} from 'react-relay'

const styles = {
    user:{
        width: 140,
        cursor: 'pointer'
    },
    userImage:{
        width: 140,
        height:140
    },
    userName: {
        fontSize: '0.8em',
        marginTop: 10,
    }
}

// const User = ({ user }) => (
//     <div style={styles.user}>
//         <img src={user.avatarUrl} style={styles.userImage} alt="" />
//         <div style={styles.userName}>{user.name}</div>
//     </div>
// );

class User extends Component {
    render() {
      const { user } = this.props;

      return (
        <div style={styles.user}>
           <img src={user.avatarUrl} style={styles.userImage} alt="" />
           <div style={styles.userName}>{user.name}</div>
        </div>
      )
    }
  }

//export default User
export default createFragmentContainer(User, graphql`
    fragment User_user on User {
        name,
        avatarUrl
    }
`)