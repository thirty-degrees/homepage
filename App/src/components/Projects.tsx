import ProjectCard, { Project, PlaceholderProjectCard } from "./ProjectCard";

export default function Projects() {
  const projects: Project[] = [
    {
      name: "Party Battle",
      imageUrl: "/party-battle-icon.png",
      devs: ["Robin", "Damian"],
      githubLink: "https://github.com/thirty-degrees/party-battle",
      liveAppLink: "https://party-battle.thirty-degrees.ch",
    },
  ];

  const projectCards = projects.map((project, index) => (
    <ProjectCard key={`project-${index}`} project={project} />
  ));

  // Add placeholder cards (as much as needed. After the second project i think we can delete them)
  const placeholderCards = [
    <PlaceholderProjectCard key="placeholder-1" opacity="opacity-20" />,
    <PlaceholderProjectCard key="placeholder-2" opacity="opacity-10" />,
    <PlaceholderProjectCard key="placeholder-3" opacity="opacity-5" />,
  ];

  const allCards = [...projectCards, ...placeholderCards];

  return (
    <div className="w-full h-full p-4 md:p-8 ">
      {/* Mobile Layout - vertical scroll*/}
      <div className="md:hidden w-full h-full">
        <div
          className={`grid grid-cols-2 gap-2 h-full ${
            projects.length > 2 ? "overflow-y-auto" : ""
          }`}
        >
          {allCards}
        </div>
      </div>

      {/* Desktop Layout - Horizontal scroll */}
      <div className="hidden md:block w-full h-full overflow-x-auto">
        <div className="flex flex-row space-x-4 min-w-max h-full">
          {allCards}
        </div>
      </div>
    </div>
  );
}
