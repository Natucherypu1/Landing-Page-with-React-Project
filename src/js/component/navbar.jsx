import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Navbar = () => {
	return (
		<div>

			<ul className="nav justify-content-end bg-dark navbar-dark">
  
  <li className="nav-item float-left">
    <a className="nav-link active" aria-current="page" href="#">Start Bootstrap</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Services</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled">Contact</a>
  </li>
</ul>
			
			
		</div>
	);
};

export default Navbar;
