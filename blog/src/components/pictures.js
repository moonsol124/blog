import { useState, useEffect, React } from 'react';
import Picture from './picture';
import uniqid from 'uniqid';

function Pictures() {
    const [album, setAlbum] = useState([]);
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/blog/album';
        fetch(url)
        .then(data => data.json())
        .then(res => {
            const array = [];
            for (let i = 0; i < res.album.length; i++) {
                array.push(res.album[i]);
            }
            setAlbum(array);
        })
    }, [])

    return (
        <div className="pictures-container">
            <div className="posts-preview-texts">
                <h1> PICTURES </h1>
                <p> A part of my daily life </p>
            </div>
            <ul className="pictures-ul">
                {album.map(picture => {
                    return (
                        <li key={uniqid()}>
                            <Picture title={picture.title} pictureId={picture['_id']} description={picture.description} date={picture.date} picture={picture.address}/>
                            <div className='comment-hr'></div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Pictures