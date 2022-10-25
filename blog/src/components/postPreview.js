import { Link } from 'react-router-dom';
import "../css/posts.css";

function PostPreview(props) {
    console.log (props.picture);
    return (
        <li className="post-preview-li">
            <Link to={{pathname: `/post/${props.postid}`}} state={{ postid: props.postid }} className="post-preview-link-container">
                <div className="preview-content-container">
                    <div className="preview-img-container" >
                        <div className="preview-img" style={{backgroundImage: `url(${props.picture})`}}></div>
                    </div>
                    <div className="preview-texts">
                        <p> Read</p>
                        <h2 className="preview-texts-h2"> {props.title} </h2>
                        <p> {props.description} </p>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default PostPreview;