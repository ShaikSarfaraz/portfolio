import { FaHtml5, FaCss3Alt, FaReact, FaAngular, FaVuejs, FaNodeJs, FaPython, FaJava, FaPhp, FaSwift, FaGitAlt, FaAws, FaDocker, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiNuxtdotjs, SiTypescript, SiTailwindcss, SiMysql, SiPostgresql, SiFirebase, SiDjango, SiKubernetes, SiFastapi } from "react-icons/si";

const skillsMap: Record<string, JSX.Element> = {
  html: <FaHtml5 size={40} color="#E44D26" />,
  css: <FaCss3Alt size={40} color="#264DE4" />,
  javascript: <FaReact size={40} color="#F7DF1E" />,
  "next js": <SiNextdotjs size={40} color="black" />,
  "nuxt js": <SiNuxtdotjs size={40} color="green" />,
  react: <FaReact size={40} color="#61DAFB" />,
  typescript: <SiTypescript size={40} color="#007ACC" />,
  angular: <FaAngular size={40} color="#DD0031" />,
  vue: <FaVuejs size={40} color="#4FC08D" />,
  nodejs: <FaNodeJs size={40} color="green" />,
  tailwind: <SiTailwindcss size={40} color="#38B2AC" />,
  mysql: <SiMysql size={40} color="#4479A1" />,
  postgresql: <SiPostgresql size={40} color="#336791" />,
  firebase: <SiFirebase size={40} color="#FFCA28" />,
  django: <SiDjango size={40} color="green" />,
  python: <FaPython size={40} color="#3776AB" />,
  java: <FaJava size={40} color="#007396" />,
  php: <FaPhp size={40} color="#777BB4" />,
  swift: <FaSwift size={40} color="orange" />,
  git: <FaGitAlt size={40} color="#F05032" />,
  aws: <FaAws size={40} color="orange" />,
  docker: <FaDocker size={40} color="#2496ED" />,
  kubernetes: <SiKubernetes size={40} color="blue" />,
  fastapi: <SiFastapi size={40} color="teal" />,
};

export const skillsIcon = (skill: string): JSX.Element | null => {
  const formattedSkill = skill.toLowerCase().trim();
  return skillsMap[formattedSkill] || null;
};
