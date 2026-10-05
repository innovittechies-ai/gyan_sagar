export interface Department {
  id: string;
  category: 'engineering' | 'pharmacy' | 'management';
  code: string;
  name: string;
  degree: string;
  duration: string;
  intake: number;
  accredited: boolean;
  description: string;
  keySpecializations: string[];
  labs: string[];
  careerProspects: string[];
  highlight: string;
}

export interface Metric {
  value: string;
  label: string;
  subtext: string;
  badge?: string;
}

export interface Recruiter {
  name: string;
  category: string;
  packageTier: string;
  logoText: string;
}

export interface CampusFacility {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export interface InstitutionalNotice {
  id: string;
  date: string;
  category: 'Admissions' | 'Examination' | 'Placement' | 'Academic';
  title: string;
  isUrgent?: boolean;
}

export const INSTITUTIONAL_METRICS: Metric[] = [
  {
    value: "65+ LPA",
    label: "Highest Global Package",
    subtext: "International & Super Dream Offers",
    badge: "Record Placement"
  },
  {
    value: "1500+",
    label: "Campus Placement Offers",
    subtext: "Achieved in 2024-2025 Academic Cycle",
    badge: "120+ Recruiters"
  },
  {
    value: "200+",
    label: "Ph.D. & Elite Faculty Strength",
    subtext: "Distinguished Scholars & Researchers",
    badge: "R&D Mentors"
  },
  {
    value: "2003",
    label: "Years of Academic Legacy",
    subtext: "Autonomous Excellence in Central India",
    badge: "NBA Accredited"
  }
];

export const DEPARTMENTS_DATA: Department[] = [
  {
    id: "cse",
    category: "engineering",
    code: "CSE",
    name: "Computer Science & Engineering",
    degree: "B.Tech (Autonomous)",
    duration: "4 Years",
    intake: 180,
    accredited: true,
    description: "Equipping students with deep algorithmic foundations, cloud computing architectures, distributed systems, and cutting-edge software engineering paradigms.",
    keySpecializations: ["Cloud & DevOps", "Full-Stack Web Architectures", "Algorithmic Engineering", "High Performance Computing"],
    labs: ["Advanced Programming Lab", "Open Source Software Lab", "Cloud Virtualization Center"],
    careerProspects: ["Software Development Engineer (SDE)", "Cloud Solutions Architect", "Systems Engineer", "Full Stack Developer"],
    highlight: "NBA Accredited Program with over 92% placement conversion rate."
  },
  {
    id: "ai-ml",
    category: "engineering",
    code: "CSE-AIML",
    name: "Artificial Intelligence & Machine Learning",
    degree: "B.Tech (Autonomous)",
    duration: "4 Years",
    intake: 120,
    accredited: true,
    description: "Pioneering curriculum in deep learning, neural networks, computer vision, natural language processing, and generative AI systems.",
    keySpecializations: ["Deep Neural Networks", "Computer Vision & Robotics", "Generative AI & LLMs", "Autonomous Systems"],
    labs: ["NVIDIA GPU AI Research Lab", "Computer Vision Studio", "Cognitive Computing Hub"],
    careerProspects: ["Machine Learning Engineer", "AI Research Scientist", "Data Intelligence Consultant", "Prompt Engineer"],
    highlight: "Dedicated GPU cluster for deep neural network research and capstone projects."
  },
  {
    id: "data-science",
    category: "engineering",
    code: "CSE-DS",
    name: "Data Science & Analytics",
    degree: "B.Tech (Autonomous)",
    duration: "4 Years",
    intake: 60,
    accredited: true,
    description: "Rigorous focus on statistical modeling, big data distributed ecosystems, predictive intelligence, and enterprise business intelligence.",
    keySpecializations: ["Big Data Analytics (Hadoop/Spark)", "Predictive Statistical Modeling", "Business Intelligence", "Data Engineering Pipelines"],
    labs: ["Big Data Analytics Lab", "Enterprise Data Warehouse Lab", "Statistical Simulation Studio"],
    careerProspects: ["Data Scientist", "Big Data Engineer", "Business Intelligence Lead", "Data Governance Analyst"],
    highlight: "Curriculum designed in advisory collaboration with enterprise analytics leaders."
  },
  {
    id: "iot-cyber",
    category: "engineering",
    code: "CSE-IOT",
    name: "IoT & Cyber Security (incl. Blockchain)",
    degree: "B.Tech (Autonomous)",
    duration: "4 Years",
    intake: 60,
    accredited: true,
    description: "Defending digital infrastructures through cryptography, penetration testing, smart edge sensors, industrial IoT protocols, and distributed ledgers.",
    keySpecializations: ["Ethical Hacking & Red Teaming", "IoT Embedded Sensors", "Cryptography & Blockchain", "Network Defense & Forensics"],
    labs: ["Cyber Security Cyber-Range", "Smart Embedded IoT Prototyping Lab", "Network Security Lab"],
    careerProspects: ["Information Security Analyst", "IoT Embedded Architect", "Penetration Tester", "Blockchain Developer"],
    highlight: "State-of-the-art simulated Cyber Range for real-world threat mitigation training."
  },
  {
    id: "ec",
    category: "engineering",
    code: "ECE",
    name: "Electronics & Communication Engineering",
    degree: "B.Tech (Autonomous)",
    duration: "4 Years",
    intake: 120,
    accredited: true,
    description: "Core emphasis on 5G/6G communication systems, VLSI microelectronics chip design, digital signal processing, and embedded firmware.",
    keySpecializations: ["VLSI Chip Design", "Embedded Firmware (ARM/RISC-V)", "Wireless & Satellite Telecom", "DSP & Image Processing"],
    labs: ["Cadence VLSI Design Lab", "RF & Microwave Testing Lab", "Embedded Systems Microcontroller Lab"],
    careerProspects: ["VLSI Design Engineer", "Firmware Engineer", "Telecom Network Architect", "Robotics Hardware Specialist"],
    highlight: "Hands-on chip synthesis using Cadence and Synopsys toolkits."
  },
  {
    id: "ex",
    category: "engineering",
    code: "EX",
    name: "Electrical & Electronics Engineering",
    degree: "B.Tech (Autonomous)",
    duration: "4 Years",
    intake: 60,
    accredited: true,
    description: "Focusing on electric vehicles (EV), renewable microgrids, power electronics drives, and industrial smart grid automation.",
    keySpecializations: ["Electric Vehicle Powertrain", "Solar & Wind Renewable Grids", "Power Electronics Drives", "PLC & SCADA Automation"],
    labs: ["Smart Grid Simulation Lab", "Electric Drives & Traction Lab", "Power Systems Protection Lab"],
    careerProspects: ["EV Powertrain Engineer", "Renewable Energy Specialist", "Power Systems Engineer", "Automation Engineer"],
    highlight: "EV technology research cell equipped with battery testbenches and dynamometer."
  },
  {
    id: "me",
    category: "engineering",
    code: "ME",
    name: "Mechanical Engineering",
    degree: "B.Tech (Autonomous)",
    duration: "4 Years",
    intake: 60,
    accredited: true,
    description: "Integrating additive manufacturing, CAD/CAM computational fluids, robotics automation, and thermal energy systems.",
    keySpecializations: ["Robotics & Mechatronics", "CAD/CAM (SolidWorks, ANSYS)", "Thermal & Fluid Engineering", "Additive 3D Manufacturing"],
    labs: ["Central CNC Machine Center", "Robotics & Automation Workcell", "Fluid Mechanics & Turbomachinery Lab"],
    careerProspects: ["Mechanical Design Engineer", "Robotics Integration Specialist", "Automotive R&D Engineer", "Production Lead"],
    highlight: "Active SAE Baja Racing team with national design competition awards."
  },
  {
    id: "civil",
    category: "engineering",
    code: "CE",
    name: "Civil Engineering",
    degree: "B.Tech (Autonomous)",
    duration: "4 Years",
    intake: 60,
    accredited: false,
    description: "Modern civil infrastructure planning, structural modeling with STAAD-Pro, environmental geotechnics, and GIS remote sensing.",
    keySpecializations: ["Structural Dynamics (BIM / STAAD)", "Geotechnical & Soil Mechanics", "Transportation & Highways", "Environmental Hydrology"],
    labs: ["Computer Aided Structural Lab", "Geotechnical Testing Lab", "Surveying & Total Station Lab"],
    careerProspects: ["Structural Design Consultant", "Project Planning Engineer", "GIS & Surveying Specialist", "Public Infrastructure Manager"],
    highlight: "Field training programs in smart highway construction and seismic-resistant design."
  },
  {
    id: "b-pharm",
    category: "pharmacy",
    code: "B.PHARM",
    name: "Bachelor of Pharmacy",
    degree: "B.Pharm (PCI Approved)",
    duration: "4 Years",
    intake: 100,
    accredited: true,
    description: "PCI approved comprehensive program training pharmaceutical scientists in pharmacology, drug synthesis, clinical formulation, and QA/QC.",
    keySpecializations: ["Pharmaceutical Chemistry", "Pharmacology & Toxicology", "Pharmaceutics & Formulation", "Pharmacognosy & Natural Drugs"],
    labs: ["Machine Room & Industrial Formulation Lab", "Pharmacology Animal Simulation Lab", "Quality Assurance Analytical Lab (HPLC)"],
    careerProspects: ["Formulation Research Scientist", "Regulatory Affairs Executive", "Clinical Trial Coordinator", "Industrial QA/QC Manager"],
    highlight: "Approved by Pharmacy Council of India (PCI) with modern pilot plant."
  },
  {
    id: "d-pharm",
    category: "pharmacy",
    code: "D.PHARM",
    name: "Diploma in Pharmacy",
    degree: "D.Pharm (PCI Approved)",
    duration: "2 Years",
    intake: 60,
    accredited: true,
    description: "Foundational professional diploma enabling licensed pharmacy practice, hospital dispensary management, and pharmaceutical distribution.",
    keySpecializations: ["Hospital & Clinical Pharmacy", "Drug Store Management", "Dispensing Pharmacy", "Pharmaceutical Jurisprudence"],
    labs: ["Dispensing Pharmacy Lab", "Biochemistry & Clinical Pathology Lab", "Human Anatomy Model Museum"],
    careerProspects: ["Registered Pharmacist", "Hospital Drug Dispenser", "Pharmaceutical Marketing Associate", "Retail Chain Manager"],
    highlight: "Immediate professional registration eligibility under the Pharmacy Act."
  },
  {
    id: "mba",
    category: "management",
    code: "MBA",
    name: "Master of Business Administration",
    degree: "MBA (Dual Specialization)",
    duration: "2 Years",
    intake: 120,
    accredited: true,
    description: "Premier management postgraduate program emphasizing case-study methodology, fintech analytics, digital marketing strategy, and corporate leadership.",
    keySpecializations: ["Financial Analytics & Banking", "Marketing & Growth Strategy", "Human Resource Development", "Operations & Supply Chain"],
    labs: ["Bloomberg & FinTech Simulation Lab", "Executive Boardroom Training Suite", "Digital Marketing Analytics Studio"],
    careerProspects: ["Management Consultant", "Investment & Financial Analyst", "Brand & Product Marketing Manager", "HR Business Partner"],
    highlight: "Dual specialization offering enabling cross-functional managerial versatility."
  },
  {
    id: "mca",
    category: "management",
    code: "MCA",
    name: "Master of Computer Applications",
    degree: "MCA (Autonomous)",
    duration: "2 Years",
    intake: 60,
    accredited: true,
    description: "Postgraduate computing mastery focusing on enterprise software architecture, full-stack microservices, cloud native engineering, and DevOps pipelines.",
    keySpecializations: ["Enterprise Java & Spring Cloud", "Cloud Native Microservices", "Mobile & Cross-Platform Systems", "Software Quality & CI/CD"],
    labs: ["Advanced Software Engineering Lab", "Mobile App Development Center", "Database Optimization Studio"],
    careerProspects: ["Senior Software Engineer", "DevOps Engineer", "Solutions Architect", "Technical Team Lead"],
    highlight: "Intensive 6-month industry internship integrated into curriculum."
  }
];

export const RECRUITERS_DATA: Recruiter[] = [
  { name: "Amazon Web Services", category: "Cloud & Tier-1", packageTier: "65+ LPA", logoText: "AWS" },
  { name: "Cisco Systems", category: "Networking & Cloud", packageTier: "24 LPA", logoText: "CISCO" },
  { name: "IBM India", category: "Enterprise Computing", packageTier: "18 LPA", logoText: "IBM" },
  { name: "Tata Consultancy Services", category: "Global IT Services", packageTier: "Digital / Ninja", logoText: "TCS" },
  { name: "Cognizant Technology", category: "Digital Engineering", packageTier: "GenC Elevate", logoText: "COGNIZANT" },
  { name: "Wipro Technologies", category: "Global Consulting", packageTier: "Turbo / Elite", logoText: "WIPRO" },
  { name: "Infosys Technologies", category: "Enterprise Tech", packageTier: "SP / DSE", logoText: "INFOSYS" },
  { name: "Persistent Systems", category: "Product Engineering", packageTier: "12 LPA", logoText: "PERSISTENT" },
  { name: "Reliance Jio Platforms", category: "Telecom & Cloud", packageTier: "10 LPA", logoText: "JIO" },
  { name: "Hexaware Technologies", category: "Automation & AI", packageTier: "8.5 LPA", logoText: "HEXAWARE" },
  { name: "Amdocs", category: "Communications Software", packageTier: "9 LPA", logoText: "AMDOCS" },
  { name: "Zensar Technologies", category: "Digital Solutions", packageTier: "7.5 LPA", logoText: "ZENSAR" }
];

export const INSTITUTIONAL_NOTICES: InstitutionalNotice[] = [
  {
    id: "n1",
    date: "Oct 2026",
    category: "Admissions",
    title: "Admissions 2026-2027: Online Registration & Counseling Portal Activated for B.Tech, B.Pharm & MBA.",
    isUrgent: true
  },
  {
    id: "n2",
    date: "Sep 2026",
    category: "Examination",
    title: "Autonomous Examination Cell: Timetable notification for Odd Semester Mid-Term & End-Term evaluations.",
    isUrgent: false
  },
  {
    id: "n3",
    date: "Sep 2026",
    category: "Placement",
    title: "Placement Milestone: 1500+ campus offers crossed; TCS, Amazon & Cisco conclude premier hiring phases.",
    isUrgent: true
  },
  {
    id: "n4",
    date: "Aug 2026",
    category: "Academic",
    title: "Research Grant: AICTE and MPCOST grant sanctioned for Autonomous Drone & Agricultural AI Research Lab.",
    isUrgent: false
  }
];

export const CAMPUS_FACILITIES = [
  {
    id: "fac-1",
    title: "Central Learning Resource Center",
    category: "Academic Infrastructure",
    description: "Over 85,000 volumes, international IEEE/Springer journals, digital DELNET access, and private scholar reading cubes.",
    stats: "85,000+ Books · 24/7 Digital Portal"
  },
  {
    id: "fac-2",
    title: "AI & Advanced Robotics Research Hub",
    category: "Innovation & Labs",
    description: "Equipped with 6-axis industrial robot arms, NVIDIA Tensor workstations, IoT testbenches, and drone flight zone.",
    stats: "NVIDIA Workstations · Industrial Arms"
  },
  {
    id: "fac-3",
    title: "Gyan Incubation & Innovation Foundation",
    category: "Startup Ecosystem",
    description: "Recognized MSME incubator nurturing student tech startups with prototype funding, IP patenting, and mentor desks.",
    stats: "24 Startups Incubated · Seed Support"
  },
  {
    id: "fac-4",
    title: "Auditorium & Cultural Amphitheatre",
    category: "Student Life & Events",
    description: "Air-conditioned 1,200-seat multi-tier acoustic auditorium host to national tech conclaves and Gyanotsav cultural festival.",
    stats: "1,200 Seating · Acoustic Sound"
  }
];
