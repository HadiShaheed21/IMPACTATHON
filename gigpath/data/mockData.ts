// Mock user profile data
export const mockUser = {
  name: "Raj Kumar",
  currentRole: "Delivery Rider",
  currentIncome: 15000,
  workHours: 10,
  completedSkills: ["Basic Delivery", "App Navigation"],
  inProgressSkills: ["Route Optimization", "Customer Service"],
  skillProgress: {
    "Route Optimization": 75,
    "Customer Service": 40,
    "Time Management": 60,
  },
};

// Career paths data
export const careerPaths = {
  delivery: {
    title: "Delivery & Logistics",
    icon: "🛵",
    startingRoles: ["Delivery Rider", "Courier Associate"],
    skills: ["Route Optimization", "Customer Service", "Time Management", "Fleet Coordination"],
    targetRoles: [
      { role: "Senior Rider", income: "₹22,000" },
      { role: "Shift Lead", income: "₹30,000" },
      { role: "Zone Coordinator", income: "₹40,000" },
      { role: "Fleet Supervisor", income: "₹40,000+" },
    ],
    incomeGrowth: "₹15,000 → ₹40,000+",
  },
  warehouse: {
    title: "Warehouse & Operations",
    icon: "📦",
    startingRoles: ["Warehouse Associate", "Packing Helper"],
    skills: ["Inventory Management", "Quality Control", "Safety Protocols", "Team Coordination"],
    targetRoles: [
      { role: "Floor Lead", income: "₹20,000" },
      { role: "Ops Assistant", income: "₹25,000" },
      { role: "Shift Manager", income: "₹30,000" },
      { role: "Warehouse Supervisor", income: "₹35,000+" },
    ],
    incomeGrowth: "₹12,000 → ₹35,000+",
  },
  support: {
    title: "Customer Support",
    icon: "🎧",
    startingRoles: ["Support Associate", "Chat Support"],
    skills: ["Communication", "Problem Solving", "CRM Systems", "Escalation Handling"],
    targetRoles: [
      { role: "Team Coordinator", income: "₹22,000" },
      { role: "Quality Analyst", income: "₹28,000" },
      { role: "Team Lead", income: "₹32,000" },
      { role: "Support Supervisor", income: "₹38,000+" },
    ],
    incomeGrowth: "₹14,000 → ₹38,000+",
  },
  data: {
    title: "Data & Admin",
    icon: "⌨️",
    startingRoles: ["Data Entry", "Admin Assistant"],
    skills: ["Excel/Sheets Mastery", "Data Validation", "Report Generation", "Process Documentation"],
    targetRoles: [
      { role: "Data QA Specialist", income: "₹25,000" },
      { role: "Ops Support", income: "₹30,000" },
      { role: "MIS Executive", income: "₹38,000" },
      { role: "Operations Analyst", income: "₹45,000+" },
    ],
    incomeGrowth: "₹12,000 → ₹45,000+",
  },
};

// Career roadmap timeline data
export const careerRoadmap = {
  completed: {
    role: "Delivery Rider",
    income: "₹15,000",
    skills: ["Basic riding", "App usage"],
  },
  inProgress: {
    role: "Route Optimization",
    progress: 75,
    skills: ["Customer Service", "Problem Solving"],
  },
  next: {
    role: "Senior Rider",
    income: "₹22,000",
    skills: ["Fleet Mgmt", "Team Lead"],
  },
  future: {
    role: "Fleet Supervisor",
    income: "₹40,000",
    skills: ["Operations", "Strategy"],
  },
};

// Available roles data
export const availableRoles = [
  {
    id: 1,
    title: "Senior Delivery Rider",
    matchPercentage: 85,
    incomeRange: "₹20,000 - ₹25,000",
    location: "Your area",
    requiredSkills: [
      { name: "Route Optimization", completed: true },
      { name: "Customer Service", completed: true },
      { name: "Time Management", completed: false, progress: 60 },
    ],
  },
  {
    id: 2,
    title: "Zone Coordinator",
    matchPercentage: 65,
    incomeRange: "₹28,000 - ₹32,000",
    location: "Nearby areas",
    requiredSkills: [
      { name: "Route Optimization", completed: true },
      { name: "Fleet Coordination", completed: false, progress: 30 },
      { name: "Team Management", completed: false, progress: 20 },
    ],
  },
  {
    id: 3,
    title: "Fleet Assistant",
    matchPercentage: 70,
    incomeRange: "₹25,000 - ₹30,000",
    location: "Your area",
    requiredSkills: [
      { name: "Route Optimization", completed: true },
      { name: "Customer Service", completed: true },
      { name: "Fleet Coordination", completed: false, progress: 30 },
    ],
  },
  {
    id: 4,
    title: "Shift Lead",
    matchPercentage: 55,
    incomeRange: "₹30,000 - ₹35,000",
    location: "Multiple locations",
    requiredSkills: [
      { name: "Time Management", completed: false, progress: 60 },
      { name: "Team Management", completed: false, progress: 20 },
      { name: "Operations", completed: false, progress: 10 },
    ],
  },
];

// FAQ data
export const faqData = [
  {
    question: "Is this a course platform?",
    answer:
      "No. We're a career navigation system. We help you identify and build the specific skills needed for your next role, not generic courses.",
  },
  {
    question: "Do you guarantee jobs?",
    answer:
      "No. We provide skills, roadmaps, and connections to opportunities. Job outcomes depend on many factors including location, demand, and your effort.",
  },
  {
    question: "Do I need to quit my current work?",
    answer:
      "Absolutely not. GigPath is designed to fit around your working schedule. Practice during breaks, 15-30 minutes at a time.",
  },
  {
    question: "Is this tied to specific gig platforms?",
    answer:
      "No. Skills you build work across platforms and roles. We're platform-independent.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We believe skills should be accessible to everyone. Basic features are free, with premium options for advanced guidance and mentorship.",
  },
  {
    question: "What language is the content in?",
    answer: "Currently English and Hindi. More languages coming soon.",
  },
];
