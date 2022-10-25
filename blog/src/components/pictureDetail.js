import {useLocation, Link} from 'react-router-dom';
import {React, useState, useEffect} from 'react'; 

function PictureDetail(props) {
    const location = useLocation();
    const [picture, setPicture] = useState({});

    useEffect(() => {
        console.log (location.state);
        const url = `http://localhost:5000/blog/picture/${location.state.pictureId}`;

        fetch(url)
        .then(data=>data.json())
        .then(res=>{
            console.log (res.picture);
            setPicture(res.picture);
        })
    }, [])

    return (
        <>
            <div className="posts-preview-texts">
                <h1> PICTURES </h1>
                <p> A part of my daily life </p>
            </div>
            <div className="picture-li">
                <div className="picture-img-container">
                    <img className="picture-img" src={picture.address} alt={picture.title}/>
                </div>
                <div className="picture-date">
                    <div className="picture-heart-container">
                        <div className="picture-heart" onClick={location.state.toggleHeart}></div>  
                    </div>
                    <p> {picture.date} </p>
                    {/* <p>{((picture.date).split('T'))[0]}</p> */}
                </div>
                <div className="picture-texts">
                    <p>{picture.title}</p>
                    <p>{picture.description}</p>
                </div>
                <div className="picture-btn-group">
                    <Link to={{pathname: `/pictures`}}><p> See other pictures </p></Link>
            </div>
        </div>
        </>
    )
}

export default PictureDetail;