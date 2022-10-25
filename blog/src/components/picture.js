import { React, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Picture(props) {
    const [like, setLike] = useState(false);
    const [message, setMessage] = useState('');

    function toggleHeart() {
        if (like) {
            const url = `http://localhost:5000/blog/picture/${props.pictureId}/update_heart`;
            const requestOptions = {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: props.pictureId,
                    calculation: 'down',
                })
            }

            fetch(url, requestOptions) 
            .then(data => data.json())
            .then(res => {
                console.log (res);
            })
            setLike(false);
            setMessage('');
        }
        else {
            const url = `http://localhost:5000/blog/picture/${props.pictureId}/update_heart`;
            const requestOptions = {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: props.pictureId,
                    calculation: 'up',
                })
            }

            fetch(url, requestOptions) 
            .then(data => data.json())
            .then(res => {
            })
            setLike(true);
            setMessage('You liked it!');
        }
    }

    return (
        <>
            <div className="picture-li">
                <div className="picture-img-container">
                    <img className="picture-img" src={props.picture} alt={props.title}/>
                </div>
                <div className="picture-date">
                    <div className="picture-heart-container">
                        {(like)?<div className="picture-heart" onClick={toggleHeart}></div>:
                        <div className="picture-empty-heart" onClick={toggleHeart}></div>}
                    </div>
                    <div className="picture-like-message">
                        <p> {message} </p>
                    </div>
                    <p>{((props.date).split('T'))[0]}</p>
                </div>
                <div className="picture-texts">
                    <p>{props.title}</p>
                    <p>{props.description}</p>
                </div>
                {/* <div className="picture-btn-group">
                    <Link to={{pathname: `/picture/${props.pictureId}`}} state={{pictureId: props.pictureId, like:like}}><p> See entire post </p></Link>
                </div> */}
            </div>
        </>
    )
}

export default Picture;