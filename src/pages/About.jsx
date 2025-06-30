import './About.css';
import resume from '../assets/resume.pdf';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-text">
        I am a dedicated frontend developer with a strong commitment to crafting elegant, user-centric web experiences. 
        With expertise in HTML, CSS, JavaScript, and React, I specialize in building responsive and accessible websites 
        that combine aesthetic appeal with seamless functionality. I continuously seek to expand my skill set and stay 
        abreast of the latest industry trends to deliver innovative solutions that meet client and user needs.
      </p>
      <a
        href={resume}
        className="resume-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
    </div>
  );
};

export default About;
