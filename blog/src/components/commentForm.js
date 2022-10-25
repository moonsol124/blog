import { useLocation, useNavigate } from 'react-router-dom';

function CommentForm(props) {
    const location = useLocation();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;
        const content = e.target[2].value;

        const url = `http://localhost:5000/blog/post/${location.state.postid}/create_comment`;
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password,
                content: content,
                postid: location.state.postid
            })
        }

        fetch(url, requestOptions)
        .then(data=>data.json())
        .then(res=>{
            console.log (res);
            navigate(`/post/${location.state.postid}`, {state: {postid:location.state.postid}});
        })
    }

    return (
        <div className="post-detail-container comment-form-container">
            <div className="comment-form-header">
                <h1> Comment </h1>
            </div>
            <div>
                <h1 className="post-detail-header-title">"{location.state.title}"</h1>
            </div>
            <form onSubmit={handleSubmit} className="comment-form">
                <div className="comment-form-input-container">
                    <label htmlFor="username"> Name </label>
                    <input type='text' name='username' id='username' className="form-input"/> 
                </div>
                <div className="comment-form-input-container">
                    <label htmlFor="password"> Password </label>
                    <input type='password' name='password' id='password' className="form-input"/> 
                </div>
                <div className="comment-form-input-container">
                    <label htmlFor="comment"> Comment </label>
                    <textarea name='comment' id='comment' rows="10"className="form-input"/> 
                </div>
                <div className="comment-btn-container">
                    <button type='submit' className="link-texts"> Create comment </button>
                </div>
            </form>
        </div>
    )
}

export default CommentForm;