import React from "react";
import RexSkullIcon from "../assets/images/rex_skull.svg?react";
import ScrollIcon from "../assets/images/scroll.svg?react";
import DinoStepsIcon from "../assets/images/dino_steps.svg?react";
import office from "../assets/images/office.jpg";

const goalsCards = [
  {
    icon: <RexSkullIcon />,
    title: "Discover Prehistoric Life",
    text: "Explore fascinating articles and join our community of dinosaur enthusiasts.",
  },
  {
    icon: <ScrollIcon />,
    title: "Uncover Ancient Secrets",
    text: "Stay informed with the latest findings and be part of our curious community.",
  },
  {
    icon: <DinoStepsIcon />,
    title: "Explore the Mesozoic",
    text: "Dive into diverse topics and connect with fellow explorers of Earth’s ancient past.",
  },
];

export const AboutUsPage = () => {
  return (
    <div>
      <div className="about-us-header-background">
        <div className="wrapper">
          <h1 className="about-us-header">About Us</h1>
        </div>
      </div>
      <section className="wrapper flex about-us-our-team-container">
        <div
          data-aos="fade-right"
          className="about-us-our-team-image-container"
        >
          <img src={office} alt="" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          className="about-us-our-team-text-container"
        >
          <h2>Our Team</h2>
          <p>
            Our passionate team of researchers, writers, and dinosaur
            enthusiasts is dedicated to bringing you captivating insights into
            prehistoric life. Through careful study and endless curiosity, we
            uncover fascinating stories and remarkable details about the age of
            dinosaurs. Each article is crafted with care, blending scientific
            accuracy and an engaging narrative to spark your imagination. We
            collaborate closely, pooling our diverse knowledge to build a
            resource that both educates and inspires. From exploring the
            mysteries of massive sauropods to revealing the tiniest fossilized
            traces, our mission is to make ancient history come alive. We
            believe learning should be an adventure, and we’re here to guide you
            through the wonders of Earth's distant past. Join us as we continue
            to explore, question, and share the incredible legacy of the
            Mesozoic era with the world.
          </p>
        </div>
      </section>
      <section className="wrapper">
        <h2 className="about-us-goals-header">
          Our team is dedicated to sharing insightful articles and discoveries
          about dinosaurs.
        </h2>
        <div className="about-us-goals-container">
          {goalsCards.map((goal, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 500}`}
              key={goal.title}
              className="about-us-goal-card"
            >
              <span className="about-us-goal-card-icon">{goal.icon}</span>
              <h3 className="about-us-goal-card-header">{goal.title}</h3>
              <p className="about-us-goal-card-text">{goal.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
