import React, { useState } from 'react';
import styles from './LookerStyles.module.css'; 

function LookerPage() {
  const [showTranscript, setShowTranscript] = useState(false); // State for toggling transcript

  const toggleTranscript = () => {
    setShowTranscript(!showTranscript);
  };

  return (
    <>
      <main className={styles.mainContent}>
        <h2 className={styles.heading}>Looker Studio Visual</h2>

        <section className={styles.contentWrapper}>
          <iframe
            className={styles.lookerIframe}
            src="https://lookerstudio.google.com/embed/reporting/d1043b5e-4280-412d-b320-1d6d74965ee3/page/p_hkyt7g0xmd"
            title="Looker Studio Report"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </section>

        {/* Learn More button */}
        <button className={styles.transcriptButton} onClick={toggleTranscript}>
          {showTranscript ? 'Show Less' : 'Learn More'}
        </button>

        {showTranscript && (
          <div className={styles.transcript}>
            <p>
              Here's a more detailed explanation for the Looker Studio reports, explaining the key
              findings and metrics visualized in the report. You can refer to this
              for a deeper understanding of the data presented.
            </p>
            <p>
              (1) Dashboard Overview:
              This dashboard provides a high-level summary of key metrics, including subdomain records, exposed ports, HTTPX data, and identified vulnerabilities. Visualizations such as pie charts highlight trends in vulnerability types, exposed ports, HTTP response codes, and domain squatting techniques. Users can use this overview to quickly assess potential security risks across domains and prioritize further investigation.
            </p>
            <p>
              (2) Vulnerability Details:
              This visualization breaks down vulnerabilities by type, such as SSL, DNS, and HTTP issues, providing a comprehensive view of detected security risks. The accompanying table offers detailed records, categorizing vulnerabilities with associated service and metadata information. This figure helps users prioritize remediation efforts by focusing on the most frequently occurring and critical vulnerabilities.</p>
            <p>
              (3) Exposed Ports Breakdown:
              This figure reveals the distribution of exposed ports across analyzed domains and hostnames, with a focus on commonly exploited ports like 80 (HTTP) and 443 (HTTPS). A supporting table provides information about the domains, hostnames, IP addresses, and protocols associated with these open ports. Users can leverage this data to identify and secure vulnerable services exposed to the internet.</p>
            <p>
              (4) Domain Squatting Insights:
              This figure highlights domain squatting techniques, illustrating how attackers manipulate domain names through typosquatting, homographs, and other methods. Pie charts break down squatting types and affected domains, while tables provide detailed counts for each. Users can interpret this data to recognize common squatting patterns and prioritize the protection of frequently targeted domains.</p>
            <p>
              (5) Domain Response Codes Analysis:
              This visualization showcases the distribution of HTTP response codes across various domains, such as successful (200) or error responses (404, 403). A detailed table complements the chart by listing domains, hostnames, status codes, and the frequency of each response. This figure helps users understand how domains handle requests and identify domains with high error rates for potential troubleshooting.</p>
          </div>
        )}
      </main>
    </>
  );
}

export default LookerPage;
