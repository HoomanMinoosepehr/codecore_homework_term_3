import { NavLink } from 'react-router-dom';
import { RedButton } from './Button';

function Navbar(props) {

    return (
        <div className='absolute bg-yellow-600 bg-opacity-50 w-full flex justify-between px-10 h-16 items-center'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/recipes'}>Recipes</NavLink>
                <NavLink to={'/recipes/new'}>New Recipe</NavLink>
                { props.user ? 
                    <div className='flex items-center'>
                        <p className='m-3'>Hello, {props.user}</p>
                        <RedButton label="Sign Out" onClick={props.onSignOut} />
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

