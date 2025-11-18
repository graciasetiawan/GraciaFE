import { useEffect, useState } from "react";

export default function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/profile")
      .then((res) => res.json())
      .then(setProfile);
  }, []);

  if (!profile)
    return <p className="text-gray-400 text-center mt-10">Loading profile...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-blue-200">
      {/* Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-3xl w-full text-center border border-blue-200">
        {/* Profile image */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/profil.jpg"
            alt={profile.name}
            className="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-white"
          />
        </div>

        {/* Text */}
        <p className="uppercase text-sm text-gray-500 tracking-widest mb-2">
          {profile.role}
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-3">
          {profile.name}
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed max-w-xl mx-auto">
          {profile.bio}
        </p>

      </div>
    </div>
  );
}