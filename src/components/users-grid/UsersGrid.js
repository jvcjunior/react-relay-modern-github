import React from 'react';
import User from '../user';
import {createFragmentContainer, graphql} from 'react-relay';

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

const UsersGrid = ({viewer}) => (
    <ol style={styles.grid} className="books-grid">
        {viewer.user.followers.edges.map(({node}) => (
        <li style={styles.gridListItem} key={node.id}>
            <User user={node}/>
        </li>
        ))}
    </ol>
);

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