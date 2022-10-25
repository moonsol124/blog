import {Link, Outlet} from 'react-router-dom';
import { React, useEffect, useState } from 'react';
import '../css/posts.css';
import uniqid from 'uniqid';
import PostPreview from './postPreview';

function Posts(props) {
    const [posts, setPosts] = useState([]);
    const backUrl = '/post';

    useEffect(()=>{
        const url = 'http://localhost:5000/blog/posts';
        fetch(url)
        .then(data => data.json())
        .then(res => {
            console.log(res);
            const array = [];
            for (let i = 0; i < res.result.posts.length; i++) {
                array.push(res.result.posts[i]);
            }
            setPosts(array);
        })
    }, [])

    return (
        <div className='posts-container'>
            <div className="posts-preview-texts">
                <h1> STORIES </h1>
                <p> And things that I wish I knew before </p>
            </div>
            <ul className="posts-ul">
                {posts.map((post)=>{
                    return (
                        <PostPreview key={uniqid()} postid={post['_id']} description={post.description} picture={post.picture} title={post.title} content={post.content} />
                    )
                })}
            </ul>
        </div>
    )
}

export default Posts;