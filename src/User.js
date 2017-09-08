import React from 'react'

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

const User = ({ user }) => (
    <div style={styles.user}>
        <img src={user.avatar_url} style={styles.userImage} alt="" />
        <div style={styles.userName}>{user.login}</div>
    </div>
);

export default User