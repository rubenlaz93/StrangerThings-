import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewPost } from "../api";


const NewPost = () => {
    const navigate = useNavigate();
    const [newPost, setNewPost] = useState({
        title: "",
        description: "",
        price: "",
        location: "",
        willDeliver: false,
    });

    const handleNewSubmit = async (event) => {
        event.preventDefault();
        try {
            const tempToken = localStorage.getItem("token")
              await addNewPost(newPost.title, newPost.description, newPost.price, newPost.location, newPost.willDeliver, tempToken)
            navigate("/");
        } catch (error) {
            console.error("Error adding your post:", error);
        }
    };

    const handleChange = (property) => (event) => {
        let postUpdate = {
            title: newPost.title,
            description: newPost.description,
            price: newPost.price,
            location: newPost.location,
            willDeliver: newPost.willDeliver,
        }

        if (property === "willDeliver") {
            postUpdate[property] = event.target.checked
        } else {
            postUpdate[property] = event.target.value
        }

        setNewPost(postUpdate)
    };

    return (
        <>
            <h2>New Post</h2>
            <form id="NewItem" onSubmit={ handleNewSubmit }>
            <input
                type="text"
                placeholder="Item for sale"
                onChange={handleChange("title")}
                value={newPost.title}
            ></input>

            <input
                type="text"
                placeholder="Description of Item"
                onChange={handleChange("description")}
                value={newPost.description}
            ></input>

            <input
                type="number"
                placeholder="Price?"
                onChange={handleChange("price")}
                value={newPost.price}
            ></input>

            <input
                type="text"
                placeholder="Location"
                onChange={handleChange("location")}
                value={newPost.location}
            ></input>

            <label>
                Willing to Drop Off?
                <input
                type="checkbox"
                onChange={handleChange("willDeliver")}
                value={newPost.willDeliver}
                ></input>
            </label>

            <button>Add New Post</button>
            </form>
        </>
    );
};

export default NewPost;