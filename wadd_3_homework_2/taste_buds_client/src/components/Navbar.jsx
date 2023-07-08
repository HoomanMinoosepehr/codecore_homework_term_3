import { NavLink } from 'react-router-dom';

function Navbar() {


    return (
        <div className='nav-main'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/recipes'}>Recipes</NavLink>
            <NavLink to={'/sign-in'}>Sign In</NavLink>
            <NavLink to={'/sign-up'}>Sign Up</NavLink>
        </div>
    )
};

export default Navbar;