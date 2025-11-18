import ProjectsList from "../components/ProjectList";

export default function Projects() {
  return (
    <div className="min-h-screen px-6 py-16 bg-blue-200 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-600 tracking-wide mb-2">
          My Projects
        </h1>
        <p className="text-gray-700 max-w-xl mx-auto text-sm">
          Explore the collection of works I've built — creative, clean, and made with passion.
        </p>
      </div>

      {/* Project List Wrapped in Card */}
      <div className="bg-white/60 backdrop-blur-md shadow-xl rounded-3xl p-10 w-full max-w-5xl border border-pink-200">
        <ProjectsList />
      </div>
    </div>
  );
}