import { useEffect, useState } from "react";

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/about")
      .then((res) => res.json())
      .then(setAbout);
  }, []);

  if (!about)
    return (
      <p className="text-gray-400 text-center mt-10">Loading...</p>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200 px-6 py-16">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl p-10 text-center border border-blue-200">
        {/* Avatar / Icon */}
        <div className="w-28 h-28 mx-auto rounded-full bg-blue-200 flex items-center justify-center text-blue-600 text-4xl font-bold mb-6 shadow">
          {about.title.charAt(0)}
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4 tracking-wide">
          {about.title}
        </h1>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed text-lg">
          {about.description}
        </p>

      </div>
    </div>
  );
}