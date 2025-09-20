import { services } from "@/lib/data";

export const metadata = { title: "Services — SenseAI" };

export default function ServicesPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-semibold">Services</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {services.map(s => (
          <div key={s.title} className="card">
            <h2 className="font-semibold text-xl">{s.title}</h2>
            <ul className="list-disc ml-5 mt-2 text-gray-700">
              {s.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
