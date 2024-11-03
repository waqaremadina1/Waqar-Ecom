import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined, HeartOutlined, UserOutlined, ShoppingOutlined, LogoutOutlined, HomeOutlined, LoginOutlined, UserAddOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { useAuthContext } from "contexts/AuthContext";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {Button} from "antd";

export default function Header() {
  const { isAuthenticated } = useAuthContext();
  const nav = useRef(null);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Function to update counts from localStorage
  const updateCounts = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    setCartCount(cartItems.length);
    setWishlistCount(wishlistItems.length);
  };

  // Update counts on component mount and when localStorage changes
  useEffect(() => {
    updateCounts();

    // Add event listener for storage changes
    window.addEventListener('storage', updateCounts);

    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener('storage', updateCounts);
    };
  }, []);

  const toggleMenu = () => {
    nav.current.classList.toggle("active");
  };

  const auth = getAuth();
  const { dispatch } = useAuthContext();
  let navigate = useNavigate();


  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch({ type: "SET_LOGGED_OUT" });
      window.toastify("Logged out successfully", "success");
      navigate('/auth/login');
    } catch (error) {
      console.error("Error logging out:", error);
      window.toastify("Error logging out", "error");
    }
  };

  return (
    <header className="header">
      <div className="logo"><Link to='/'>
        <span><img src="https://res.cloudinary.com/dobrs3wqw/image/upload/v1730614345/logo_euxnv6.png" alt="logo" /></span></Link>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className="nav" ref={nav}>
        {isAuthenticated ? (
          <>
    <Link to="/products" className='text-dark mt-0 px-4 btn-lg'>
  <ShoppingOutlined /> &nbsp; Shop
</Link>

<Link to="/cart" className='text-dark px-4 btn-lg'>
 
    <ShoppingCartOutlined />
&nbsp; Cart
</Link>

<Link to="/wishlist" className='text-dark px-4 btn-lg'>
 
    <HeartOutlined />
&nbsp; Wishlist
</Link>

<Link to="/dashboard" className='text-dark px-4 btn-lg'>
  <UserOutlined /> &nbsp; Account
</Link>

<Link
  icon={<LogoutOutlined />}
  onClick={handleLogout}
  className="rounded rounded-2 text-dark px-4 btn-sm"
>
  <LogoutOutlined /> &nbsp; Logout
</Link>
          </>
        ) : (
          <>
       
      <Link to="/" className=" text-dark py-1 px-3"> <HomeOutlined /> &nbsp; Home</Link>
      <Link to="/auth/login" className=" text-dark py-1 px-3"> <LoginOutlined /> &nbsp; Login</Link>
      <Link to="/auth/register" className=" text-dark py-1 px-2"> <UserAddOutlined /> &nbsp; Register</Link>

          </>
        )}
      </nav>
    </header>
  );
}
