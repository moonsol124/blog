import { useNavigate } from 'react-router-dom';

function PostForm() {
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        const title = e.target[0].value;
        const content = e.target[1].value;
        const description = e.target[2].value;
        const picture = e.target[3].value;
        
        const url = 'http://localhost:5000/blog/post/create_post';
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title,
                content: content,
                description: description,
                picture: picture,
            })
        };

        fetch(url, requestOptions)
        .then((data) => {
            return data.json();
        })
        .then((res) => {
            console.log (res);
            navigate(`/post/${res.post['_id']}`, {state: {postid: res.post['_id']}});
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">title </label>
                    <input id='title' name='title' type='text' />
                </div>
                <div>
                    <label htmlFor="content">content </label>
                    <input id='content' name='content' type='text' />
                </div>
                <div>
                    <label htmlFor="decription">decription </label>
                    <input id='description' name='description' type='text' />
                </div>
                <div>
                    <label htmlFor="picture">picture address </label>
                    <input id='picture' name='picture' type='text' />
                </div>
                <div>
                    <button type='submit'> create post </button>
                </div>
            </form>
        </div>
    )
}

export default PostForm;