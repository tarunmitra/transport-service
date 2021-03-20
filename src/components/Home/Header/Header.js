import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser] = useContext(UserContext)
    return (
        <div className="nav-style container">
            <nav className="nav">
            <h2 className="m-3">Transport Service</h2>
                <ul className="mt-4">
                
                    <li>
                        <Link to="/home">Home</Link>
                    </li>

                    <li>
                        <Link to ="/destination">Destination</Link>
                    </li>
                    <li className="login">
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        {loggedInUser.name}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;