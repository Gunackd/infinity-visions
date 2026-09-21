import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Graphic Design",
    description:
      "Creative visual solutions for campaigns, marketing materials and digital communication.",
    symbol: "✦",
  },
  {
    number: "02",
    title: "Logo & Brand Identity",
    description:
      "Distinctive identities that help brands become recognizable and memorable.",
    symbol: "∞",
  },
  {
    number: "03",
    title: "Social Media Design",
    description:
      "Scroll-stopping social content designed to communicate your brand effectively.",
    symbol: "◈",
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Clean and engaging digital interfaces designed around real users and goals.",
    symbol: "⌁",
  },
  {
    number: "05",
    title: "Website Design",
    description:
      "Modern responsive website experiences that combine visual design and usability.",
    symbol: "◫",
  },
  {
    number: "06",
    title: "Frontend Development",
    description:
      "Fast, responsive and interactive websites built with modern frontend technologies.",
    symbol: "</>",
  },
  {
    number: "07",
    title: "Video Editing",
    description:
      "Engaging video content crafted for social media, promotions and digital campaigns.",
    symbol: "▶",
  },
  {
    number: "08",
    title: "Posters & Marketing",
    description:
      "High-impact promotional visuals designed to attract attention and communicate quickly.",
    symbol: "✳",
  },
];

function Services() {
  return (
    <section className="services" id="services">

      <div className="services-header">
        <p>SERVICES / WHAT WE DO</p>

        <h2>
          IDEAS INTO
          <br />
          IMPACT.
        </h2>
      </div>

      <div className="services-list">

        {services.map((service) => (
          <motion.div
            key={service.number}
            className="service-item"
            whileHover="hover"
          >

            <div className="service-number">
              {service.number}
            </div>

            <div className="service-main">

              <h3>{service.title}</h3>

              <motion.p
                className="service-description"
                variants={{
                  hover: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial={{
                  opacity: 0.5,
                  y: 5,
                }}
              >
                {service.description}
              </motion.p>

            </div>

            <motion.div
              className="service-symbol"
              variants={{
                hover: {
                  scale: 1.15,
                  rotate: 8,
                },
              }}
              transition={{
                duration: 0.25,
              }}
            >
              {service.symbol}
            </motion.div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Services;