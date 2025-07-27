import React from 'react';
// If you're using a local image instead of a URL, uncomment this:
// import logo from './assets/WhatsApp Image 2025-06-06 at 14.50.51_fd9903a2.jpg';

export default function App() {
  return (
    <div className="min-h-screen bg-lightblue flex flex-col items-center justify-start pt-10">
      {/* Navbar */}
      <div className="w-full max-w-5xl flex justify-between items-center px-6">
        <div className="flex items-center space-x-3">
          {/* Logo from URL */}
          <img
            src="WhatsApp Image 2025-06-06 at 14.50.51_fd9903a2.jpg" // Replace with your actual logo link
            alt="Logo"
            className="w-10 h-10 object-contain rounded"
          />
          <h1 className="text-3xl font-bold">Sukhamaya Travels</h1>
        </div>

        <div className="space-x-4">
          <button className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200">Packages</button>
          <button className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200">Vehicles</button>
        </div>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-xl mt-10 border border-blue-300 rounded-xl shadow-lg bg-white p-6">
        <div className="flex items-left gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Source</label>
            <input type="text" className="w-full border border-gray-300 rounded px-2 py-1" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Destination</label>
            <input type="text" className="w-full border border-gray-300 rounded px-2 py-1" />
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input type="date" className="w-full border border-gray-300 rounded px-2 py-1" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Members</label>
            <input type="number" className="w-full border border-gray-300 rounded px-2 py-1" />
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Check
          </button>
        </div>
      </div>
    </div>
  );
}
