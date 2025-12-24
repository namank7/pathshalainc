import './App.css'

function App() {
  return (
    <div className="page-wrapper">
      <div className="bg-pattern"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon">प</div>
          <div className="logo-text">Pathshala<span>Inc</span></div>
        </div>
        <ul className="nav-links">
          <li><a href="#programs">Programs</a></li>
          <li><a href="#features">Why Us</a></li>
          <li><a href="#testimonials">Success Stories</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <button className="nav-cta">Enroll Now</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Transforming Education Since 2015</span>
          <h1>
            Unlock Your <span className="highlight">Potential</span> Through Transformative Learning
          </h1>
          <p className="hero-description">
            Experience world-class education that bridges traditional wisdom with modern excellence. 
            Join thousands of learners who've transformed their careers and lives with Pathshala Inc.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              Explore Programs →
            </button>
            <button className="btn-secondary">Watch Story</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">25K+</div>
              <div className="stat-label">Students Enrolled</div>
            </div>
            <div className="stat">
              <div className="stat-number">150+</div>
              <div className="stat-label">Expert Mentors</div>
            </div>
            <div className="stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-image-container">
            <div className="hero-main-card">
              <div className="card-header">
                <div className="card-avatar">📚</div>
                <div className="card-info">
                  <h4>Your Learning Journey</h4>
                  <p>3 courses in progress</p>
                </div>
              </div>
              <div className="card-content">
                <div className="progress-item">
                  <div className="progress-label">
                    <span>Business Analytics</span>
                    <span>85%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill sage" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-label">
                    <span>Digital Marketing</span>
                    <span>62%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill gold" style={{width: '62%'}}></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-label">
                    <span>Leadership Skills</span>
                    <span>40%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill terracotta" style={{width: '40%'}}></div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <span className="course-tag">Certificate Ready</span>
                <span className="course-tag">Live Classes</span>
              </div>
            </div>
            
            <div className="floating-card floating-card-1">
              <div className="floating-icon green">✓</div>
              <div>
                <div className="floating-text">Course Completed!</div>
                <div className="floating-subtext">Data Science 101</div>
              </div>
            </div>
            
            <div className="floating-card floating-card-2">
              <div className="floating-icon gold">🏆</div>
              <div>
                <div className="floating-text">New Achievement</div>
                <div className="floating-subtext">Top 5% of learners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="section-header">
          <span className="section-badge">Why Choose Us</span>
          <h2 className="section-title">Education Reimagined for the Modern World</h2>
          <p className="section-description">
            We combine ancient learning philosophies with cutting-edge technology to deliver 
            an unparalleled educational experience.
          </p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon terracotta">🎯</div>
            <h3>Personalized Learning Paths</h3>
            <p>AI-powered curriculum that adapts to your pace, style, and goals. Every learner's journey is unique.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon sage">👨‍🏫</div>
            <h3>World-Class Mentors</h3>
            <p>Learn from industry leaders and academic experts who bring real-world experience to every lesson.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon gold">📜</div>
            <h3>Recognized Certifications</h3>
            <p>Earn credentials valued by top employers worldwide. Our certificates open doors to new opportunities.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon navy">🤝</div>
            <h3>Community & Network</h3>
            <p>Join a global community of ambitious learners. Collaborate, network, and grow together.</p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs" id="programs">
        <div className="section-header">
          <span className="section-badge">Our Programs</span>
          <h2 className="section-title">Curated Programs for Every Aspiration</h2>
          <p className="section-description">
            From foundational courses to advanced specializations, find the perfect program 
            to accelerate your growth.
          </p>
        </div>
        
        <div className="programs-grid">
          <div className="program-card">
            <div className="program-image">💼</div>
            <div className="program-content">
              <span className="program-category">Business</span>
              <h3>Executive MBA Program</h3>
              <p>Master business strategy, leadership, and management with our comprehensive executive program.</p>
              <div className="program-meta">
                <span className="program-duration">⏱ 18 months</span>
                <span className="program-price">$4,999</span>
              </div>
            </div>
          </div>
          
          <div className="program-card">
            <div className="program-image" style={{background: 'linear-gradient(135deg, #8fa589, #c9a962)'}}>💻</div>
            <div className="program-content">
              <span className="program-category">Technology</span>
              <h3>Full Stack Development</h3>
              <p>Build complete web applications from scratch. Master both frontend and backend technologies.</p>
              <div className="program-meta">
                <span className="program-duration">⏱ 6 months</span>
                <span className="program-price">$2,499</span>
              </div>
            </div>
          </div>
          
          <div className="program-card">
            <div className="program-image" style={{background: 'linear-gradient(135deg, #2d3a4a, #c17f59)'}}>📊</div>
            <div className="program-content">
              <span className="program-category">Data Science</span>
              <h3>Data Analytics Mastery</h3>
              <p>Transform raw data into actionable insights. Learn Python, SQL, and visualization tools.</p>
              <div className="program-meta">
                <span className="program-duration">⏱ 8 months</span>
                <span className="program-price">$3,299</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <div className="section-header">
          <span className="section-badge">Success Stories</span>
          <h2 className="section-title">Hear From Our Graduates</h2>
          <p className="section-description">
            Real stories from real people who transformed their careers with Pathshala Inc.
          </p>
        </div>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "Pathshala Inc transformed my career completely. The mentorship I received was invaluable. 
              Within 3 months of completing my program, I landed my dream job at a Fortune 500 company."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">PR</div>
              <div className="author-info">
                <h4>Priya Raghavan</h4>
                <p>Senior Data Analyst, Microsoft</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "The flexibility of learning at my own pace while getting world-class education was exactly 
              what I needed. The community support made all the difference in my journey."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">AK</div>
              <div className="author-info">
                <h4>Amit Kumar</h4>
                <p>Product Manager, Google</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "As a working professional, I thought further education was impossible. Pathshala Inc 
              proved me wrong. Their programs are designed for real life, not just academics."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">SM</div>
              <div className="author-info">
                <h4>Sarah Mitchell</h4>
                <p>Marketing Director, Spotify</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-container">
          <h2>Begin Your Transformation Today</h2>
          <p>Join 25,000+ learners who've already started their journey to success. Your future self will thank you.</p>
          <button className="btn-primary">Start Learning Now →</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">प</div>
              <div className="logo-text">Pathshala<span>Inc</span></div>
            </div>
            <p>Empowering minds, transforming futures. We believe in education that creates lasting impact.</p>
            <div className="social-links">
              <a href="#" className="social-link">𝕏</a>
              <a href="#" className="social-link">in</a>
              <a href="#" className="social-link">▶</a>
              <a href="#" className="social-link">📸</a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Programs</h4>
            <ul>
              <li><a href="#">Business & MBA</a></li>
              <li><a href="#">Technology</a></li>
              <li><a href="#">Data Science</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Marketing</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Scholarships</a></li>
              <li><a href="#">Corporate Training</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copy">© 2025 Pathshala Inc. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
