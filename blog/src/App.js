import logo from './logo.svg';
import './css/App.css';
import { React, useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/home';
import Nav from './components/nav';
import Posts from './components/posts';
import About from './components/about';
import Login from './components/login';
import useToken from './components/useToken';
import PostForm from './components/postForm';
import PictureForm from './components/pictureForm';
import PostDetail from './components/postDetail';
import PostUpdateForm from './components/postUpdateForm';
import CommentForm from './components/commentForm.js';
import CommentUpdateForm from './components/commentUpdateForm.js';
import CommentDeleteForm from './components/commentDeleteForm.js';
import Pictures from './components/pictures';
import PictureDetail from './components/pictureDetail';
import Menu from './components/menu';

function App() {
  const [menuToggled, setMenuToggled] = useState(false);

  function toggleMenu() {
      if (menuToggled) {
          setMenuToggled(false);
      }
      else {
          setMenuToggled(true);
      }
  }

  const { token, removeToken, setToken, user } = useToken();

  return (
    <div className="app">
      <BrowserRouter>
      <Nav toggleMenu={toggleMenu}/>
      {(menuToggled)?<Menu toggleMenu={toggleMenu}/>:null}
        <Routes>
          {/* for user display */}
          <Route path='/' element={<Home />}></Route>
          <Route path='/posts' element={<Posts />}></Route>
          <Route path='/post/:id' element={<PostDetail />}></Route>
          <Route path='/post/:id/create_comment' element={<CommentForm />}></Route>
          <Route path='/pictures' element={<Pictures />}></Route>
          <Route path='/picture/:id' element={<PictureDetail />}></Route>
          <Route path='/post/:postid/comment/:commentid/update_comment' element={<CommentUpdateForm />}></Route>
          <Route path='/post/:postid/comment/:commentid/delete_comment' element={<CommentDeleteForm />}></Route>
          {/* for admin */}
          <Route path='/post/:id/update_post' element={<PostUpdateForm />}></Route>
          <Route path='/create_post' element={<PostForm />}></Route>
          <Route path='/create_picture' element={<PictureForm />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/login' element={<Login setToken={setToken} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
