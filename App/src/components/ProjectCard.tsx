import { Github, ExternalLink, Clock } from "lucide-react";
import Image from "next/image";

interface Project {
  name: string;
  imageUrl: string;
  devs: string[];
  hoursInvested: number;
  githubLink: string;
  liveAppLink: string;
}

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({
  project,
  className = "",
}: ProjectCardProps) {
  const getDevBadgeColor = (dev: string) => {
    if (dev.toLowerCase().includes("damian")) {
      return "bg-orange-500 text-white";
    } else if (dev.toLowerCase().includes("robin")) {
      return "bg-blue-400 text-white";
    }
    return "bg-gray-500 text-white";
  };

  return (
    <div
      className={`w-[250px] h-full bg-black border-2 border-gray-600 rounded-xl flex flex-col items-center p-6 shadow-[0_0_20px_rgba(255,255,255,0.1)] ${className}`}
    >
      <div className="w-20 h-20 mb-4 rounded-2xl overflow-hidden shadow-lg self-start">
        <Image
          src={project.imageUrl}
          alt={project.name}
          width={80}
          height={80}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-white text-lg font-semibold text-left mb-3 leading-tight w-full">
        {project.name}
      </h3>

      <div className="flex flex-wrap gap-2 justify-start mb-4 w-full">
        {project.devs.map((dev, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-xs font-medium ${getDevBadgeColor(
              dev
            )}`}
          >
            {dev}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-4 w-full">
        <Clock size={16} className="text-gray-400" />
        <span className="text-gray-400 text-sm">
          {project.hoursInvested} hours invested
        </span>
      </div>

      <div className="flex space-x-3 mt-auto">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium"
        >
          <Github size={16} />
          GitHub
        </a>
        <a
          href={project.liveAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium"
        >
          <ExternalLink size={16} />
          App
        </a>
      </div>
    </div>
  );
}

export function PlaceholderProjectCard({
  className = "",
  opacity = "opacity-20",
}: {
  className?: string;
  opacity?: string;
}) {
  return (
    <div
      className={`w-[250px] h-full bg-black border-2 border-gray-600 rounded-xl flex items-center justify-center ${opacity} ${className}`}
    >
      <span className="text-white text-2xl font-bold">Coming Soon</span>
    </div>
  );
}

export type { Project, ProjectCardProps };
