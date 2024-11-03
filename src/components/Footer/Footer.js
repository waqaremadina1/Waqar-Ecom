import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {

  const year = new Date ().getFullYear();

  return (
   
   
<footer>
      <div className="container-fluid">
        <div className="row ">

        
        </div>
      </div>
      <div className="container-fluid bg-dark text-white">
        <div className="row ">
          <div className="col-md-3 py-3">
            <div className="h6">TechPro</div>
            <hr />
            <p>
            Welcome to Food Fusion, where culinary traditions 
            collide! Savor a vibrant menu featuring innovative 
            dishes crafted from global flavors. Join us for an 
            unforgettable dining experience that delights 
            every palate!
            </p>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6">Menu</div>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Waffle Fries
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Fries
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Chicken Sandwich
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Blizzard 
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Bacon Cheese burger
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6">Policy</div>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Health and Safety
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Payment
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                   Customer Service 
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Order Policy
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                Takeout and Delivery
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6">Address</div>
            <hr />
            <address>
              <strong>Faisalabad</strong>
              <br />
              Punjab,
              <br />
              Pakistan. 38000
              <br />
              <p>Phone: +923001234567</p>
            </address>
            <div className="h6">Customer Care</div>
            <hr />
            <i className="bi bi-envelope"></i> abc123@email.com
            <br />
          </div>
      <p id="footer" className="mb-0 text-center py-2 mt-2"> &copy; {year}. <b>Waqar-Codes.</b> All rights reserved.</p>
        </div>
      </div>
    </footer>

   
      
    
  );
};


