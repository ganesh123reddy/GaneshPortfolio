import React from "react";
import "./Footer.css"; // Make sure you create a Footer.css file for styling
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <footer className="footer">
      <span className="footer-text">Giridhara Ganesh Talla © 2023</span>
      <a
        href="https://www.linkedin.com/in/ganesh-talla"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Replace with your LinkedIn icon */}
        <FaLinkedin /> LinkedIn
      </a>
      <a
        href="https://github.com/ganeshred"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Replace with your GitHub icon */}
        <FaGithub /> GitHub
      </a>
      <a href="mailto:giridharaganesh.ub@gmail.com" className="footer-link">
        {/* Replace with your Email icon */}
        <SiGmail /> Gmail
      </a>
      <a
        href="https://drive.google.com/file/d/18TJtV8FNppV7DnsVL8YUUjaJDvnNL9N-/"
        className="footer-link"
        download="Ganesh_resume.pdf"
      >
        {/* Replace with your Resume icon */}
        <FaFileDownload /> Resume
      </a>
    </footer>
  );
}

export default Footer;

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import "./Footer.css"; // Make sure to create a corresponding CSS file for styling

// const Footer = () => {
//   return (
//     <footer className="footer text-light d-flex justify-content-between align-items-center px-4 py-3">
//       <span className="footer-text">Giridhara Ganesh Reddy © 2023</span>
//       <div className="footer-icons">
//         <a href="https://www.linkedin.com" className="text-light me-3">
//           <FontAwesomeIcon icon={faLinkedin} />
//           <span className="ms-2">LinkedIn</span>
//         </a>
//         <a href="https://www.github.com" className="text-light me-3">
//           <FontAwesomeIcon icon={faGithub} />
//           <span className="ms-2">GitHub</span>
//         </a>
//         <a href="mailto:your-email@gmail.com" className="text-light me-3">
//           <FontAwesomeIcon icon={faEnvelope} />
//           <span className="ms-2">Gmail</span>
//         </a>
//         {/* Add your Resume link here */}
//         <a href="/resume" className="text-light">
//           {/* Add an icon for the resume if available */}
//           <span className="ms-2">Resume</span>
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
