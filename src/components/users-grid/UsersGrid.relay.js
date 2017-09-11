import {createFragmentContainer, graphql} from 'react-relay'
import UsersGrid from './UsersGrid'


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