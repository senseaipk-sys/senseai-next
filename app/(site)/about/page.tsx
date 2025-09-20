import { company } from "@/lib/data";

export const metadata = { title: "About — SenseAI" };

export default function AboutPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-semibold">About SenseAI</h1>
      <p className="mt-4 text-gray-700">{company.summary}</p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <section className="card">
          <h2 className="font-semibold text-xl">Founder</h2>
          <p className="mt-2"><strong>{company.founder.name}</strong></p>
          <ul className="list-disc ml-5 mt-2">
            {company.founder.roles.map(r => <li key={r}>{r}</li>)}
          </ul>
          <h3 className="mt-4 font-medium">Interests</h3>
          <div className="mt-2">
            {company.founder.interests.map(i => <span key={i} className="tag">{i}</span>)}
          </div>
        </section>

        <section className="card">
          <h2 className="font-semibold text-xl">Contact</h2>
          <p className="mt-2">Email: <a className="text-brand" href={`mailto:${company.email}`}>{company.email}</a></p>
          <p className="mt-1">{company.location}</p>
          <div className="mt-4">
            {company.social.map(s => (
              <a key={s.href} href={s.href} className="mr-4 text-brand underline" target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
