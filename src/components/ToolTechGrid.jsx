import React from 'react';
import ToolTechCard from './ToolTechCard';
import styles from './ToolTechGridStyles.module.css';
import gcs from '../assets/images/googlecloudservice.png';
import gcr from '../assets/images/googlecloudrun.png';
import python from '../assets/images/python.png';
import github from '../assets/images/github.png';
import gbq from '../assets/images/googlebigquery.jpeg';
import looker from '../assets/images/lookerstudio.jpeg';
import owasp from '../assets/images/owasp.png';
import node from '../assets/images/nodejs.png';
import docker from '../assets/images/docker.png';
import nmap from '../assets/images/nmap.png';
import chronicle from '../assets/images/googlecloudservice.png';
import reactVite from '../assets/images/react.png';

// Define an array of tool data
const toolTechArray = [
  {
    name: 'Google Cloud Service',
    description:
      'Google Cloud Service will hold a python script that updates and invokes the Google Cloud Run container. This service will act as the entry point to the entire pipeline.',
    imageUrl: gcs,
    link: 'https://cloud.google.com/?hl=en',
  },
  {
    name: 'Google Cloud Run',
    description:
      'Google Cloud Run will spawn container instances to run different tools, with each instance configured by a Python script and a customized Dockerfile.',
    imageUrl: gcr,
    link: 'https://cloud.google.com/run/docs',
  },
  {
    name: 'Python',
    description:
      'Python will be used to parse the results from the various security-related tools. The results from the tools will be transformed into a .csv file for integration with Google’s BigQuery.',
    imageUrl: python,
    link: 'https://docs.python.org/3/',
  },
  {
    name: 'GitHub',
    description:
      'GitHub will store the code, documentation, and configuration files as they are created and updated.',
    imageUrl: github,
    link: 'https://github.com/',
  },
  {
    name: 'Google Big Query',
    description:
      'Google’s BigQuery Storage will be utilized to aggregate any data gathered from the other tools.',
    imageUrl: gbq,
    link: 'https://cloud.google.com/bigquery?hl=en',
  },
  {
    name: 'Looker Studio',
    description:
      'The results are then visualized in a user-friendly dashboard using advanced visualization techniques.',
    imageUrl: looker,
    link: 'https://support.google.com/looker-studio/answer/6283323?hl=en',
  },
  {
    name: 'OWASP AMASS',
    description:
      'An open-source tool for in-depth asset discovery, mapping the attack surface by finding subdomains, IPs, and other related information.',
    imageUrl: owasp,
    link: 'https://owasp.org/www-project-amass/',
  },
  {
    name: 'Node.JS',
    description:
      'Node.js is selected for building real-time services and APIs due to its event-driven, non-blocking I/O model.',
    imageUrl: node,
    link: 'https://nodejs.org/en/about',
  },
  {
    name: 'Docker',
    description:
      'Using Docker ensures consistent, portable environments by containerizing applications with all dependencies.',
    imageUrl: docker,
    link: 'https://docs.docker.com/get-started/docker-overview/',
  },
  {
    name: 'N-MAP',
    description:
      'Using Nmap enables efficient network mapping and security auditing by identifying open ports, services, and vulnerabilities.',
    imageUrl: nmap,
    link: 'https://nmap.org/',
  },
  {
    name: 'Google Chronicle',
    description:
      'Google’s Chronicle SIEM will be utilized to turn unstructured data into structured data.',
    imageUrl: chronicle,
    link: 'https://cloud.google.com/chronicle/docs/overview',
  },
  {
    name: 'React + Vite',
    description:
      'These web development frameworks were used to speed up web development tasks and present our methodology in an organized fashion.',
    imageUrl: reactVite,
    link: 'https://vite.dev/guide/',
  },
];

function ToolTechGrid() {
  return (
    <div className={styles.toolTechGrid}>
      {toolTechArray.map((tool, index) => (
        <ToolTechCard
          key={index}
          name={tool.name}
          description={tool.description}
          imageUrl={tool.imageUrl}
          link={tool.link}
        />
      ))}
    </div>
  );
}

export default ToolTechGrid;
