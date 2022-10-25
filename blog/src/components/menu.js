import '../css/nav.css';
import {Link} from "react-router-dom";

function Menu(props) {

    return (
        <ul className="menu-ul">
            <li></li>
            <li><p><Link to='/' onClick={props.toggleMenu}>Blog</Link></p></li>
            <li><p><Link to='/pictures' onClick={props.toggleMenu}>Pictures</Link></p></li>
            <li><p><Link to='/posts' onClick={props.toggleMenu}>Posts</Link></p></li>
        </ul>
    )
}

export default Menu;