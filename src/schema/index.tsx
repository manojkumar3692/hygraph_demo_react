import { gql } from '@apollo/client';


export const GET_POSTS = gql`
    query {
        posts {
            id
            title
            tags
            author {
             name
             biography
             createdAt
            }
            coverImage {
            url
            }
            content {
                text
            }
        }
    }
`