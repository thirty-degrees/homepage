import ProjectCard, { Project, PlaceholderProjectCard } from "./ProjectCard";

export default function Projects() {
  const projects: Project[] = [
    {
      name: "Party Battle",
      imageUrl: "/party-battle-icon.png",
      devs: ["Robin", "Damian"],
      hoursInvested: 120,
      githubLink: "https://github.com/thirty-degrees/party-battle",
      liveAppLink: "https://party-battle.thirty-degrees.ch",
    },
  ];

  return (
    <div className="w-full h-full p-8 overflow-x-auto">
      <div className="flex flex-row space-x-4 min-w-max h-full">
        <ProjectCard project={projects[0]} />
        <PlaceholderProjectCard opacity="opacity-15" />
        <PlaceholderProjectCard opacity="opacity-10" />
        <PlaceholderProjectCard opacity="opacity-5" />
      </div>
    </div>
  );
}
