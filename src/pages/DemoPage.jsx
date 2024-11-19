import React, { useState } from 'react';
import ToolTechGrid from '../components/ToolTechGrid';
import styles from './DemoStyles.module.css';

function DemoPage() {
  const [isTranscriptVisible, setIsTranscriptVisible] = useState(false);

  const toggleTranscript = () => {
    setIsTranscriptVisible(prevState => !prevState);
  };

  return (
    <>
      <main className={styles.demoMain}>
        <h2 className={styles.demoHeading}>Demo Video</h2>
        <section className={styles.demoContent}>
          <iframe
            className={styles.demoVideo}
            src="https://www.youtube.com/embed/avSOdXtCtQ4" // Replace with your video link
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <article className={styles.demoText}>
            <h3 className={styles.videolink}><a href="https://www.youtube.com/watch?v=avSOdXtCtQ4">Breakdown Video</a></h3>
            <p>
              This demo highlights the key features of our project, demonstrating its functionality and value.
              Watch the video to gain insight into how our solution can address specific challenges effectively.
            </p>
          </article>
        </section>

        {/* Dropdown Button for Transcript */}
        <div className={styles.transcriptContainer}>
          <button
            className={styles.toggleButton}
            onClick={toggleTranscript}
          >
            {isTranscriptVisible ? 'Hide Transcript' : 'Show Transcript'}
          </button>
          {isTranscriptVisible && (
            <div className={styles.transcriptContent}>
              <h4>Transcript</h4>
              <p>“In today's Tech driven World, businesses must have digital environments to thrive. These environments enable companies to store and process data, interact with customers, and perform critical operations online. However, configuring these digital environments is a complex task- due to the numerous interconnected components and systems that must work seamlessly together. Misconfigurations in digital environments can create vulnerabilities that bad actors can exploit to gain unauthorized access to systems. These vulnerabilities can lead to data breaches, financial losses, and damage to a company's reputation. The more vulnerabilities present the higher the cost associated with protecting the data and maintaining a secure environment. this creates a significant financial burden for businesses, especially if they lack the resources to continuously Monitor and fix these issues. Our attack surface management tool is designed to Scan Digital environments comp apprehensively. By identifying potential risks and vulnerabilities, it generates detailed reports that provide actionable insights. These reports help businesses understand where their digital environment is most at risk and what steps they can take to mitigate these risks. our solution leverages a Google Cloud native platform which integrates a variety of Security based tools these tools are invoked to analyze the attack surface of the targeted digital environment, providing a robust and scalable solution for businesses of all sizes. The cloud platform ensures that our tool can manage large volumes of data and perform complex analysis quickly and efficiently. The data collected from the scan is processed using a hybrid Linux and python pipeline. This pipeline ensures that the information is transformed into an easily digestible format. The results are then visualized in a user-friendly dashboard using Advanced visualization techniques. This dashboard provides an overview of the security posture of the digital environment, highlighting the most critical issues that need attention. Our tool captures and analyzes vulnerabilities in digital environments, providing businesses with a clear picture of their security posture. We create visual representations that highlight the most critical issues, making it easier for decision makers to prioritize and address these vulnerabilities. By improving their BitSight scores through the actionable insights provided by our tool, businesses can reduce the cost associated with protecting sensitive data. This Improvement and security posture can lead to significant reductions in insurance premium, potentially up to 50%, provided the discovered vulnerabilities are addressed.”</p>
            </div>
          )}
        </div>

        {/* Tools and Technology Section */}
        <section className={styles.toolsSection}>
          <h3 className={styles.toolsHeading}>Tools and Technology</h3>
          <ToolTechGrid />
        </section>
      </main>
    </>
  );
}

export default DemoPage;
