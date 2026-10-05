export interface Skill {
  name: string;
  description?: string;
}

export interface SkillCategory {
  label: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "AI & Machine Learning",
    skills: [
      { name: "Python", description: "Primary language for data analysis & AI/ML pipelines" },
      { name: "Machine Learning", description: "Supervised & unsupervised learning, classification, regression" },
      { name: "Deep Learning", description: "Neural networks, comparative modeling & training" },
      { name: "Scikit-Learn", description: "Feature selection, model evaluation, accuracy & F1 metrics" },
      { name: "Pandas & NumPy", description: "Data wrangling, matrix ops, pattern exploration" },
      { name: "Data Visualization", description: "Matplotlib, Seaborn, exploratory analysis" },
      { name: "Model Evaluation", description: "Precision, recall, ROC-AUC, confusion matrices" },
    ],
  },
  {
    label: "Web Development",
    skills: [
      { name: "React", description: "Modern component-based reactive frontends" },
      { name: "Next.js", description: "Full-stack React with App Router, SSR & Turbopack" },
      { name: "TypeScript", description: "Strict type safety and robust software design" },
      { name: "JavaScript (ES6+)", description: "Core web language & async event-driven programming" },
      { name: "Tailwind CSS", description: "Utility-first modern styling & design systems" },
      { name: "HTML5 / CSS3", description: "Semantic markup, responsive layouts & CSS animations" },
      { name: "REST APIs", description: "Client-server data fetching & JSON integration" },
    ],
  },
  {
    label: "Languages & Core CS",
    skills: [
      { name: "Python", description: "Advanced scripting, OOP, data processing" },
      { name: "Java (NPTEL Elite)", description: "IIT Kharagpur Elite certification (86% score)" },
      { name: "Data Structures & Algorithms", description: "Algorithmic problem solving & complexity analysis" },
      { name: "Object-Oriented Design", description: "Clean code principles, encapsulation, modularity" },
      { name: "Database Fundamentals", description: "Relational models, SQL & persistent stores" },
    ],
  },
  {
    label: "Tools & Research",
    skills: [
      { name: "Git & GitHub", description: "Version control, branching, open-source workflow" },
      { name: "Jupyter Notebooks", description: "Interactive exploratory data science & model validation" },
      { name: "VS Code", description: "Primary development environment & tooling" },
      { name: "Research Methodology", description: "Published paper at ICISE 2023 on Heart Disease Prediction" },
      { name: "Technical Writing", description: "Clear communication of complex technical ideas" },
    ],
  },
];
