export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-8 text-sm flex items-center justify-between">
        <p>© {new Date().getFullYear()} SenseAI. All rights reserved.</p>
        <p className="text-gray-500">Lahore, Pakistan</p>
      </div>
    </footer>
  );
}
