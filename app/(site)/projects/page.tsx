import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata = { title: "Projects — SenseAI" };

export default function ProjectsPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="mt-2 text-gray-700">A selection of ongoing research, prototypes, and pilots.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {projects.map(p => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </main>
  );
}
