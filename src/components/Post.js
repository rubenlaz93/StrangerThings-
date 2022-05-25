import React, { useEffect, useState } from "react";
import { fetchAllPost, deletePost } from "../api";

const Post = () => {
    const [posts, setPosts] = useState([])
    const username = localStorage.getItem("username")

    useEffect(() => {
        async function refreshPosts() {
            const posts = await fetchAllPost()

            setPosts(posts)
        }

        refreshPosts()
    }, [])

    async function handleDeleteButtonClick(id) {
        const token = localStorage.getItem("token")
        const isDeleteSuccessful = await deletePost(id, token)

        if (isDeleteSuccessful) {
            const remainingPosts = posts.filter((post) => post._id !== id);
            setPosts(remainingPosts);
        }
    }

    return (
        <>
            <div id="postNav">
                <h1 className="pageTitle">Posts</h1>
            </div>
                { posts.length ? 
                    (
                        posts.map((post) => (
                            <div
                                className="Info"
                                key={post._id}
                                style={{ border: "5px solid black" }}
                            >
                                <div>
                                    <span className="Title">{post.title}</span>
                                </div>

                                <div id="seller">User: {post.author.username}</div>
                                <div className="location"> My Location: {post.location}</div>
                                <div className="description">Description: {post.description}</div>
                                <div className="price">Price: {post.price}</div>
                                
                                { post.author.username === username ? 
                                    (
                                        <button onClick={() => handleDeleteButtonClick(post._id)}>
                                            Delete Post
                                        </button>
                                    ) : null
                                }
                            </div>
                        ))
                    ) : (
                        <div>
                            <h1>No post found</h1>
                        </div>
                    )}
        </>
    )
}
export default Post;