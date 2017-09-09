import {createFragmentContainer, graphql} from 'react-relay'
import User from './User'

export default createFragmentContainer(User, graphql`
    fragment User_user on User {
        name,
        avatarUrl
    }
`)