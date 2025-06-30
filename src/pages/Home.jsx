import './Home.css';
import profileImage from '../assets/profile.jpg';
import jsLogo from '../assets/js.png';
import reactLogo from '../assets/react.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to My Portfolio</h1>
      <p className="home-description">
        Hi, I'm Gopika Nath NK – a passionate developer and designer.
      </p>

      <div className="profile-image-wrapper">
        <img
          src={profileImage}
          alt="Profile"
          className="profile-image"
        />
      </div>

      <section className="introduction">
        <h2>About Me</h2>
        <p>
          I am a full-stack developer with expertise in HTML, CSS, JS, React, etc. I love creating beautiful and functional web applications.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill-item">
            <img src={jsLogo} alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <img src={reactLogo} alt="React" />
            <p>React</p>
          </div>
          <div className="skill-item">
            <img src={htmlLogo} alt="HTML5" />
            <p>HTML5</p>
          </div>
          <div className="skill-item">
            <img src={cssLogo} alt="CSS" />
            <p>CSS</p>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <button className="cta-button" onClick={() => window.location.href = '/contact'}>
          Contact Me
        </button>
        <button className="cta-button" onClick={() => window.location.href = '/projects'}>
          View Projects
        </button>
      </section>
    </div>
  );
};

export default Home;
