export interface Project {
  id: number;
  number: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github?: string;
  demo?: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "Heart Disease Prediction",
    description: "A comparative study using ML & DL models to predict heart disease with high accuracy.",
    longDescription:
      "Research project presented at ICISE 2023. Explored various machine learning and deep learning techniques for heart disease prediction. Implemented data preprocessing, feature selection, model training, and performance evaluation using accuracy, precision, recall, and F1-score metrics.",
    tags: ["Python", "Scikit-learn", "TensorFlow", "Data Analysis", "Research"],
    github: "https://github.com/souvikpal19/",
    category: "AI / ML",
  },
  {
    id: 2,
    number: "02",
    title: "Data Analysis Dashboard",
    description: "Interactive data exploration tool for analyzing and visualizing complex datasets.",
    longDescription:
      "Built a comprehensive data analysis dashboard using Python and modern data science libraries. Includes data cleaning, exploratory analysis, interactive visualizations, and statistical summaries.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    github: "https://github.com/souvikpal19/",
    category: "Data",
  },
  {
    id: 3,
    number: "03",
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    longDescription:
      "This very portfolio — built with modern web technologies including Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion for smooth animations and micro-interactions.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/souvikpal19/",
    demo: "#",
    category: "Web",
  },
  {
    id: 4,
    number: "04",
    title: "ML Model Experiments",
    description: "Collection of machine learning experiments exploring classification, regression, and clustering.",
    longDescription:
      "A series of machine learning experiments covering supervised and unsupervised learning. Implemented and compared various algorithms on real-world datasets to understand model behavior and performance trade-offs.",
    tags: ["Python", "Scikit-learn", "NumPy", "Pandas", "ML"],
    github: "https://github.com/souvikpal19/",
    category: "AI / ML",
  },
];
