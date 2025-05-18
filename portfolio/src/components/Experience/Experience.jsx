import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

// Skill images imports
import htmlImage from "../../assets/skills/html.png";
import cssImage from "../../assets/skills/css.png";
import reactImage from "../../assets/skills/react.png";
import nodeImage from "../../assets/skills/node.png";
import graphqlImage from "../../assets/skills/graphql.png";
import mongodbImage from "../../assets/skills/mongodb.png";
import figmaImage from "../../assets/skills/figma.png";

// History images imports
import salesforceLogo from "../../assets/history/Salesforce.png";
import wiproLogo from "../../assets/history/Wipro.png";
import ciscoLogo from "../../assets/history/Cisco.png";
import technohackLogo from "../../assets/history/Technohack.png";


const skillImages = {
  HTML: htmlImage,
  CSS: cssImage,
  React: reactImage,
  Node: nodeImage,
  GraphQL: graphqlImage,
  MongoDB: mongodbImage,
  Figma: figmaImage,
};

const historyImages = {
  Salesforce: salesforceLogo,
  Wipro: wiproLogo,
   Cisco: ciscoLogo,
 Technohack: technohackLogo,
};

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* Skills Section */}
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={skillImages[skill.title]} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        {/* History Section */}
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={historyImages[historyItem.organisation]}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, idx) => (
                    <li key={idx}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
