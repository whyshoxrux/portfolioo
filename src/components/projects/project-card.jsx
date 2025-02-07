import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const ProjectCard = ({ project }) => {
  const {theme} = useSelector(state => state.data)

  return (
    <div className="projects-item">
      <div className={`projects-item__inner ${theme == 'light' && 'shadow'}`}>
        <a href={project.href} target='_blank' className="projects-item__inner-photo rounded">
          <img src={project.src} alt={project.title} className="w-100" />
        </a>
        <div className="projects-item__inner-info">
          <p className="text-secondary text">{project.date}</p>
          <a href={project.href} className={`fs-5 text-decoration-none ${theme == 'dark' ? 'text-white' : 'text-black'}`}>{project.title}</a>
          <p className="text-secondary">{project.description}</p>
        </div>
        <div className='projects-item__inner-link'>
          <a className={`btn ${theme == 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`} rel="noreferrer" href={project.href} target="_blank"><i className='fa fa-arrow-up-right-from-square'></i></a>
          {project.github && 
            <a className="btn text-white border" style={{background: "#0D1117"}} rel="noreferrer" href={project.github} target="_blank">
              <i className='fab fa-github'></i>
            </a>
          }
        </div>
      </div> 
    </div>
  );
};
ProjectCard.propTypes = {
  project: PropTypes.shape({
    href: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
