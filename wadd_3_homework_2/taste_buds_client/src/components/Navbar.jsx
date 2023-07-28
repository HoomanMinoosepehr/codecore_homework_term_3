import { NavLink } from 'react-router-dom';

function Navbar(props) {

    return (
        <div className='absolute bg-white bg-opacity-50 w-full flex justify-between px-10 h-16 items-center'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/recipes'}>Recipes</NavLink>
                <NavLink to={'/recipes/new'}>New Recipe</NavLink>
                { props.user ? 
                    <div className='d-flex align-items-center'>
                        <p className='m-3'>Hello, {props.user}</p>
                        <button className='btn btn-danger m-3' onClick={props.onSignOut}>Sign Out</button>
                    </div>
                    :
                    <>
                        <NavLink to={'/sign-in'}>Sign In</NavLink>
                        <NavLink to={'/sign-up'}>Sign Up</NavLink>
                    </>
                }
        </div>
    )
    
};

export default Navbar;

