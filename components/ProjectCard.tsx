import Link from "next/link";
import type { Project } from "@/lib/data";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link href={`/projects/${p.slug}`} className="card block hover:shadow-md transition">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        {p.status && <span className="tag">{p.status}</span>}
      </div>
      <p className="mt-2 text-gray-600">{p.brief}</p>
      <div className="mt-3">
        {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
      </div>
    </Link>
  );
}
