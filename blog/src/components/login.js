import { useNavigate } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const url = 'http://localhost:5000/users/login';
        const userName = e.target[0].value; 
        const userPassword = e.target[1].value;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username: userName,
                password: userPassword
            })
        };
        
        fetch(url, requestOptions)
        .then(data => {
            return data.json();
        })
        .then(res => {
            props.setToken(res.token, res.user.username);
            navigate('/');
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username"> username </label>
                    <input id='username' type='text' name='username'/>
                </div>
                <div>
                    <label htmlFor="password"> username </label>
                    <input id='password' type='password' name='password'/>
                </div>
                <div>
                    <button type='submit'> Submit </button>
                </div>
            </form>
        </div>
    )
}

export default Login;