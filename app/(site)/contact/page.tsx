export const metadata = { title: "Contact — SenseAI" };

export default function ContactPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-3 text-gray-700">Email us at <a className="text-brand" href="mailto:senseaipk@gmail.com">senseaipk@gmail.com</a>. We'll respond within 1–2 business days.</p>
      <div className="card mt-6">
        <h2 className="font-medium">What to include</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700">
          <li>Your goals and timeline</li>
          <li>Available data sources (sensors, logs, APIs)</li>
          <li>Constraints (budget, privacy, on-prem/offline needs)</li>
        </ul>
      </div>
    </main>
  );
}
