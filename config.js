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
  bio:        "Hi! I am a Postdoctoral Fellow at The Hong Kong University of Science and Technology (HKUST), where I work at the intersection of microfluidics, molecular diagnostics, and single-cell analysis. I received my PhD in Bioengineering from HKUST under the supervision of Prof. Shuhuai Yao, and my bachelor's degree from Sun Yat-sen University.<br><br><b>Research Interests:</b> Microfluidics, Lab-on-a-chip, Point-of-care Diagnostics, Biosensors and bioelectronics, Single-cell Analysis.",
  photo:      "",   // optional: path to your photo, e.g. "assets/photo.jpg"

  stats: [
    { value: " 5+ ",  label: "Publications" },
    { value: " 50+ ", label: "Citations" },
    { value: " 5+ ",   label: "Projects" },
  ],

  links: {
    scholar: "https://scholar.google.com/citations?user=gW84-YcAAAAJ",
    linkedin: "https://www.linkedin.com/in/lu-zhang-2bb465279?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    twitter: "",          // leave empty to hide
    cv:      "assets/cv.pdf",
  },

  publications: [
    {
      year:     2026,
      title:    "An all-in-one microfluidic system via data-driven design for on-site genotyping of genetically modified foods",
      authors:  "L Zhang, JQ Cui, Z Wu, S Yao",
      venue:    "Biosensors and Bioelectronics",
      links:    {link : "https://www.sciencedirect.com/science/article/pii/S0956566326006068" },
      abstract: "A brief summary of your paper's contributions and findings.",
    },
    {
      year:     2026,
      title:    "A floss-based platform for native gingival crevicular fluid analysis enables noninvasive systemic and oral health monitoring",
      authors:  "Y Yan, A Veronica, C Wang, Y Guo, A He, M Gu, L Zhang, G Han, JQ Cui, SV Chandwaney, J Cho, X Wang, SY Pau, SJ Lee, K Deng, S Yao, HYY Nyein",
      venue:    "Science Advances",
      links:    {link : "https://www.science.org/doi/abs/10.1126/sciadv.aeg8698?referrer=https%3A%2F%2Fscholar.google.com%2F" },
      abstract: "A brief summary of your paper's contributions and findings.",
    },
    {
      year:     2025,
      title:    "A gravity-driven microfluidic metering system for automation of multiplexed bioassays",
      authors:  "L Zhang, JQ Cui, S Yao",
      venue:    "Lab on a Chip",
      links:    { link : "https://pubs.rsc.org/lc/article/25/2/175/853196/A-gravity-driven-microfluidic-metering-system-for" },
      abstract: "A brief summary of your paper's contributions and findings.",
    },
    {
      year:     2025,
      title:    "High-throughput monoclonal antibody screening from immunized rabbits via droplet microfluidics",
      authors:  "JQ Cui, R Song, W Song, O Li, X Yuan, H Zhou, L Zhang, S Yao",
      venue:    "Lab on a Chip",
      links:    { link : "https://pubs.rsc.org/lc/article/25/14/3482/895288/High-throughput-monoclonal-antibody-screening-from" },
      abstract: "A brief summary of your paper's contributions and findings.",
    },
    {
      year:     2024,
      title:    "Concurrently probing the mechanical and electrical characteristics of living cells via an integrated microdevice",
      authors:  "JQ Cui, Y Tian, Z Wu, L Zhang, WC Cho, S Yao, Y Lin",
      venue:    "Nano Letters",
      links:    { link : "https://pubs.acs.org/nalefd/article/24/45/14522/149721" },
      abstract: "A brief summary of your paper's contributions and findings.",
    },
    {
      year:     2022,
      title:    "Fish capsules: a system for high‐throughput screening of combinatorial drugs",
      authors:  "M Tang, X Duan, A Yang, S He, Y Zhou, Y Liu, L Zhang, X Luo, P Shi, H Li, X Lin",
      venue:    "Advanced Science",
      links:    { link : "https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/advs.202104449" },
      abstract: "A brief summary of your paper's contributions and findings.",
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
    { date: "2026.05", badge: "Award", text: "Received HKUST RedBird Academic Excellence Award." },
    { date: "2025.07", badge: "Award", text: "Received HKUST RedBird Academic Excellence Award." },
    { date: "2024.06", badge: "Award", text: "Received HKUST RedBird Academic Excellence Award." },
  ],

  education: [
    { period: "2020–Present", degree: "Ph.D. in Bioengineering", institution: "The Hong Kong University of Science and Technology" },
    { period: "2018–2022",    degree: "B.S. in Biomedical Engineering",  institution: "Sun Yat-sen University" },
  ],

  experience: [
    { period: "Summer 2024", role: "Research Intern", institution: "Research Lab / Company" },
  ],
};
