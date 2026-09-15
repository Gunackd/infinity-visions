import { motion } from "framer-motion";
import { useState } from "react";
import projects from "../data/projects";
import PortfolioCard from "./PortfolioCard";

const categories = [
  "All",
  "Branding",
  "Graphic Design",
  "Social Media",
  "UI/UX",
  "Web",
  "Posters",
  "Video",
];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section className="portfolio" id="work">

      <div className="portfolio-heading">
        <p>SELECTED WORK / 01—08</p>

        <h2>
          VISIONS,
          <br />
          MADE VISIBLE.
        </h2>
      </div>

      <div className="portfolio-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category
                ? "filter-button active"
                : "filter-button"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <PortfolioCard
            key={project.id}
            project={project}
          />
        ))}
      </motion.div>

    </section>
  );
}

export default Portfolio;