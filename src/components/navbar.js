import { Link } from "react-router-dom";
import '../assets/Navbar.css'

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar =()=>{
const {cartItems}=useContext(CartContext)

return(<>


<nav className="navbar">
<h1 className="logo" style={{padding:'10px'}}>KaLéa</h1>

<div className="links">

<Link to="/">Home</Link>
<Link to="/products">Accessories</Link>
<Link to="/contact">Contact</Link>
<Link to="/cart" className="cart-link">🛒 Cart ({cartItems.length})</Link>


</div>
</nav>
</>);

}


export default Navbar