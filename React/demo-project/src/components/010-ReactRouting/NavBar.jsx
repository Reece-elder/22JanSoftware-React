import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
      <>
      {/* Spans only take up the width of the text they need to take up */}
      <span><Link to="/"> Home </Link></span>
      <span><Link to="/about"> About </Link></span>
      <span><Link to="/shop"> Shop </Link></span>

      <button type='button'> <Link to="/"> Go to Home! </Link> </button>
      </>
  );
};

export default NavBar;
