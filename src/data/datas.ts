// 네비 링크들

interface NavLink {
  id: number; // Define id as a string
  name: string;
  hash: string;
}

export const navLinks = [
  { id: 1, name: "Home", hash: "main" },
  { id: 2, name: "About", hash: "about" },
  { id: 3, name: "Skills", hash: "skills" },
  { id: 4, name: "Works", hash: "Works" },
  { id: 5, name: "Contact", hash: "contact" },
];

export const skills = [
  { id: 1, name: "HTML", gage: 100 },
  { id: 2, name: "CSS", gage: 100 },
  { id: 3, name: "SCSS", gage: 100 },
  { id: 4, name: "JavaScript", gage: 100 },
  { id: 5, name: "React", gage: 100 },
  { id: 6, name: "TypeScript", gage: 100 },
];

export const skillsData = [
  {
    name: "HTML",
    level: 100,
    color: "#4682A9",
  },
  {
    name: "CSS",
    level: 100,
    color: "#4682A9",
  },
  {
    name: "SCSS",
    level: 90,
    color: "#4682A9",
  },
  {
    name: "JavaScript",
    level: 90,
    color: "#4682A9",
  },
  {
    name: "React",
    level: 80,
    color: "#4682A9",
  },
  {
    name: "TypeScript",
    level: 70,
    color: "#4682A9",
  },
];
