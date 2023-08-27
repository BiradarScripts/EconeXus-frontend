import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";

function Selectmultidropdown({ formData, setFormData }) {
  const Interests = [
    "Nodejs",
    "Reactjs",
    "Angular",
    "Vuejs",
    "Expressjs",
    "MongoDB",
    "Mongoose",
    "Javascript",
    "Typescript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Material UI",
    "Tailwind CSS",
    "SASS",
    "LESS",
    "Jquery",
    "PHP",
    "Laravel",
    "Codeigniter",
    "Wordpress",
    "Python",
    "Django",
    "Flask",
    "Java",
    "Spring Boot",
    "C",
    "C++",
    "C#",
    "ASP.NET",
    "ASP.NET Core",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "SQLite",
    "Oracle",
    "NoSQL",
    "MongoDB",
    "Cassandra",
    "Redis",
    "Firebase",
    "GraphQL",
    "Apollo",
    "REST",
    "SOAP",
    "API",
    "Microservices",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Google Cloud",
    "Heroku",
    "Netlify",
    "Vercel",
    "Git",
    "Github",
    "Gitlab",
    "Bitbucket",
    "Jira",
    "Trello",
    "Slack",
    "Notion",
    "Figma",
    "Adobe XD",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "Adobe Lightroom",
    "Sketch",
    "Invision",
    "Zeplin",
    "Framer",
    "Blender",
    "Unity",
    "Maya",
    "3DS Max",
    "AutoCAD",
    "Solidworks",
    "Photoshop",
    "Illustrator",
    "Premiere Pro",
    "After Effects",
    "Lightroom",
    "Final Cut Pro",
    "Sketch",
    "Invision",
    "Zeplin",
    "sklearn",
    "Maths",
    "Statistics",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Data Analysis",
    "Data Visualization",
    "Big Data",
    "Artificial Intelligence",
    "Natural Language Processing",
    "Computer Vision",
    "Business Analytics",
    "Tableau",
    "Power BI",
    "Excel",
    "Powerpoint",
    "Google Sheets",
    "Google Slides",
    "Google Data Studio",
    "R",
    "Python",
    "SQL",
    "Java",
    "C++",
    "C",
    "MATLAB",
    "Octave",
    "Scala",
    "Perl",
    "Julia",
    "Haskell",
    "Go",
    "Ruby",
    "React Native",
    "Flutter",
    "Ionic",
    "Xamarin",
    "Swift",
    "Kotlin",
    "Objective C",
    "Dart",
    "Scikit-learn",
    "TensorFlow",
    "Keras",
    "PyTorch",
    "Pandas",
    "Numpy",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Jupyter Notebook",
    "Data Analysis",
    "Data Visualization",
    "Statistical Analysis",
    "Regression Analysis",
    "Clustering",
    "Classification",
    "Natural Language Processing",
    "Computer Vision",
    "Feature Engineering",
    "Ensemble Learning",
    "Neural Networks",
    "Deep Learning",
    "Reinforcement Learning",
    "Big Data Analytics",
    "Data Preprocessing",
    "Model Evaluation",
    "Blockchain",
    "Ethereum",
    "Bitcoin",
    "Smart Contracts",
    "Decentralized Applications (DApps)",
    "Solidity",
    "Web3.js",
    "Truffle",
    "Ganache",
    "Crypto",
    "Tokenization",
    "Consensus Algorithms",
    "IPFS",
    "Staking",
    "DeFi (Decentralized Finance)",
    "NFTs (Non-Fungible Tokens)",
    "Privacy and Security in Blockchain",
    "Blockchain Scalability",
    "Oracles",
    "Interoperability",
    "Cross-Chain Solutions",
    "Blockchain Governance",
    "DAOs (Decentralized Autonomous Organizations)",
    "Blockchain Development",
    "Blockchain Architecture",
    "Blockchain Use Cases",
    "Blockchain Trends",
    'Video Editing',
  'Adobe Premiere Pro',
  'Final Cut Pro',
  'DaVinci Resolve',
  'Avid Media Composer',
  'Adobe After Effects',
  'Motion Graphics',
  'Color Correction',
  'Audio Editing',
  'Video Transitions',
  'Video Effects',
  'Keyframe Animation',
  'Green Screen Editing',
  'Video Compression',
  'Video Formats',
  'Video Rendering',
  'Video Production',
  'Storyboarding',
  'Cinematography',
  'Visual Effects',
  '3D Animation',
  'Video Editing Software',
  'Video Editing Techniques',
  'Video Editing Tips and Tricks',
  'Video Editing Workflows',
  'Video Editing Styles',
  'Video Editing Trends',
  'Video Editing Plugins',
  'Video Editing Hardware',
  'Video Editing for Social Media',
  'Video Editing for YouTube',
  'Video Editing for Film',
  'Video Editing for Advertising',
  'Video Editing Career',
  'Video Editing Portfolio',
  'Video Editing Resources',
  'Gaming',
  'Game Development',
  'Game Design',
  'Game Engines',
  'Unity',
  'Unreal Engine',
  'Godot Engine',
  'CryEngine',
  'Game Programming',
  'Game Graphics',
  '3D Modeling',
  'Texturing',
  'Character Design',
  'Level Design',
  'Game Mechanics',
  'Physics in Games',
  'AI in Games',
  'Multiplayer Games',
  'Online Gaming',
  'Game Networking',
  'Game Sound Design',
  'Music in Games',
  'Storytelling in Games',
  'Game Testing',
  'Quality Assurance (QA)',
  'Game Monetization',
  'In-App Purchases',
  'Microtransactions',
  'Free-to-Play Games',
  'Virtual Reality (VR) Games',
  'Augmented Reality (AR) Games',
  'Mobile Games',
  'Console Games',
  'PC Games',
  'Indie Games',
  'Game Marketing',
  'E-sports',
  'Game Streaming',
  'Gaming Communities',
  'Gaming Trends',
  'Gaming Industry',
  'Game Conventions and Events',
  'Game Reviews',
  'Game Walkthroughs',
  'Game Modding',
  'Game Engines',
  'Game Development Tools',
  'Game Development Tutorials',
  'Ethical Hacking',
  'Network Security',
  'Vulnerability Assessment',
  'Penetration Testing',
  'Web Application Security',
  'Wireless Security',
  'Password Cracking',
  'Exploitation Frameworks',
  'Cryptography',
  'Firewalls',
  'Intrusion Detection and Prevention',
  'Honeypots',
  'Incident Response',
  'Malware Analysis',
  'Forensics',
  'Security Information and Event Management (SIEM)',
  'Social Engineering',
  'Phishing',
  'Physical Security',
  'Security Policies and Procedures',
  'Secure Coding Practices',
  'Security Tools and Utilities',
  'Capture The Flag (CTF) Challenges',
  'Bug Bounty Programs',
  'White Hat Hacking',
  'Red Team and Blue Team',
  'Cybersecurity Certifications',
  'Cybersecurity Laws and Regulations',
  'Ethical Hacking Communities',
  'Hacking News and Trends',
  'Cybersecurity Conferences',
  'Cybersecurity Podcasts',
  'Cybersecurity Books',
  'Online Cybersecurity Courses',
  'Photography',
  'Painting',
  'Drawing',
  'Music',
  'Playing an Instrument',
  'Singing',
  'Dancing',
  'Cooking',
  'Baking',
  'Gardening',
  'Reading',
  'Writing',
  'Traveling',
  'Hiking',
  'Camping',
  'Yoga',
  'Meditation',
  'Fitness',
  'Running',
  'Cycling',
  'Swimming',
  'Gaming (as a Hobby)',
  'Collecting',
  'DIY Projects',
  'Crafting',
  'Woodworking',
  'Sculpting',
  'Knitting',
  'Embroidery',
  'Chess',
  'Board Games',
  'Puzzles',
  'Film Watching',
  'Documentary Watching',
  'Cooking Shows',
  'Learning New Languages',
  'Volunteering',
  'Community Service',
  'Online Communities',
  'Podcast Listening',
  'Blogging',
  'Fashion',
  'Interior Design',
  'Cars and Auto Mechanics',
  'Pets and Animal Care',
  'Home Improvement',
  'Astronomy',
  'Collecting Memorabilia',
  'Hiking',
  'Geocaching',
  'Skydiving',
  'Paragliding',
  'Scuba Diving',
  'Skydiving',
  'Rock Climbing',
  'Skiing/Snowboarding',
  'Wine Tasting',
  'Cooking Classes',
  'Writing Poetry',
  'Movie Critiquing',
  'Book Club',
  'Gardening',
  'Antique Hunting',
  'Astrology',
  'Magic Tricks',
  'Calligraphy',
  'Chess',
  'Cycling',
  'Extreme Sports',
  'Hiking',
  'Traveling',
  'Yoga',
  'Virtual Reality (VR) Experiences',
  'Escape Rooms',
  'Fishing',
  'Archery',
  'Board Games',
  'Cooking Competitions',
  'Karaoke',
  'Stand-Up Comedy',
  'Fashion Design',
  'Graphic Design',
  'Pottery',
  'Sketching',
  'Origami',
  'Quilting',
  'Sewing',
  'Videography',
  'Trading',
  'Investing',
  ];

  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleOnSelect = (selectedList) => {
    setSelectedInterests(selectedList);
    setFormData({ ...formData, interests: selectedInterests });
  };

  const handleOnRemove = (selectedList) => {
    setSelectedInterests(selectedList);
    setFormData({ ...formData, interests: selectedInterests });
  };

  return (
    <React.Fragment>
      <Container className="content">
        <div className="row">
          <div className="col">
            <h3 className="mt-1" >
              Select your Interests from the dropdown menu
            </h3>
            <form className="row " method="post">
              <div className="columns">
                <label className="form-label"></label>
                <div className="text-dark">
                  <Multiselect
                    isObject={false}
                    options={Interests}
                    selectedValues={selectedInterests}
                    onSelect={handleOnSelect}
                    onRemove={handleOnRemove}
                    showCheckbox
                  />
                </div>
              </div>
            </form>
          </div>
          
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Selectmultidropdown;