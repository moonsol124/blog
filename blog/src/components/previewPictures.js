import { React, useState, useEffect } from 'react';
import AlbumPreview from './albumPreview';
import '../css/posts.css';
import { Link } from 'react-router-dom';

function PreviewPictures() {
    const [album, setAlbum] = useState([]);
    
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
        <div className="preview-Pictures-container">
            <div className="preview-pictures-container-texts">
                <h1> ALBUM </h1>
                <p> A part of my daily life </p>
            </div>
            <div className="preview-pictures">
                {album.map((picture)=>{
                    return <AlbumPreview picture={picture}/>
                })}
            </div>
            <div className="preview-pictures-btn-group">
                <Link to='/pictures'><p className='link-texts'> See all pictures </p></Link>
            </div>
        </div>
    )
}

export default PreviewPictures;