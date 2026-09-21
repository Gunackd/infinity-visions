import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Creative-first thinking",
    text: "We start with ideas, not templates, creating visuals that give brands their own personality.",
  },
  {
    number: "02",
    title: "Purpose-driven design",
    text: "Every visual decision has a purpose — to communicate clearly, connect with people and create impact.",
  },
  {
    number: "03",
    title: "Modern digital execution",
    text: "We combine creative design with modern digital technologies to create experiences that work.",
  },
  {
    number: "04",
    title: "Attention to detail",
    text: "From typography and spacing to the smallest visual element, we care about every detail.",
  },
];

function WhyUs() {
  return (
    <section className="why-us">

      <div className="why-us-heading">
        <p>WHY INFINITY VISIONS</p>

        <h2>
          DESIGN THAT
          <br />
          GETS NOTICED.
        </h2>
      </div>

      <div className="principles">

        {principles.map((principle) => (
          <motion.div
            className="principle"
            key={principle.number}
            whileHover={{ x: 10 }}
            transition={{ duration: 0.25 }}
          >
            <span className="principle-number">
              {principle.number}
            </span>

            <div className="principle-content">
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </div>

            <span className="principle-arrow">↗</span>
          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default WhyUs;