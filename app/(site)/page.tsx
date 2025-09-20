import Hero from "@/components/Hero";
import Link from "next/link";
import { services, projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="container">
        <h2 className="text-2xl font-semibold">What we do</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {services.map((s) => (
            <div key={s.title} className="card">
              <h3 className="font-semibold">{s.title}</h3>
              <ul className="list-disc ml-5 mt-2 text-gray-600">
                {s.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Highlighted projects</h2>
          <Link href="/projects" className="text-brand">See all</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {projects.slice(0,4).map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </section>
    </main>
  );
}
