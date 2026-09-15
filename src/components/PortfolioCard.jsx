import { motion } from "framer-motion";

function PortfolioCard({ project }) {
  return (
    <motion.article
      className="portfolio-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <div className="portfolio-image">
        <div className="portfolio-placeholder">
          {project.title}
        </div>
      </div>

      <div className="portfolio-info">
        <div>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>

        <span>{project.year}</span>
      </div>
    </motion.article>
  );
}

export default PortfolioCard;