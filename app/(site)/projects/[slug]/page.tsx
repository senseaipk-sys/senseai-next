import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props) {
  const p = projects.find(x => x.slug === params.slug);
  return { title: p ? `${p.title} — SenseAI` : "Project — SenseAI" };
}

export default function ProjectPage({ params }: Props) {
  const p = projects.find(x => x.slug === params.slug);
  if (!p) return notFound();
  return (
    <main className="container py-12">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-semibold">{p.title}</h1>
        {p.status && <span className="tag">{p.status}</span>}
      </div>
      <p className="mt-3 text-gray-700">{p.brief}</p>
      <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
        {p.details.map((d, i) => <li key={i}>{d}</li>)}
      </ul>
      {p.links && p.links.length > 0 && (
        <div className="mt-6">
          {p.links.map(l => <a key={l.href} href={l.href} className="text-brand underline mr-4" target="_blank" rel="noreferrer">{l.label}</a>)}
        </div>
      )}
    </main>
  );
}
