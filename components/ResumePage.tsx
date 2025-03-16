import React from 'react';
import styles from '../styles/ResumePage.module.css';

const ResumePage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Priti Bhunia | Resume';
  }, []);

  return (
    <div className={styles.ResumePage} id="ResumePage">
      <div className="row container">
        <div className={`${styles.header} col-12 col-lg-3`}>
          <h1 className={styles.title}>Priti Bhunia</h1>
          <img className={styles.image} src="priti.jpg" alt="Priti Bhunia" />
          <a className={styles.email} href="mailto:pritibhunia@gmail.com">pritibhunia@gmail.com</a>
          <div className={styles.githubcv}>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">CV</a>
            <a href="https://github.com/pritibhunia" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/pritibhunia" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
            <a href="https://www.facebook.com/bhuniapriti" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
            <a href="https://x.com/pritibhunia" target="_blank" rel="noopener noreferrer"><i className="bi bi-x"></i></a>
            <a href="https://pritibhunia.medium.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-medium"></i></a>
          </div>
        </div>
        <div className={`${styles.body} col-12 col-lg-9`}>
          <h2 className="greeting" id="hello">Hello!!!</h2>
          <p><em>I am a Software Engineer working with Siemens Healthineers as a Werkstudentin - Design & Development based in Forchheim, Bavaria, Deutschland</em></p>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="mailto:pritibhunia@gmail.com">Email</a></li>
            <li className="breadcrumb-item"><a href="https://pritibhunia.medium.com/">Website</a></li>
            <li className="breadcrumb-item"><a href="https://www.linkedin.com/in/pritibhunia/">LinkedIn</a></li>
            <li className="breadcrumb-item"><a href="https://github.com/pritibhunia/">GitHub</a></li>
            <li className="breadcrumb-item"><a href="https://twitter.com/pritibhunia/">Twitter</a></li>
          </ol>
          <h2 id="work-experience">Work Experience</h2>
          <p>
            <strong>Werkstudentin | Senior Engineer - Design & Development</strong> @ <a href="https://www.corporate.siemens-healthineers.com/">Siemens Healthineers</a>
            <em> (May 2021 - Present)</em>
          </p>
          <ul>
            <li>Developing a digital imaging healthcare platform, end-to-end pipeline creation for infrastructure and application deployment, with 95% accuracy.</li>
            <li>Designed and implemented key features including Edge platform management, GitOps integration, proxy setup, monitoring services integration, Secret Management, rke2 integration, and automation.</li>
            <li>Developed and automated test cases using XUnit, BDD, TDD, Integration testing, and Goss to ensure system reliability.</li>
            <li>Collaborated with product owners to convert business requirements into technical solutions.</li>
            <li>Implemented Kubernetes deployment with event-driven auto-scaling using KEDA, optimizing resource utilization.</li>
            <li>Integrated Reloader to automatically restart Kubernetes resources when secrets are updated in KeyVault.</li>
            <li>Developing a tool to interact with hybrid Kubernetes clusters to improve operational efficiency.</li>
            <li><strong><em>Tech Stack: </em></strong> C#, .NET, Kubernetes, rke2, Azure, DevOps, Ansible, PowerShell, GitOps, Git, Edge Computing, MinIO Storage, RabbitMQ, SpecFlow (Gherkin)
              <br />
              <br />
            </li>
          </ul>

          <p>
            <strong>DevOps Engineer</strong> @ <a href="https://www.ey.com/en_in/careers/global-delivery-services">EY</a>
            <em> (Sep 2019 - Apr 2021)</em>
          </p>

          <ul>
            <li>Provisioned easily manageable cloud infrastructures using multiple Azure IaaS and PaaS services for multiple projects in Azure utilizing Infrastructure as Code(IaC) tools like Ansible, Azure DevOps depending on the application requirements.</li>
            <li>Automated end-to-end containerized applications deployment using CI/CD pipelines on Azure DevOps with 95% efficiency.</li>
            <li>Automated the new client on-boarding process for the applications which saved around one week time and workforce requirements with 90% accuracy.</li>
            <li>Designed and implemented Monitoring solutions for the applications</li>
            <li><strong><em>Tech Stack: </em></strong> Azure, Azure DevOps, PowerShell, YAML, ARM template, Kubernetes, Kusto Query Language, SQL, Java.
              <br />
              <br />
            </li>
          </ul>

          <p>
            <strong>Cloud Engineer </strong> @
            <a href="https://www.cognizant.com/"> Cognizant</a>
            <em> (Jul 2016 - Sep 2019)</em>
          </p>
          <ul>
            <li>Worked with multiple clients from healthcare and insurance domain where my responsibilities were requirement gathering, decision making, automating deployment, infrastructure migration etc.</li>
            <li>Automated the API configuration flow in Azure API Management, designed the developer portal for customers, designed the monitoring solution.</li>
            <li>Automated report generation process to revoke the manual effort.</li>
            <li>Provisioned easily manageable cloud infrastructures in Azure using ARM template single click deployment utilizing various IaaS and PaaS services focusing on high-availability, fault tolerance, disaster recovery and auto-scaling.</li>
            <li><strong><em>Tech Stack: </em></strong>Azure, PowerShell, ARM template, Kusto Query Language, SQL, XML, C#.
              <br />
              <br />
            </li>
          </ul>

          <p>
            <strong>Academic Projects </strong> @
            <a href="https://www.th-koeln.de/"> TH Köln</a>
          </p>
          <ul>
            <li><strong>Cloud-Based Wind Speed Analysis:</strong> Designed and deployed a wind speed analysis platform in AWS using Terraform, with real-time visualization in Streamlit and Grafana.</li>
            <li><strong>Data-Driven Test Simulation Replacement:</strong> Developed regression models (CatBoost, Neural Networks) to replace costly electromechanical system simulations.</li>
            <li><strong>Power Cable Health Assessment:</strong> Applied supervised, unsupervised, and semi-supervised learning for classification of cable health.</li>
          </ul>


          <h2 id="interests">Interests</h2>
          <p><strong>Technical</strong></p>
          I like to learn new technology stack and spend time on doing research on new topics. Currently I am exploring Python with Machine Learning.
            <br />
            <br />
          <p><strong>Personal</strong></p>
          <li>I like to spend my leisure by reading novels (I can read anything and everything), listening to music or sometimes dancing.</li>
          <li>Going to Modern Jazz or Modern Dance class is my new way of life.</li>
          <li>I feel alive when I am travelling and exploring the new places, new culture and specially meeting new people. </li>
          <li>I believe in building and maintaining small habits that lead to success. My day starts with a workout and ends with cooking.
            <br />
            <br />
          </li>

          <h2 id="education">Education</h2>
          <p>
            <strong>Master of Engineering </strong>
            in Automation and IT
            <a href="https://www.th-koeln.de/"> Technische Hochschule Köln</a>
            <span> - Köln, Deutschland (2023 - Present)</span>
          </p>

          <p>
            <strong>Bachelor of Technology </strong>
            in Electronics and Communication Engineering
            <a href="https://www.stcet.org/"> St. Thomas’ College of Engineering & Technology</a>
            <span> - Kolkata, India (2012 - 2016)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;