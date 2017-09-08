import React, { Component } from 'react'
import User from './User'
import {createFragmentContainer, graphql} from 'react-relay'

const styles = {
    grid: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    gridListItem: {
        padding: '10px 15px',
        textAlign: 'left',
    }
}

class UsersGrid extends Component {
    render() {
      const { viewer } = this.props;
      return (
        <ol style={styles.grid} className="books-grid">
            {viewer.user.followers.edges.map(user => (
            <li style={styles.gridListItem} key={user.id}>
                <User user={user}/>
            </li>
            ))}
        </ol>
      )
    }
  }

// const UsersGrid = ({viewer}) => (
//     <ol style={styles.grid} className="books-grid">
//         {viewer.followers.edges.map(user => (
//         <li style={styles.gridListItem} key={user.id}>
//             <User user={user}/>
//         </li>
//         ))}
//     </ol>
// );

//export default UsersGrid
export default createFragmentContainer(UsersGrid, graphql`
    fragment UsersGrid_viewer on Query{
        user(login: "jvcjunior") {
            followers(first: 10) {
                edges{
                    node{
                        ...User_user
                    }
                }
            }
        }
    }
`)