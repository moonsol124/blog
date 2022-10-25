import { useState, useEffect, React } from 'react';
import {useLocation, Link} from 'react-router-dom';

function Comment(props) {
    useEffect(() => {
        // console.log (((props.date).split('T'))[0]);
    }, [])

    function handleUpdate() {
        console.log("updated");
    }

    function deleteComment() {
        const url = `http://localhost:5000/blog/post/${props.postid}/comment/${props.commentid}/delete_comment`;

        fetch(url, {method: 'DELETE'})
        .then((data)=>data.json())
        .then(res=>{
        })
    }

    return (
        <div className="comment-container">
            <div className="comment-user-info">
                <p>{props.user}</p>
                <p>{((props.date).split('T'))[0]}</p>
            </div>
            <div className="comment-main">
                <p>{props.content}</p>
                <div className="comment-update-delete-container">
                    <div className="comment-update-delete-btn-img-container">
                        <Link to={{pathname: `/post/${props.postid}/comment/${props.commentid}/update_comment`}} state={{postid: props.postid, commentid: props.commentid, name: props.user, content: props.content, password: props.password}}><div className="comment-update-btn"> </div></Link>
                    </div>
                    <div className="comment-update-delete-btn-img-container">
                        <Link to={{pathname: `/post/${props.postid}/comment/${props.commentid}/delete_comment`}} state={{postid: props.postid, commentid: props.commentid, name: props.user, content: props.content, password: props.password}}><div className="comment-delete-btn"> </div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;