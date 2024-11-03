import React from "react";
import { useInView } from "react-intersection-observer";
import img1 from "../../../Assets/img1.png"; // Update to a food-related image
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const { ref: featuredRef, inView: featuredInView } = useInView({ triggerOnce: true });
  const { ref: categoriesRef, inView: categoriesInView } = useInView({ triggerOnce: true });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({ triggerOnce: true });
  const { ref: whyChooseRef, inView: whyChooseInView } = useInView({ triggerOnce: true });

  return (
    <main>
      <section className="hero container my-3">
        <div className="hero-content">
          <h1>Enjoy Delicious Meals with Up to 30% Off!</h1>
          <button className="my-3" onClick={() => navigate("/auth/login")}>
            Order Now
          </button>
        </div>
        <div className="hero-image">
          <img src={img1} alt="Delicious food" height={100}/>
        </div>
      </section>

      {/* Categories Section */}
      <section
        className={`categories ${categoriesInView ? "slide-in" : "slide-hidden"} my-4 container`}
        ref={categoriesRef}
      >
        <h2 className="my-5">Food Categories</h2>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-4">
            <div id="overlay">
              <div className="card card-appetizers">
                <div className="card-body">
                  <h5 className="card-title">Appetizers</h5>
                  <button className="shop-now-button" onClick={() => navigate('/products')}>Order Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div id="overlay">
              <div className="card card-main-courses">
                <div className="card-body">
                  <h5 className="card-title">Main Courses</h5>
                  <button className="shop-now-button" onClick={() => navigate('/products')}>Order Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div id="overlay">
              <div className="card card-desserts">
                <div className="card-body">
                  <h5 className="card-title">Ice Cream</h5>
                  <button className="shop-now-button" onClick={() => navigate('/products')}>Order Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div id="overlay">
              <div className="card card-dessert">
                <div className="card-body">
                  <h5 className="card-title">Desserts</h5>
                  <button className="shop-now-button" onClick={() => navigate('/products')}>Order Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div id="overlay">
              <div className="card card-beverages">
                <div className="card-body">
                  <h5 className="card-title">Beverages</h5>
                  <button className="shop-now-button" onClick={() => navigate('/products')}>Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`featured-products ${featuredInView ? "slide-in" : "slide-hidden"} my-5 container`}
        ref={featuredRef}
      >
        <h2 className="my-5 text-center">Featured Dishes</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card" style={{ background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)" }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Spaghetti Carbonara</h5>
                <p className="card-text">A classic Italian pasta dish with creamy sauce.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card" style={{ background: "linear-gradient(135deg, #ffecd2, #fcb69f)" }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Grilled Chicken Salad</h5>
                <p className="card-text">Fresh greens topped with grilled chicken and vinaigrette.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card" style={{ background: "linear-gradient(135deg, #d4fc79, #96e6a1)" }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Chocolate Cake</h5>
                <p className="card-text">Rich and moist chocolate cake with frosting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className={`why-choose-us ${whyChooseInView ? "slide-up" : "slide-hidden"} my-5 container`}
        ref={whyChooseRef}
      >
        <h2 className="my-5 text-center display-4 font-weight-bold text-uppercase">Why Choose Us?</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card choose-us-card">
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title text-dark">Fresh Ingredients</h5>
                <p className="card-text">We use only the freshest ingredients in all our dishes.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card choose-us-card">
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title text-dark">Affordable Prices</h5>
                <p className="card-text">Delicious meals at prices you'll love.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card choose-us-card">
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title text-dark">Excellent Service</h5>
                <p className="card-text">Our team is dedicated to making your experience memorable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className={`testimonials ${testimonialsInView ? "slide-in" : "slide-hidden"} my-4 container`}
        ref={testimonialsRef}
      >
        <h2 className="text-center my-5">Customer Reviews</h2>
        <div id="testimonialsCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active text-center">
              <div className="d-flex flex-column align-items-center">
                <Avatar size={100} style={{ background: "linear-gradient(to right, #c0392b, #8e44ad)" }} className="mb-3" icon={<UserOutlined />} />
                <p className="mb-1">"Amazing food and wonderful atmosphere!"</p>
                <span>∼ Emma Johnson</span>
              </div>
            </div>
            <div className="carousel-item text-center">
              <div className="d-flex flex-column align-items-center">
                <Avatar style={{ background: "linear-gradient(to right, #c0392b, #8e44ad)" }} size={100} className="mb-3" icon={<UserOutlined />} />
                <p className="mb-1">"Best dining experience I've ever had!"</p>
                <span>∼ Noah Patel</span>
              </div>
            </div>
            <div className="carousel-item text-center">
              <div className="d-flex flex-column align-items-center">
                <Avatar style={{ background: "linear-gradient(to right, #c0392b, #8e44ad)" }} size={100} className="mb-3" icon={<UserOutlined />} />
                <p className="mb-1">"The flavors were out of this world!"</p>
                <span>∼ Ethan Brown</span>
              </div>
            </div>
            <div className="carousel-item text-center">
              <div className="d-flex flex-column align-items-center">
                <Avatar style={{ background: "linear-gradient(to right, #c0392b, #8e44ad)" }} size={100} className="mb-3" icon={<UserOutlined />} />
                <p className="mb-1">"Incredible taste! Perfectly cooked and beautifully presented dish!"</p>
                <span>∼ Mason Clark
                </span>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </main>
  );
}
