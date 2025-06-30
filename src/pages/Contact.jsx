

import './Contacts.css';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-info">
        <Mail className="contact-icon" />
        <a className="contact-link" href="mailto:gopikanath@gmail.com">gopikanath@gmail.com</a>
      </p>
      <p className="contact-info">
        <Linkedin className="contact-icon" />
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/gopika-nath-8240372a0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gopika Nath
        </a>
      </p>
      <p className="contact-info">
        <Github className="contact-icon" />
        <a
          className="contact-link"
          href="https://github.com/Gopikanathnk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gopikanathnk
        </a>
      </p>
    </div>
  );
};

export default Contact;
