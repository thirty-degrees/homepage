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
    {
      name: "Online Watermarks",
      imageUrl: "/online-watermarks-logo.svg",
      devs: ["Robin"],
      githubLink: "",
      liveAppLink: "https://onlinewatermarks.com",
    },
  ];

  const projectCards = projects.map((project, index) => (
    <ProjectCard key={`project-${index}`} project={project} />
  ));

  const allCards = [...projectCards];

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
