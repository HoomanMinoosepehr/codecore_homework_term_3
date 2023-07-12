import { NavLink } from 'react-router-dom';

function Navbar(props) {

    return (
        <div className='nav-main'>
            <div className='nav-second'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/recipes'}>Recipes</NavLink>
                <NavLink to={'/sign-in'}>Sign In</NavLink>
                <NavLink to={'/sign-up'}>Sign Up</NavLink>
                <button className='btn btn-danger' onClick={props.onSignOut}>Sign Out</button>
            </div>
        </div>
    )
    
};

export default Navbar;