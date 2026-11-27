import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} >
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/UserProfile/1" className={({ isActive }) => isActive ? 'active' : ''} >
                        User profile (User 1)
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/UserProfile/2" className={({ isActive }) => isActive ? 'active' : ''} >
                        User profile (User 2)
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/UserProfile/3" className={({ isActive }) => isActive ? 'active' : ''} >
                        User profile (User 3)
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default Navigation;