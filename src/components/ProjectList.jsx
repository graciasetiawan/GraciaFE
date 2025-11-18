import { useEffect, useState } from "react";

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <div
          key={p.id}
          className="rounded-2xl bg-white shadow-md hover:shadow-xl transition p-6"
        >
          <h3 className="text-xl font-bold text-black mb-2">{p.title}</h3>
          <p className="text-gray-700 text-sm leading-relaxed">{p.desc}</p>

          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-pink-600 transition shadow-md">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}