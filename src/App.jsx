import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import logo from "./assets/Nexota Technologies Logo.jpeg";

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top">
        <button
          className="btn btn-outline-light"
          onClick={() => setSidebar(!sidebar)}
        >
          <i className="bi bi-list"></i>
        </button>

        <div className="d-flex align-items-center ms-3">
          <img
            src={logo}
            alt="Nexota Technologies"
            className="logo me-2"
          />

          <h4 className="text-white m-0">
            Nexota Technologies
          </h4>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${sidebar ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#home" onClick={() => setSidebar(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setSidebar(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#services" onClick={() => setSidebar(false)}>
              Services
            </a>
          </li>

          <li>
            <a href="#careers" onClick={() => setSidebar(false)}>
              Careers
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setSidebar(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container text-center">
          <img
            src={logo}
            alt="Nexota Technologies"
            className="hero-logo"
          />

          <h1 className="display-4 fw-bold">
            Transforming Ideas Into Technology
          </h1>

          <p className="lead">
            Empowering businesses with innovative software
            solutions, web applications, cloud technologies,
            and digital transformation services.
          </p>

          <div className="mt-4">
            <a
              href="#services"
              className="btn btn-primary btn-lg me-3"
            >
              Get Started
            </a>

            <a
              href="#contact"
              className="btn btn-outline-light btn-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-5">
        <div className="container">

          <h2 className="text-center fw-bold mb-3">About Nexota Technologies</h2>

          <p className="text-center text-muted mb-5">
            Empowering businesses through innovative technology solutions,
            digital transformation, and world-class software development services.
          </p>

          <div className="row g-4">

            {/* Who We Are */}
            <div className="col-md-6">
              <div className="about-card h-100">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="Who We Are"
                  className="about-img"
                />
                <h4>Who We Are</h4>
                <p>
                  Nexota Technologies is a forward-thinking software development
                  company specializing in web applications, mobile solutions,
                  cloud technologies, and digital transformation services.
                  Our passionate team helps businesses turn ideas into powerful
                  digital products.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="col-md-6">
              <div className="about-card h-100">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                  alt="Mission"
                  className="about-img"
                />
                <h4>Our Mission</h4>
                <p>
                  To empower businesses with innovative, scalable, and reliable
                  technology solutions that drive growth, improve efficiency,
                  and create lasting value for our clients.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="col-md-6">
              <div className="about-card h-100">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                  alt="Vision"
                  className="about-img"
                />
                <h4>Our Vision</h4>
                <p>
                  To become a globally recognized technology partner known for
                  innovation, excellence, and delivering transformative digital
                  experiences across industries.
                </p>
              </div>
            </div>

            {/* Promise */}
            <div className="col-md-6">
              <div className="about-card h-100">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                  alt="Promise"
                  className="about-img"
                />
                <h4>Our Promise</h4>
                <p>
                  We are committed to delivering quality-driven solutions,
                  maintaining transparency, and ensuring client satisfaction
                  through every stage of development.
                </p>
              </div>
            </div>

          </div>

          {/* Core Values */}
          <div className="mt-5">
            <h2 className="text-center fw-bold mb-4">
              Our Core Values
            </h2>

            <div className="row g-4">

              <div className="col-md-3">
                <div className="value-card">
                  <h1>🎯</h1>
                  <h5>Client-Centric Approach</h5>
                  <p>
                    Your success is our priority. We listen,
                    understand and exceed expectations.
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="value-card">
                  <h1>💡</h1>
                  <h5>Innovation & Excellence</h5>
                  <p>
                    Leveraging modern technologies and
                    frameworks for exceptional results.
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="value-card">
                  <h1>🤝</h1>
                  <h5>Integrity & Transparency</h5>
                  <p>
                    Honest communication, clear timelines,
                    and trusted partnerships.
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="value-card">
                  <h1>🚀</h1>
                  <h5>Continuous Improvement</h5>
                  <p>
                    Constantly improving our skills and
                    processes to deliver excellence.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Expert Team */}
          <div className="mt-5">
            <h2 className="text-center fw-bold mb-4">
              Our Expert Team
            </h2>

            <div className="row g-4 text-center">

              <div className="col-md-3">
                <div className="team-card">
                  <h1>5+</h1>
                  <h5>Leadership Team</h5>
                  <p>Experienced leaders with 15+ years in IT</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="team-card">
                  <h1>15+</h1>
                  <h5>Senior Developers</h5>
                  <p>Expert full-stack and specialized developers</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="team-card">
                  <h1>8+</h1>
                  <h5>Designers & QA</h5>
                  <p>UI/UX designers and quality assurance specialists</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="team-card">
                  <h1>24/7</h1>
                  <h5>Support Team</h5>
                  <p>Dedicated support and maintenance services</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Services */}
      <section id="services" className="services py-5">
        <div className="container">

          <h2 className="text-center fw-bold mb-3">
            Our Services
          </h2>

          <p className="text-center text-muted mb-5">
            We provide end-to-end technology solutions to help businesses
            innovate, scale, and achieve digital excellence.
          </p>

          <div className="row g-4">

            {/* Web Development */}
            <div className="col-md-3">
              <div className="card service-card h-100 shadow">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                  className="service-img"
                  alt="Web Development"
                />
                <div className="card-body text-center">
                  <i className="bi bi-code-slash service-icon"></i>
                  <h4>Web Development</h4>
                  <p>
                    Responsive websites, enterprise portals,
                    e-commerce platforms, and custom web applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Apps */}
            <div className="col-md-3">
              <div className="card service-card h-100 shadow">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
                  className="service-img"
                  alt="Mobile Apps"
                />
                <div className="card-body text-center">
                  <i className="bi bi-phone service-icon"></i>
                  <h4>Mobile Apps</h4>
                  <p>
                    Android and iOS applications with modern UI,
                    high performance, and scalability.
                  </p>
                </div>
              </div>
            </div>

            {/* UI UX */}
            <div className="col-md-3">
              <div className="card service-card h-100 shadow">
                <img
                  src="https://images.unsplash.com/photo-1558655146-9f40138edfeb"
                  className="service-img"
                  alt="UI UX"
                />
                <div className="card-body text-center">
                  <i className="bi bi-palette service-icon"></i>
                  <h4>UI/UX Design</h4>
                  <p>
                    User-friendly interfaces and engaging digital
                    experiences that improve customer satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Cloud */}
            <div className="col-md-3">
              <div className="card service-card h-100 shadow">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
                  className="service-img"
                  alt="Cloud"
                />
                <div className="card-body text-center">
                  <i className="bi bi-cloud service-icon"></i>
                  <h4>Cloud Solutions</h4>
                  <p>
                    Cloud deployment, migration, hosting,
                    infrastructure management and monitoring.
                  </p>
                </div>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="col-md-3">
              <div className="card service-card h-100 shadow">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                  className="service-img"
                  alt="Marketing"
                />
                <div className="card-body text-center">
                  <i className="bi bi-graph-up-arrow service-icon"></i>
                  <h4>Digital Marketing</h4>
                  <p>
                    SEO, social media marketing, content marketing,
                    and lead generation campaigns.
                  </p>
                </div>
              </div>
            </div>

            {/* Testing */}
            <div className="col-md-3">
              <div className="card service-card h-100 shadow">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                  className="service-img"
                  alt="Testing"
                />
                <div className="card-body text-center">
                  <i className="bi bi-bug service-icon"></i>
                  <h4>Software Testing</h4>
                  <p>
                    Manual testing, automation testing,
                    QA processes and performance testing.
                  </p>
                </div>
              </div>
            </div>

            {/* AI */}
            <div className="col-md-3">
              <div className="card service-card h-100 shadow">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                  className="service-img"
                  alt="AI"
                />
                <div className="card-body text-center">
                  <i className="bi bi-cpu service-icon"></i>
                  <h4>AI Solutions</h4>
                  <p>
                    AI-powered applications, chatbots,
                    automation tools, and intelligent systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Consulting */}
            <div className="col-md-3">
              <div className="card service-card h-100 shadow">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                  className="service-img"
                  alt="Consulting"
                />
                <div className="card-body text-center">
                  <i className="bi bi-briefcase service-icon"></i>
                  <h4>IT Consulting</h4>
                  <p>
                    Strategic technology consulting and digital
                    transformation planning for businesses.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* Careers */}
      <section id="careers" className="careers-section py-5">
        <div className="container">

          <h2 className="text-center fw-bold mb-3">
            Careers at Nexota Technologies
          </h2>

          <p className="text-center text-muted mb-5">
            Join our growing team and build innovative solutions
            that make a difference. Explore our current openings.
          </p>

          <div className="row g-4">

            {/* React Developer */}
            <div className="col-md-6">
              <div className="career-card">
                <h4>⚛️ React.js Developer</h4>
                <p>
                  <strong>Experience:</strong> 0 - 2 Years
                </p>

                <p>
                  <strong>Skills:</strong> React.js, JavaScript,
                  HTML, CSS, Bootstrap, REST APIs
                </p>

                <p>
                  Build modern and responsive web applications
                  using React.js and latest frontend technologies.
                </p>

                <a
                  href="#contact"
                  className="btn btn-primary"
                >
                  Apply Now
                </a>
              </div>
            </div>

            {/* Android Developer */}
            <div className="col-md-6">
              <div className="career-card">
                <h4>📱 Android Developer</h4>

                <p>
                  <strong>Experience:</strong> 4 - 5 Years
                </p>

                <p>
                  <strong>Skills:</strong> Java, Kotlin,
                  Android Studio, Firebase
                </p>

                <p>
                  Develop high-performance Android applications
                  and deliver exceptional user experiences.
                </p>

                <a
                  href="#contact"
                  className="btn btn-primary"
                >
                  Apply Now
                </a>
              </div>
            </div>

            {/* Data Analyst */}
            <div className="col-md-6">
              <div className="career-card">
                <h4>📊 Data Analyst</h4>

                <p>
                  <strong>Experience:</strong> 0 - 2 Years
                </p>

                <p>
                  <strong>Skills:</strong> Excel, SQL,
                  Power BI, Python
                </p>

                <p>
                  Analyze business data, generate insights,
                  and support strategic decision-making.
                </p>

                <a
                  href="#contact"
                  className="btn btn-primary"
                >
                  Apply Now
                </a>
              </div>
            </div>

            {/* AI/ML Engineer */}
            <div className="col-md-6">
              <div className="career-card">
                <h4>🤖 AI / ML Engineer</h4>

                <p>
                  <strong>Experience:</strong> 1 - 3 Years
                </p>

                <p>
                  <strong>Skills:</strong> Python,
                  Machine Learning, TensorFlow, OpenAI APIs
                </p>

                <p>
                  Build intelligent applications,
                  automation tools, and AI-powered solutions.
                </p>

                <a
                  href="#contact"
                  className="btn btn-primary"
                >
                  Apply Now
                </a>
              </div>
            </div>

          </div>

          {/* Why Join Us */}
          <div className="mt-5">
            <h3 className="text-center mb-4">
              Why Join Nexota Technologies?
            </h3>

            <div className="row text-center">

              <div className="col-md-3">
                <div className="benefit-card">
                  <h1>🚀</h1>
                  <h5>Career Growth</h5>
                </div>
              </div>

              <div className="col-md-3">
                <div className="benefit-card">
                  <h1>💻</h1>
                  <h5>Latest Technologies</h5>
                </div>
              </div>

              <div className="col-md-3">
                <div className="benefit-card">
                  <h1>🎯</h1>
                  <h5>Learning Culture</h5>
                </div>
              </div>

              <div className="col-md-3">
                <div className="benefit-card">
                  <h1>🤝</h1>
                  <h5>Supportive Team</h5>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="contact py-5">
        <div className="container">
          <h2 className="text-center mb-4">
            Contact Us
          </h2>

          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Your Name"
              />

              <input
                type="email"
                className="form-control mb-3"
                placeholder="Your Email"
              />

              <textarea
                rows="5"
                className="form-control"
                placeholder="Your Message"
              ></textarea>

              <button className="btn btn-primary mt-3">
                Send Message
              </button>
            </div>

            <div className="col-md-6 mt-4 mt-md-0">
              <h4>Nexota Technologies</h4>

              <p>Pune, Maharashtra, India</p>

              <p>
                Email:
                contact@nexotatechnologies.com
              </p>

              <p>
                Phone:
                +91 9876543210
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="row">

            {/* Company Info */}
            <div className="col-md-4 mb-4">
              <h4>Nexota Technologies</h4>
              <p>
                We provide innovative software solutions,
                web development, mobile applications and
                cloud services to help businesses grow.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-2 mb-4">
              <h5>Quick Links</h5>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-md-3 mb-4">
              <h5>Services</h5>
              <ul className="footer-links">
                <li>Web Development</li>
                <li>Mobile Development</li>
                <li>UI/UX Design</li>
                <li>Cloud Solutions</li>
                <li>Software Testing</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-3 mb-4">
              <h5>Contact Us</h5>

              <p>
                <i className="bi bi-geo-alt-fill me-2"></i>
                Pune, Maharashtra, India
              </p>

              <p>
                <i className="bi bi-envelope-fill me-2"></i>
                contact@nexotatechnologies.com
              </p>

              <p>
                <i className="bi bi-telephone-fill me-2"></i>
                +91 8380039896
              </p>

              <div className="social-icons">
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>

                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>

                <a href="#">
                  <i className="bi bi-twitter-x"></i>
                </a>
              </div>
            </div>

          </div>

          <hr />

          <div className="text-center">
            <p className="mb-0">
              © 2026 Nexota Technologies |
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;