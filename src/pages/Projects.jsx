import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <ul className="project-list">
        <li className="project-item">
          <span className="project-name">ToDo App</span> – React 
        </li>
        <li className="project-item">
          <span className="project-name">Meeting Minutes Generator</span> – Audio to structured PDF
        </li>
        <li className="project-item">
          <span className="project-name">Job Portal</span> – Full MERN stack app
        </li>
      </ul>
    </div>
  );
};

export default Projects;
