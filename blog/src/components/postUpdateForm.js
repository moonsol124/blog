import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import {React, useState, useEffect} from 'react';

function PostUpdateForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const [postid, setPostId] = useState(location.state.postid);

    function handleSubmit(e) {
        e.preventDefault();
        const title = e.target[0].value;
        const content = e.target[1].value;

        const url = `http://localhost:5000/blog/post/${postid}/update_post`;
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title,
                content: content,
                id: postid,
            })
        }

        fetch(url, requestOptions)
        .then(data=>data.json())
        .then(res => {
            console.log (res);
            navigate(`/post/${postid}`, {state: {postid: postid}});
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">title </label>
                    <input id='title' name='title' type='text' defaultValue={location.state.title}/>
                </div>
                <div>
                    <label htmlFor="content">content </label>
                    <input id='content' name='content' type='text' defaultValue={location.state.content}/>
                </div>
                <div>
                    <button type='submit'> update post </button>
                </div>
            </form>
        </div>
    )
}

export default PostUpdateForm;