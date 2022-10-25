import { React, useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Comment from './comment';
import uniqid from 'uniqid';

function CommentSection(props) {
    const [comments, setComments] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchData = async () => {
            const url = `http://localhost:5000/blog/post/${props.postid}/comments`;
            fetch(url)
            .then(data=>data.json())
            .then(res => {
                const copiedComments = [];
                for (let i = 0; i < res.comments.comments.length; i++) {
                    copiedComments.push(res.comments.comments[i]);
                }
                setComments(copiedComments);
            })
        }  

        fetchData();
    }, [props.postid])

    function deleteComment(postid, commentid) {
        const url = `http://localhost:5000/blog/post/${postid}/comment/${commentid}/delete_comment`;

        fetch(url, {method: 'DELETE'})
        .then((data)=>data.json())
        .then(res=>{
            // console.log (res);
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;
        const title = e.target[2].value;
        const content = e.target[3].value;

        const url = `http://localhost:5000/blog/post/${props.postid}/create_comment`;
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password,
                title: title,
                content: content,
                postid: props.postid,
            })
        }

        fetch(url, requestOptions)
        .then(data=>data.json())
        .then(res=>{
            // console.log (res);
        })
    }

    return (
        <ul className="comment-section-container">
            {comments.map((comment) => {
                return (
                    <li key={uniqid()}>
                        <Comment deleteComment={deleteComment} commentid={comment['_id']} user={comment.username} date={comment.date} postid={props.postid} title={comment.title} password={comment.password} content={comment.content}/>
                        <div className="comment-hr"></div>
                    </li>
                )   
            })}
        </ul>
    )
}

export default CommentSection;