export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: "education" | "research" | "project" | "certification" | "work";
}

export const timeline: TimelineItem[] = [
  {
    year: "2026",
    title: "NPTEL Elite Certification in Java",
    description:
      "Earned NPTEL Elite Certification in Programming in Java from IIT Kharagpur with a top score of 86%.",
    type: "certification",
  },
  {
    year: "2023",
    title: "ICISE Research Paper — Heart Disease Prediction",
    description:
      "Presented and published research paper on Machine Learning and Deep Learning Techniques in Heart Disease Prediction at the International Conference on Integrative Science and Engineering (ICISE 2023).",
    type: "research",
  },
  {
    year: "2023",
    title: "Deepened AI/ML Engineering Focus",
    description:
      "Expanded hands-on focus on machine learning algorithms, deep neural networks, model evaluation, Scikit-learn, and data preprocessing pipelines.",
    type: "education",
  },
  {
    year: "2022",
    title: "B.Tech CSE Undergraduate — Swami Vivekananda University",
    description:
      "Enrolled in Computer Science Engineering at Swami Vivekananda University. Built strong foundation in data structures, algorithms, databases, and web technology.",
    type: "education",
  },
  {
    year: "2021",
    title: "First Steps into Programming & Problem Solving",
    description:
      "Initiated coding journey with Python and object-oriented programming. Built foundational scripts and problem-solving workflows.",
    type: "education",
  },
];

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
  score?: string;
  link?: string;
}

export const certifications: Certification[] = [
  {
    title: "Programming in Java",
    issuer: "NPTEL — IIT Kharagpur",
    year: "2026",
    score: "86% (Elite)",
    link: "#",
  },
  {
    title: "IBM Professional Certification(s)",
    issuer: "IBM",
    year: "2023",
    score: "Verified",
    link: "#",
  },
];
