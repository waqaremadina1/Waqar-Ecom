import React from 'react';
import { useNavigate } from 'react-router-dom';


const MenuHero = () => {
  // Hardcoded data for the featured product
  const product = {
    id: 1,
    name: 'Great Lighting Keyboard',
    price: '$129.99',
    imageUrl: 'https://res.cloudinary.com/dobrs3wqw/image/upload/v1730490726/cld-sample-4.jpg' // Replace with your image URL
  };

  const navigate = useNavigate()

  return (
    <section className="hero-banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1>Discover Our Latest Culinary Creation</h1>
          <p>Welcome to Food Fusion, where culinary traditions collide! Savor a vibrant menu featuring innovative dishes crafted from global flavors. Join us for an unforgettable dining experience that delights every palate!</p>
          <button className="cta-button" onClick={() => { navigate("/product/6053576088") }}>Order Now</button>
        </div>
        <div className="banner-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
      </div>
    </section>
  );
};

export default MenuHero;
