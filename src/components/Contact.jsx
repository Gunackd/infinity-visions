
import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    brief: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);

    console.log("Project enquiry:", formData);
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-heading">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          CONTACT / START SOMETHING NEW
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          HAVE AN IDEA?
          <br />
          <span>LET'S MAKE IT REAL.</span>
        </motion.h2>

        <p className="contact-intro">
          Have a project in mind? Tell us a little about it.
          Let's create something worth remembering.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-details">
          <p className="contact-small-label">HAVE A PROJECT IN MIND?</p>

          <h3>Let's talk.</h3>

          <p>
            From a new brand identity to a complete digital
            experience, we're ready to hear your ideas.
          </p>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="contact-social"
          >
            Connect on Instagram ↗
          </a>

          <div className="contact-decoration" aria-hidden="true">
            ∞
          </div>
        </div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {submitted ? (
            <div className="form-success" role="status">
              <span>✦</span>
              <h3>Thanks for reaching out!</h3>
              <p>
                Your form was validated in this demo.
                Connect a form service to receive enquiries.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="form-reset"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <>
              <div className="form-row">
                <label>
                  Your name *
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Email address *
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Service you're interested in *
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose a service</option>
                    <option value="Branding">Logo & Brand Identity</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Social Media">Social Media Design</option>
                    <option value="UI/UX">UI/UX Design</option>
                    <option value="Website">Website Design</option>
                    <option value="Frontend Development">
                      Frontend Development
                    </option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Posters">Posters & Marketing</option>
                    <option value="Other">Other / Multiple Services</option>
                  </select>
                </label>

                <label>
                  Estimated budget
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select a budget (optional)</option>
                    <option value="Under ₹5,000">Under ₹5,000</option>
                    <option value="₹5,000–₹15,000">₹5,000–₹15,000</option>
                    <option value="₹15,000–₹50,000">₹15,000–₹50,000</option>
                    <option value="₹50,000+">₹50,000+</option>
                    <option value="Not decided">Not decided yet</option>
                  </select>
                </label>
              </div>

              <label className="brief-label">
                Tell us about your project *
                <textarea
                  name="brief"
                  placeholder="What's the idea, goal, or problem you want to solve?"
                  rows="5"
                  value={formData.brief}
                  onChange={handleChange}
                  required
                />
              </label>

              <button type="submit" className="contact-submit">
                Send Project Enquiry <span>↗</span>
              </button>

              <p className="form-note">
                * Required fields
              </p>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
