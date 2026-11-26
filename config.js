// ─────────────────────────────────────────────────────────────────────────────
// config.js — Edit this file to personalize your academic homepage.
// No HTML/CSS knowledge required.
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  name:       "Lu ZHANG",
  initials:   "YN",
  role:       "Postdoctoral Fellow",
  university: "The Hong Kong University of Science and Technology",
  email:      "lzhangdq@connect.ust.hk",
  bio:        "Hi! I am a Postdoctoral Fellow at The Hong Kong University of Science and Technology (HKUST), where I work at the intersection of microfluidics, molecular diagnostics, and single-cell analysis. I received my PhD in Bioengineering from HKUST under the supervision of Prof. Shuhuai Yao, and my bachelor's degree from Sun Yat-sen University.",
  photo:      "",   // optional: path to your photo, e.g. "assets/photo.jpg"

  stats: [
    { value: "5+",  label: "Publications" },
    { value: "50+", label: "Citations" },
    { value: "5+",   label: "Projects" },
  ],

  links: {
    scholar: "https://scholar.google.com/citations?user=gW84-YcAAAAJ",
    linkedin:  "https://github.com/",
    twitter: "",          // leave empty to hide
    cv:      "assets/cv.pdf",
  },

  publications: [
    {
      year:     2025,
      title:    "Your Paper Title Here",
      authors:  "Your Name, Co-Author 1, Co-Author 2",
      venue:    "Conference / Journal Name 2025",
      links:    { pdf: "#", code: "#" },
      abstract: "A brief summary of your paper's contributions and findings.",
    },
    {
      year:     2024,
      title:    "Another Paper Title",
      authors:  "Your Name, Co-Author 1",
      venue:    "Conference / Journal Name 2024",
      links:    { pdf: "#" },
      abstract: "",
    },
  ],

  projects: [
    {
      name: "Project Name",
      desc: "Brief description of your project and its impact.",
      tags: ["Python", "PyTorch"],
      url:  "#",
    },
  ],

  news: [
    { date: "2025.01", badge: "New",   text: "Paper accepted at Conference 2025!" },
    { date: "2024.09", badge: "Award", text: "Received fellowship / award." },
  ],

  education: [
    { period: "2020–Present", degree: "Ph.D. in Bioengineering", institution: "The Hong Kong University of Science and Technology" },
    { period: "2018–2022",    degree: "B.S. in Biomedical Engineering",  institution: "Sun Yat-sen University" },
  ],

  experience: [
    { period: "Summer 2024", role: "Research Intern", institution: "Research Lab / Company" },
  ],
};
