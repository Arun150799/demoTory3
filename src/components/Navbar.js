import React from 'react';
import { Link} from "react-router-dom";
import './Navbar.css';

const Navbar = () => {



  return (
    <>
      <ul className='header'>
        <Link to="/" className='NavHome'><li>SwipTory</li></Link>
      </ul>
    </>
  );
};

export default Navbar;
