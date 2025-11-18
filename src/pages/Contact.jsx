import { useEffect, useState } from "react";

export default function Contact() {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/contact")
      .then((res) => res.json())
      .then(setContact);
  }, []);

  if (!contact)
    return (
      <p className="text-gray-400 text-center mt-10">Loading contact info...</p>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200 px-6 py-16">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-lg border border-pink-200">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-blue-600 text-center mb-6">
          Get in Touch
        </h1>

        {/* Contact Cards */}
        <div className="space-y-5 text-left">
          <div className="p-4 rounded-xl bg-blue-50 border border-pink-200 shadow-sm">
            <p className="text-gray-600 text-sm">Email</p>
            <p className="font-semibold text-gray-800">{contact.email}</p>
          </div>

          <div className="p-4 rounded-xl bg-blue-50 border border-pink-200 shadow-sm">
            <p className="text-gray-600 text-sm">Instagram</p>
            <p className="font-semibold text-gray-800">{contact.instagram}</p>
          </div>

          <div className="p-4 rounded-xl bg-blue-50 border border-pink-200 shadow-sm">
            <p className="text-gray-600 text-sm">Location</p>
            <p className="font-semibold text-gray-800">{contact.location}</p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-pink-600 transition font-medium">
            Send a Message
          </button>
        </div>
      </div>
    </div>
  );
}