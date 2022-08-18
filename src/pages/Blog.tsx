import React, { ReactElement } from 'react'
import { GET_POSTS } from '../schema/index';
import { useQuery } from '@apollo/client'
import './Blog.css'
interface Props {

}

export default function Blog({ }: Props): ReactElement {
    const { loading, data, error } = useQuery(GET_POSTS)
    if (loading) {
        return <h1>Loading..</h1>
    }
    if (error) {
        return <h1>Error..</h1>
    }
    return (
        <div className="blogContainer">
            {
                data.posts.map((post: any, index: number) => {
                    return (
                        <div className="blog">
                        <div className="blogPost" key={index}>
                            <h1>{post.title}</h1>
                            <img src={post.coverImage.url} />
                            <p>{post.content.text}</p>
                            <p>{post.author.name}</p>
                            <ul>
                                {
                                    post.tags.map((tag: string, index: number) => {
                                        return (
                                        <li key={index}>{tag}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
