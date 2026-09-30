import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your brand, goals, audience and the idea behind your project.",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "We explore creative directions and develop ideas that fit your vision.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We transform the selected concept into a polished and memorable visual experience.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "For digital projects, we bring the design to life using modern web technologies.",
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "We refine the final result, make sure everything works smoothly and deliver the project.",
  },
];

function Process() {
  return (
    <section className="process" id="process">

      <div className="process-header">
        <p>PROCESS / HOW WE WORK</p>

        <h2>
          FROM IDEA
          <br />
          TO IMPACT.
        </h2>
      </div>

      <div className="process-list">

        {processSteps.map((step, index) => (
          <motion.div
            className="process-step"
            key={step.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            whileHover={{ x: 12 }}
          >

            <span className="process-number">
              {step.number}
            </span>

            <div className="process-content">
              <h3>{step.title}</h3>

              <p>
                {step.description}
              </p>
            </div>

            <span className="process-arrow">
              ↗
            </span>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Process;