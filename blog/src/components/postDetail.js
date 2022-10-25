import { React, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom'
import CommentSection from './commentSection';
import '../css/posts.css';

function PostDetail(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [postid, setPostid] = useState(location.state.postid);
    const [post, setPost] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/blog/post/${postid}`;
        fetch(url)
        .then(data=>{
            return data.json();
        })
        .then(res=>{
            setPost(res.result.post);
        })
    }, [])

    function handleDelete() {
        const url = `http://localhost:5000/blog/post/${postid}/delete_post`;

        fetch(url, {method: 'DELETE'})
        .then((data)=>{
            return data.json();
        })
        .then(res=>{
            console.log(res);
            navigate('/posts');
        })
    }
    return (
        <div className="post-detail-container">
            <div className="post-detail-inner-container">
                <div className="post-detail-img-container" >
                    <div className="preview-img" style={{backgroundImage: `url(${post.picture})`}}></div>
                </div>
                <div className="post-detail-header">
                    <p> Read </p>
                    <h1 className="post-detail-header-title">"{post.title}"</h1>
                    <p className="post-detail-header-author">By {post.author}</p>
                </div>
                <div className="post-detail-main">
                    <p>{post.content}</p>
                </div>
                <div className="post-detail-btn">
                    <Link to='/posts'><p className="link-texts">See other posts</p></Link>
                    <Link to={{pathname: `/post/${postid}/create_comment`}} state={{postid: postid, title: post.title, content: post.content}}><p className="link-texts">Leave a comment</p></Link>
                </div>
                <div>
                    <CommentSection postid={postid}/>
                </div>
            </div>
        </div>
    )
}

export default PostDetail