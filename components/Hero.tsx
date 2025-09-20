import Link from "next/link";

export default function Hero() {
  return (
    <section className="container py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="tag">AI • Sensors • Health • Research</span>
          <h1 className="text-4xl md:text-5xl font-semibold mt-3">Intelligent systems for the real world</h1>
          <p className="mt-4 text-gray-600">We design practical AI for wearables, healthcare, and enterprise analytics.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/projects" className="btn">View Projects</Link>
            <Link href="/contact" className="inline-flex items-center px-4 py-2 rounded-2xl border">Get in touch</Link>
          </div>
        </div>
        <div className="card">
          <h3 className="font-medium text-lg">Founder</h3>
          <p className="mt-2"><strong>Dr. Muhammad Adeel Nisar</strong></p>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            /*<li>Assistant Professor (PUCIT, University of the Punjab)</li>*/
            <li>Co-Founder SenseAI</li>*/
            <li>Senior AI Consultant • ML Engineer • GenAI Expert</li>
            <li>Focus: HAR, time-series, sensor fusion, health informatics</li>
          </ul>
          <p className="mt-3 text-sm text-gray-500">Email: adeelnisar@gmail.com</p>
        </div>
      </div>
    </section>
  );
}


<img src="/hero.jpg" alt="SenseAI" className="rounded-2xl shadow-md mt-6" />