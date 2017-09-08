import React from 'react'
import User from './User'

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

const UsersGrid = ({ users, onUserClicked }) => (
    <ol style={styles.grid} className="books-grid">
        {users.map(user => (
        <li style={styles.gridListItem} key={user.id}>
            <User user={user}/>
        </li>
        ))}
    </ol>
);

export default UsersGrid