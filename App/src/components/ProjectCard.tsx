import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Project {
  name: string;
  imageUrl: string;
  devs: string[];
  githubLink: string;
  liveAppLink: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // A more fisticated method to get the color for dev badges wouldn't be the money worth. But for now this is fine.
  const getDevBadgeColor = (dev: string) => {
    if (dev.toLowerCase().includes("damian")) {
      return "bg-orange-500 text-white";
    } else if (dev.toLowerCase().includes("robin")) {
      return "bg-blue-400 text-white";
    }
    return "bg-gray-500 text-white";
  };

  return (
    <div className="w-full max-w-72 md:w-80 h-[200px] md:h-full bg-black border-2 border-gray-600 rounded-xl flex flex-col items-center p-3 md:p-6 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
      <div className="w-12 h-12 md:w-20 md:h-20 mb-2 md:mb-4 rounded-2xl overflow-hidden shadow-lg self-start">
        <Image
          src={project.imageUrl}
          alt={project.name}
          width={80}
          height={80}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <h3 className="text-white text-sm md:text-lg font-semibold text-left mb-1 md:mb-3 leading-tight w-full">
        {project.name}
      </h3>

      <div className="flex flex-wrap gap-1 md:gap-2 justify-start mb-2 md:mb-4 w-full">
        {project.devs.map((dev, index) => (
          <span
            key={index}
            className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium ${getDevBadgeColor(
              dev,
            )}`}
          >
            {dev}
          </span>
        ))}
      </div>

      <div className="flex flex-row gap-2 md:gap-3 mt-auto w-full">
        <a
          href={project.liveAppLink}
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 bg-blue-600 text-white rounded-lg text-xs md:text-sm font-medium"
        >
          <ExternalLink size={16} />
          <span className=" md:inline">App</span>
        </a>
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 bg-gray-800 text-white rounded-lg text-xs md:text-sm font-medium"
          >
            <Github size={16} />
            <span className="hidden md:inline">GitHub</span>
          </a>
        )}
      </div>
    </div>
  );
}

export function PlaceholderProjectCard({
  opacity = "opacity-20",
}: {
  opacity?: string;
}) {
  return (
    <div
      className={`w-full max-w-72 md:w-80 h-[200px] md:h-full bg-black border-2 border-gray-600 rounded-xl flex items-center justify-center ${opacity}`}
    >
      <span className="text-white text-sm md:text-2xl font-bold">
        Coming Soon
      </span>
    </div>
  );
}

export type { Project, ProjectCardProps };
